// ==UserScript==
// @name               ACT.YouTube.DM.Auto-translate
// @name:zh-CN         ACT.YouTube.DM.自动翻译
// @description        Automatically translate any non-specified language Subtitles/CC.
// @description:zh-CN  自动翻译任何非指定语言字幕。
// @author             ACTCD
// @version            20220722.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.YouTube.DM.Auto-translate.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.YouTube.DM.Auto-translate.user.js
// @match              *://*.youtube.com/*
// @match              *://www.youtube-nocookie.com/embed/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    const inline_script = () => {
        const tlang = navigator.language || 'zh-CN'; // Specified language // 指定语言
        const cache = { req_url: null, obj_url: null };
        const XMLHttpRequest_open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
            const url = new URL(arguments[1], location.href);
            if (url.pathname == '/api/timedtext') {
                const lang = url.searchParams.get('lang');
                if (lang && lang != tlang) {
                    const req_url = url.href;
                    if (req_url == cache.req_url) {
                        arguments[1] = cache.obj_url;
                    } else {
                        URL.revokeObjectURL(cache.obj_url);
                        this.addEventListener('load', event => {
                            cache.req_url = req_url;
                            cache.obj_url = URL.createObjectURL(new Blob([this.responseText], { type: 'application/json' }));
                        });
                        url.searchParams.set('tlang', tlang);
                        arguments[1] = url.href;
                    }
                }
            }
            XMLHttpRequest_open.apply(this, arguments);
        };
    };

    const script = document.createElement("script");
    script.textContent = '(' + inline_script + ')();';

    if (document.head) {
        document.head.append(script);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(script));
        }).observe(document, { subtree: true, childList: true });
    }

})();
