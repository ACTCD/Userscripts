// ==UserScript==
// @name               ACT.Douban.MO.Stay
// @description        Stay in web not app, browsing experience optimization.
// @author             ACTCD
// @version            20220325.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Douban.MO.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Douban.MO.Stay.user.js
// @match              *://*.douban.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        document.querySelector("#home_guide")?.click(); // Cover App banner
        document.querySelector(".TalionNav-static")?.remove(); // Top App banner
        document.querySelector(".page")?.style.setProperty("margin-top", "50px"); // Top Space Fix
        document.querySelector(".download-app")?.remove(); // Bottom App banner
        document.querySelector(".open-in-app-fixed-bottom")?.remove(); // Bottom App banner
        document.body.style.setProperty("padding-bottom", ""); // Bottom Space Fix
        document.querySelectorAll("a[href*='/doubanapp'],a[href*='/to_app']").forEach(e => e.removeAttribute("href")); // APP Jump Links
        document.querySelectorAll("section").forEach(e => { if (e.querySelector("span")?.innerHTML == "豆瓣榜单") e.remove(); });
        document.querySelectorAll("section h2 a").forEach(e => e.remove()); // 用App看更多
        document.querySelector("a.score-write")?.remove(); // Embed App banner
        document.querySelector(".vendor-go-app")?.remove(); // Embed App banner
        document.querySelector(".subject-banner")?.remove(); // Embed App banner
        document.querySelectorAll(".center").forEach(e => e.remove()); // AD
        document.querySelectorAll("div[style='position: relative;margin: 0 -18px']").forEach(e => e.remove()); // AD
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

})();
