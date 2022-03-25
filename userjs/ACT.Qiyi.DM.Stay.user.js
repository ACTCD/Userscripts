// ==UserScript==
// @name               ACT.Qiyi.DM.Stay
// @description        Stay in web not app, browsing experience optimization.
// @author             ACTCD
// @version            20220325.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Qiyi.DM.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Qiyi.DM.Stay.user.js
// @match              *://*.iqiyi.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    if (location.pathname == "/app/register_business/index.html") {
        window.stop();
        location.replace("/APP_Jump_Detected");
        return;
    }

    if (location.pathname == "/APP_Jump_Detected") {
        window.stop();
        document.body.outerHTML = "<h1><b>已阻止跳转APP行为，正在为您返回前页……<b><h1>";
        setTimeout(() => window.history.back(), 500);
        return;
    }

    function cleaner() {
        document.querySelector(".m-iqyGuide-layer")?.remove(); // Cover App banner
        document.querySelector("div[class^='ChannelHomeBanner_']")?.remove(); // Float App banner
        document.querySelector("div[name='m-recList']")?.remove(); // Recommended App
        document.querySelector('[is-call-app="true"]')?.remove(); // Embed App banner
        document.querySelector('[name="m-videoRec"]')?.remove(); // Embed App banner
        document.querySelector(".m-iqylink-guide")?.remove(); // Embed App banner
        document.querySelector(".m-hotWords-bottom")?.remove(); // Float App banner
        document.querySelector(".m-iqylink-diversion")?.remove(); // Bottom App banner
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
