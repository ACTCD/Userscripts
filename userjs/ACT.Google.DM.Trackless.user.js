// ==UserScript==
// @name               ACT.Google.DM.Trackless
// @name:zh-CN         ACT.谷歌.DM.Trackless
// @description        Make links direct and track less.
// @description:zh-CN  直接的链接，更少的跟踪。
// @author             ACTCD
// @version            20220410.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.Trackless.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.Trackless.user.js
// @match              *://www.google.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    window.navigator.sendBeacon = () => null;

    window.addEventListener('click', event => {
        const anchor = event.target.closest('a');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href || ['button'].includes(anchor.getAttribute('role'))) return;
        const url = new URL(href, location);
        if (href.slice(0, 5) == '/url?') {
            const r_url = url.searchParams.get('url');
            r_url && (url.href = anchor.href = r_url);
        }
        anchor.removeAttribute('ping');
        if (anchor.hasAttribute('target')) {
            window.open(url, anchor.getAttribute('target'), 'noopener,noreferrer');
        } else {
            location.assign(url);
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    }, true);

    window.addEventListener('contextmenu', event => {
        event.stopImmediatePropagation();
    }, true);

    window.addEventListener('mousedown', event => {
        event.stopImmediatePropagation();
    }, true);

    window.addEventListener('mouseup', event => {
        event.stopImmediatePropagation();
    }, true);

})();
