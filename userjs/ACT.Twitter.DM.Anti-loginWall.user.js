// ==UserScript==
// @name               ACT.Twitter.DM.Anti-loginWall
// @name:zh-CN         ACT.推特.DM.反登录墙
// @description        Anti login wall.
// @description:zh-CN  去除登录墙限制。
// @author             ACTCD
// @version            20221129.4
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
        document.querySelectorAll('#layers>div').forEach(e => {
            if (e.style.display == 'none') return;
            if (e.querySelector('[aria-label="关闭"], [aria-label="Close"], [data-testid="app-bar-close"]')) return;
            if (e.querySelector('input, [data-testid="TopNavBar"]')) {
                const b = e.querySelector('[href="/login"]')?.closest('[data-testid="twitter-logged-out-nav"]>div');
                if (b?.style.display != 'none') {
                    b.style.setProperty('display', 'none');
                    console.info('Navbar login banner:', e);
                }
                return;
            }
            if (e.querySelector('[href="/login"]')) {
                e.style.setProperty('display', 'none');
                return console.info('Bottom login banner:', e);
            }
            if (e.querySelector('[href="/signup"]')) {
                e.style.setProperty('display', 'none');
                return console.info('Cover login wall:', e);
            }
            for (const b of e.querySelectorAll('[role="button"]')) {
                if (['Log in', 'Sign up', '登录', '注册'].includes(b.innerText)) {
                    e.style.setProperty('display', 'none');
                    return console.info('Cover login wall:', e);
                }
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
html { overflow-y: scroll !important; } /* Scroll fix */
#credential_picker_container { display: none !important; } /* Float Google login */
/* #layers */
[data-testid="BottomBar"] { display: none !important; } /* Bottom login banner */
[data-testid="twitter-logged-out-nav"] { height: auto !important; } /* NavBar fix */
`;

    if (document.head) {
        document.head.append(style);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(style));
        }).observe(document, { subtree: true, childList: true });
    }

})();
