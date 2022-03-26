// ==UserScript==
// @name               ACT.Jianshu.MO.Stay
// @name:zh-CN         ACT.简书.MO.Stay
// @description        Stay in web not app, browsing experience optimization.
// @description:zh-CN  留在网络而非应用，网站浏览体验优化。
// @author             ACTCD
// @version            20220326.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Jianshu.MO.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Jianshu.MO.Stay.user.js
// @match              *://*.jianshu.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        // Index
        document.querySelector("#jianshu-header")?.style.setProperty("position", "absolute"); // Release top space
        document.querySelector(".header-download")?.remove(); // Header App banner
        document.querySelector("#homepage button.close-btn")?.click(); // Cover App banner
        document.querySelector(".note__flow__download")?.remove(); // Embed App banner
        document.querySelector(".download-guide")?.remove(); // Float App banner
        document.querySelector(".index_call-app-btn")?.remove(); // Footer App banner
        document.querySelector("[class^='dialog'][style=''] .open-app-modal button.cancel")?.click(); // Content collapse
        // Article
        document.querySelector(".collapse-free-content")?.removeAttribute('class'); // Content collapse
        document.querySelector(".collapse-tips")?.remove(); // Content collapse
        document.querySelector(".download-app-guidance")?.click(); // Cover App banner
        document.querySelector(".app-open")?.remove(); // Embed App banner
        document.querySelector(".call-app-btn")?.remove(); // Float App banner
        document.querySelector(".comment-open-app-btn-wrap")?.remove(); // Footer App banner
        document.querySelector(".download")?.remove(); // Footer App banner
        document.querySelector(".note-graceful-button")?.parentElement.remove(); // Reward
        document.querySelector("#recommended-notes")?.remove(); // Recommended
        document.querySelector("div[aria-label='baidu-ad']")?.remove(); // AD
        document.querySelectorAll("img[data-original-src]").forEach(e => { // Fix Img display
            e.getAttribute("src") || e.setAttribute("src", e.getAttribute("data-original-src"));
        });
    }

    new MutationObserver(cleaner).observe(document, { subtree: true, childList: true, attributes: true });

    function DOMContentLoaded() {
        cleaner();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded);
    } else {
        DOMContentLoaded();
    }

    window.addEventListener('scroll', () => { // Auto see more
        if ((window.pageYOffset + window.innerHeight * 2) < document.body.clientHeight) return;
        document.querySelector(".open-app-modal button.cancel")?.click();
        document.querySelector(".flow-list-placeholder-load-more")?.click();
    });

})();
