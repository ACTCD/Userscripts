// ==UserScript==
// @name               ACT.Douban.MO.Stay
// @name:zh-CN         ACT.豆瓣.MO.Stay
// @description        Stay in web not app, browsing experience optimization.
// @description:zh-CN  留在网络而非应用，网站浏览体验优化。
// @author             ACTCD
// @version            20220827.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Douban.MO.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Douban.MO.Stay.user.js
// @match              *://*.douban.com/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        document.querySelector("#home_guide")?.click(); // Cover App banner
        document.querySelectorAll("a[href*='/doubanapp'],a[href*='/to_app']").forEach(e => e.removeAttribute("href")); // APP Jump Links
        document.querySelectorAll("section").forEach(e => e.innerHTML.includes('用App打开') && e.remove());
        document.querySelector(".expand")?.click(); // Auto Expand
        document.querySelector(".read-all a")?.click(); // Auto Expand
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
.TalionNav-static { display: none !important; } /* Top App banner */
.page { margin-top: 50px !important; top: 0 !important; } /* Top Space Fix */
.download-app { display: none !important; } /* Bottom App banner */
.open-in-app-fixed-bottom { display: none !important; } /* Bottom App banner */
body { padding-bottom: 0 !important; } /* Bottom Space Fix */
section h2 a { display: none !important; } /* 用App看更多 */
a.score-write { display: none !important; } /* Embed App banner */
.vendor-go-app { display: none !important; } /* Embed App banner */
.subject-banner { display: none !important; } /* Embed App banner */
.center { display: none !important; } /* AD */
div[style='position: relative;margin: 0 -18px'] { display: none !important; } /* AD */
`;

    if (document.head) {
        document.head.append(style);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(style));
        }).observe(document, { subtree: true, childList: true });
    }

})();
