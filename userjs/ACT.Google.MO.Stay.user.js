// ==UserScript==
// @name               ACT.Google.MO.Stay
// @description        Stay in web not app, Google Widget and APP Banner Remove.
// @author             ACTCD
// @version            20220324.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.MO.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.MO.Stay.user.js
// @match              *://*.google.com/*
// @match              *://*.google.com.hk/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        // Bottom Widget Banner
        document.querySelectorAll("button").forEach(e => {
            if (e.innerHTML == "Get the app" || e.innerHTML == "获取该应用") {
                // console.info('GOTCHA: ', e); // DEBUG
                let p = e.parentElement;
                let s = 0;
                while (s < 10) {
                    s++; if (!p) break;
                    if (p.parentElement.tagName == "BODY") break;
                    p = p.parentElement;
                }
                if (p.tagName == "DIV" && p.className != "main" && p.hasAttribute("style")) {
                    console.info('REMOVE: ', p);
                    p.remove();
                }
            }
        });
        // Bottom App Banner
        document.querySelectorAll("g-raised-button").forEach(e => {
            if (e.innerHTML.includes("Try it") || e.innerHTML.includes("试用")) {
                // console.info('GOTCHA: ', e); // DEBUG
                let p = e.parentElement;
                let s = 0;
                while (s < 10) {
                    s++; if (!p) break;
                    if (p.parentElement.tagName == "BODY") break;
                    p = p.parentElement;
                }
                if (p.tagName == "DIV" && p.className != "main" && p.id != "gb-main" && p.hasAttribute('style')) {
                    console.info('REMOVE: ', p);
                    p.remove();
                }
            }
        });
        // Bottom App Banner
        let b = document.querySelector('mobile-promo');
        if (b) {
            console.info('REMOVE: ', b);
            b.remove();
        }
    }

    new MutationObserver(cleaner).observe(document, { subtree: true, childList: true });

    function DOMContentLoaded() {
        cleaner();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded);
    } else {
        DOMContentLoaded();
    }

})();
