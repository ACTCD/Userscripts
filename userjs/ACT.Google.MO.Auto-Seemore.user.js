// ==UserScript==
// @name               ACT.Google.MO.Auto-Seemore
// @name:zh-CN         ACT.谷歌.MO.自动查看更多
// @description        Mobile google search See more automatically.
// @description:zh-CN  移动网站谷歌搜索自动查看更多。
// @author             ACTCD
// @version            20220326.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.MO.Auto-Seemore.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.MO.Auto-Seemore.user.js
// @match              *://*.google.com/*
// @match              *://*.google.com.hk/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('scroll', () => {
        if ((window.pageYOffset + window.innerHeight * 2) < document.body.clientHeight) return;
        let button = document.querySelector("a[aria-label='See more'],a[aria-label='查看更多']");
        if (button?.style.display != "none") button?.click();
    });

})();
