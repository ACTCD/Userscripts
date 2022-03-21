// ==UserScript==
// @name               ACT.Youtube.DM.Auto-translate
// @description        Automatically translate any non-specified language Subtitles/CC.
// @author             ACTCD
// @version            20220322.1
// @namespace          https://t.me/ACTCD
// @supportURL         https://t.me/ACTDC
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Youtube.DM.Auto-translate.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Youtube.DM.Auto-translate.user.js
// @match              *://*.youtube.com/*
// @match              *://www.youtube-nocookie.com/embed/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    const inline_script = () => {
        const tlang = 'zh-CN'; // Specified language
        const XMLHttpRequest_open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
            let url = new URL(arguments[1], location.href);
            if (url.pathname == '/api/timedtext') {
                let lang = url.searchParams.get('lang');
                if (lang && lang != tlang) {
                    url.searchParams.set('tlang', tlang);
                    arguments[1] = url.href;
                }
            }
            XMLHttpRequest_open.apply(this, arguments);
        };
    }

    const script = document.createElement("script");
    script.textContent = '(' + inline_script + ')();';
    document.head.appendChild(script);

})();
