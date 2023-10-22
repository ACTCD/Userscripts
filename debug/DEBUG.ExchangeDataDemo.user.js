// ==UserScript==
// @name               DEBUG.ExchangeDataDemo
// @description        You don't need `unsafeWindow` to exchange data.
// @author             ACTCD
// @version            20231022.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/dev/debug/DEBUG.ExchangeDataDemo.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/dev/debug/DEBUG.ExchangeDataDemo.user.js
// @match              *://*.example.com/*
// @grant              GM.listValues
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    // Content scripts
    const cen = btoa(Math.random()).slice(3, 9);
    console.info('Custom Event name:', cen);
    console.info('Content scripts context:', window?.browser?.runtime);

    function handle(detail) {
        // Please check and use the received data carefully.
        // Even if random event names are used, there is still the possibility of malicious tampering.
        const data = detail.data;
        if (typeof (data) !== 'number') return 'error data';
        GM.listValues(); // You can do whatever you want with `GM APIs` here...
        return data + data;
    }

    window.addEventListener(cen, event => {
        console.log('Content scripts receive:', event.detail);
        window.dispatchEvent(new CustomEvent(cen + 1, { detail: { result: handle(event.detail), from: 'Content scripts' } }));
    });

    // Page scripts
    const exchangeData = { // Pass the variables you need to use to the page context (Any that can be structured clone serialized)
        cen: cen,
    };
    const inlineScript = (exchangeData) => { // You cannot use `GM APIs` inside this function
        const cen = exchangeData.cen;
        console.info('Page scripts context:', window?.browser?.runtime);
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
    script.textContent = `(${inlineScript})(${JSON.stringify(exchangeData)}); //# sourceURL=pageInlineScript.js`;

    if (document.head) {
        document.head.append(script);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(script));
        }).observe(document, { subtree: true, childList: true });
    }

})();
