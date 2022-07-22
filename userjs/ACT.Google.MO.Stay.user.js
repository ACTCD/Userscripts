// ==UserScript==
// @name               ACT.Google.MO.Stay
// @name:zh-CN         ACT.谷歌.MO.Stay
// @description        Stay in web not app, Google Widget and APP Banner Remove.
// @description:zh-CN  留在网络而非应用，移除谷歌微件和APP推广横幅。
// @author             ACTCD
// @version            20220722.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.MO.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.MO.Stay.user.js
// @match              *://*.google.com/*
// @match              *://*.google.com.hk/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        const careful_remove = e => !e || e.className == "main" || e.id == "gb-main" || e.remove() || console.info('REMOVE:', e);
        // Index - Bottom App Banner
        document.querySelectorAll('mobile-promo').forEach(e => {
            // console.info('GOTCHA:', e); // DEBUG
            careful_remove(e.closest('body>div'))
        });
        document.querySelectorAll("g-raised-button").forEach(e => {
            if (e.textContent.includes("Try it") || e.textContent.includes("试用")) {
                // console.info('GOTCHA:', e); // DEBUG
                careful_remove(e.closest('body>div[style]'));
            }
        });
        // Search - Bottom Widget Banner
        document.querySelectorAll("button").forEach(e => {
            if (e.textContent == "Get the app" || e.textContent == "获取该应用") {
                // console.info('GOTCHA:', e); // DEBUG
                careful_remove(e.closest('body>div[id][style]'));
            }
        });
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

    const style = document.createElement('style');
    style.textContent = `/* Global style */
#center_col #taw { display: none !important; } /* AD */
#center_col #tads { display: none !important; } /* AD */
`;

    if (document.head) {
        document.head.append(style);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(style));
        }).observe(document, { subtree: true, childList: true });
    }

})();
