// ==UserScript==
// @name               ACT.Pengpai.MO.Stay
// @name:zh-CN         ACT.澎湃.MO.Stay
// @description        Stay in web not app, browsing experience optimization.
// @description:zh-CN  留在网络而非应用，网站浏览体验优化。
// @author             ACTCD
// @version            20220722.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Pengpai.MO.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Pengpai.MO.Stay.user.js
// @match              *://m.thepaper.cn/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        document.querySelector("header")?.style.setProperty("position", "absolute"); // Release top space
        document.querySelector(".homepage_nav")?.style.setProperty("position", "absolute"); // Release top space
        document.querySelector("#clickForMore")?.click(); // Content collapse
        document.querySelector(".header_moblink")?.remove(); // Header App banner
        document.querySelector(".listen_btn")?.remove(); // Embed App banner
        document.querySelector("#moblink_moreread")?.remove(); // Embed App banner
        document.querySelector("#hotCommentsDiv")?.remove(); // Embed App banner
        document.querySelector("#bottomBanner")?.remove(); // Footer App banner
        document.querySelector("#recommend")?.remove(); // Recommended
        document.querySelector("#newDetailHotRecommend")?.remove(); // Recommended
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

})();
