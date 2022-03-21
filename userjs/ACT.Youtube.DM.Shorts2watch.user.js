// ==UserScript==
// @name               ACT.Youtube.DM.Shorts2watch
// @description        Back to watch page from shorts feeds by one-click button, open shorts on the watch page in channel videos.
// @author             ACTCD
// @version            20220322.1
// @namespace          https://t.me/ACTCD
// @supportURL         https://t.me/ACTDC
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
    button.innerText = 'Back to watch';
    button.style.setProperty('color', 'white');
    button.style.setProperty('background-color', 'transparent');
    button.style.setProperty('border', '2px solid');
    button.style.setProperty('border-radius', '10px');
    button.style.setProperty('padding', '1px 5px');
    button.style.setProperty('font-size', '1.5em');
    button.style.setProperty('font-weight', '500');
    button.style.setProperty('text-shadow', 'black 1px 1px 2px');
    if (location.hostname == 'm.youtube.com') {
        button.style.setProperty('position', 'fixed');
        button.style.setProperty('z-index', '100');
        button.style.setProperty('top', '8px');
        button.style.setProperty('right', '8px');
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
        document.querySelectorAll('ytd-grid-video-renderer[is-shorts] [overlay-style="SHORTS"]').forEach(e => e.style.setProperty('display', 'none'));
        document.querySelectorAll('ytm-compact-video-renderer [data-style="SHORTS"]').forEach(e => e.style.setProperty('display', 'none'));
        // Dynamic button
        if (location.pathname.slice(0, 8) == '/shorts/') {
            if (location.hostname == 'm.youtube.com') {
                let t = document.body;
                if (t && t != button.parentNode) t.appendChild(button);
            }
            if (location.hostname == 'www.youtube.com') {
                let t = document.querySelector('#masthead #logo');
                if (t && t.nextElementSibling != button) t.after(button);
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
        };
    }, true);

})();
