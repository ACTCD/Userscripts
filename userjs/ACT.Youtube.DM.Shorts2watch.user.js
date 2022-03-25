// ==UserScript==
// @name               ACT.Youtube.DM.Shorts2watch
// @description        Back to watch page from shorts feeds by one-click button, open shorts on the watch page in channel videos.
// @author             ACTCD
// @version            20220326.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Youtube.DM.Shorts2watch.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Youtube.DM.Shorts2watch.user.js
// @match              *://*.youtube.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    const button = document.createElement('button');
    button.id = 'ACT_Shorts2watch';
    button.innerText = 'Back to watch';
    const style = document.createElement('style');
    style.textContent = `
#ACT_Shorts2watch {
    border: 2px solid;
    border-radius: 10px;
    padding: 1px 5px;
    font-size: 1.8em;
    font-weight: 500;
    font-family: Roboto,Arial,sans-serif;
    color: black;
    background-color: transparent;
}
@media (prefers-color-scheme: dark) {
    #ACT_Shorts2watch { color: white; } 
}
`;
    if (location.hostname == 'm.youtube.com') {
        button.style.setProperty('position', 'fixed');
        button.style.setProperty('z-index', '100');
        button.style.setProperty('top', '8px');
        button.style.setProperty('right', '8px');
        button.style.setProperty('color', 'white');
        button.style.setProperty('text-shadow', 'black 1px 1px 2px');
    }
    button.addEventListener("click", event => {
        if (location.pathname.slice(0, 8) == '/shorts/') {
            location.href = '/watch?v=' + location.pathname.slice(8);
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    });

    new MutationObserver(mutationList => {
        // Hide shorts icon
        document.querySelectorAll('ytd-grid-video-renderer [overlay-style="SHORTS"]').forEach(e => e.style.setProperty('display', 'none'));
        document.querySelectorAll('ytm-compact-video-renderer [data-style="SHORTS"]').forEach(e => e.style.setProperty('display', 'none'));
        // Dynamic button
        if (location.pathname.slice(0, 8) == '/shorts/') {
            if (location.hostname == 'm.youtube.com') {
                let t = document.body;
                t && t != button.parentNode && t.appendChild(button);
            }
            if (location.hostname == 'www.youtube.com') {
                let t = document.querySelector('#masthead #logo');
                t && t.nextElementSibling != button && t.after(button);
            }
        } else {
            button.remove();
        }
    }).observe(document, { subtree: true, childList: true, attributes: true });

    window.addEventListener('click', event => {
        // Shorts in channel video list open on the watch page, not shorts feeds.
        const selectors_hotzone = [
            'ytd-grid-video-renderer ytd-thumbnail a yt-img-shadow img',
            'ytd-grid-video-renderer ytd-thumbnail a #label-container',
            'ytd-grid-video-renderer #details #meta',
            'ytd-grid-video-renderer #details #meta *',
            'ytd-grid-video-renderer #details ytd-badge-supported-renderer',
            'ytd-reel-item-renderer ytd-thumbnail a yt-img-shadow img',
            'ytd-reel-item-renderer #details a',
            'ytd-reel-item-renderer #details a *',
            'ytm-compact-video-renderer a',
            'ytm-compact-video-renderer a *',
            'ytm-reel-item-renderer a',
            'ytm-reel-item-renderer a *',
        ];
        const selectors_renderer = [...new Set(selectors_hotzone.map(v => v.split(' ')[0]))];
        if (event.target.matches(selectors_hotzone.join())) {
            let anchor = event.target.closest('a[href^="/shorts/"]') ?? event.target.closest(selectors_renderer.join()).querySelector('a[href^="/shorts/"]');
            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href.slice(0, 8) == '/shorts/') {
                    location.href = '/watch?v=' + href.slice(8);
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            }
        }
    }, true);

    if (document.head) {
        document.head.appendChild(style);
    } else {
        new MutationObserver((mutationList, observer) => {
            if (document.head) {
                observer.disconnect();
                document.head.appendChild(style);
            }
        }).observe(document, { subtree: true, childList: true });
    }

})();
