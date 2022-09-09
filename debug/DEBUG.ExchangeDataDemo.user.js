// ==UserScript==
// @name               DEBUG.ExchangeDataDemo
// @description        You don't need `unsafeWindow` to exchange data.
// @author             ACTCD
// @version            20220909.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://github.com/ACTCD/Userscripts/raw/dev/debug/DEBUG.ExchangeDataDemo.user.js
// @downloadURL        https://github.com/ACTCD/Userscripts/raw/dev/debug/DEBUG.ExchangeDataDemo.user.js
// @match              *://example.com/*
// @grant              GM.getValue
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    // Content scripts
    const cen = btoa(Math.random()).slice(3, 9);
    console.log('Custom Event name:', cen);
    console.log('Content scripts context:', window.browser.extension);

    function handle(detail) {
        // Please check and use the received data carefully.
        // Even if random event names are used, there is still the possibility of malicious tampering.
        const data = detail.data;
        if (typeof (data) !== 'number') return 'error data';
        GM.getValue(); // You can do whatever processing you want...
        return data + data;
    }

    window.addEventListener(cen, event => {
        console.log('Content scripts receive:', event.detail);
        window.dispatchEvent(new CustomEvent(cen + 1, { detail: { result: handle(event.detail), from: 'Content scripts' } }));
    });

    // Page scripts
    const exchange_data = { // Pass the variables you need to use to the page context (only string values)
        cen: cen,
    };
    const inline_script = (exchange_data) => { // You cannot use `GM APIs` inside this function
        const cen = exchange_data.cen;
        console.log('Page scripts context:', window.browser.extension);
        const sendmsg = data => window.dispatchEvent(new CustomEvent(cen, { detail: { data: data, from: 'Page scripts' } }));
        window.page_data = 1;
        const simulate = () => {
            sendmsg(window.page_data);
            window.page_data++;
        };
        window.setInterval(simulate, 3000);
        window.addEventListener(cen + 1, event => console.log('Page scripts receive:', event.detail));
    };

    // Inject to Page
    const script = document.createElement("script");
    script.textContent = `(${inline_script})(${JSON.stringify(exchange_data)});`;

    if (document.head) {
        document.head.append(script);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(script));
        }).observe(document, { subtree: true, childList: true });
    }

})();
