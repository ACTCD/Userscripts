// ==UserScript==
// @name               ACT.Twitter.DM.Anti-loginWall
// @name:zh-CN         ACT.推特.DM.反登录墙
// @description        Anti login wall.
// @description:zh-CN  去除登录墙限制。
// @author             ACTCD
// @version            20221129.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Twitter.DM.Anti-loginWall.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Twitter.DM.Anti-loginWall.user.js
// @match              *://*.twitter.com/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    function cleaner() {
        // document.querySelector("[data-testid='app-bar-close']")?.click();
        document.querySelector("[href='/login']")?.closest("#layers>div")?.style.setProperty("display", "none"); // Bottom login banner
        document.querySelector("[href='/signup']")?.closest("#layers>div")?.style.setProperty("display", "none"); // Cover login wall
        document.querySelectorAll("#layers [role=button]").forEach(e => { // Cover login wall
            if (['login', 'sign up', '登录', '注册'].includes(e.innerText)) {
                e.closest("#layers>div")?.style.setProperty("display", "none");
            }
        })
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
html { overflow-y: scroll !important; } /* Scroll fix */
#credential_picker_container { display: none !important; } /* Float Google login */
/* #layers */
[data-testid='BottomBar'] { display: none !important; } /* Bottom login banner */
`;

    if (document.head) {
        document.head.append(style);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(style));
        }).observe(document, { subtree: true, childList: true });
    }

})();
