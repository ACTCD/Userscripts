// ==UserScript==
// @name               ACT.YouTube.DM.PiP-button
// @name:zh-CN         ACT.YouTube.DM.画中画按钮
// @description        Add a PiP button to the player to easy enter Picture-in-Picture mode.
// @description:zh-CN  为播放器添加画中画按钮，轻松进入画中画模式。
// @author             ACTCD
// @version            20220330.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.YouTube.DM.PiP-button.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.YouTube.DM.PiP-button.user.js
// @match              *://*.youtube.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    if (!document.pictureInPictureEnabled) {
        console.log('Your browser cannot use picture-in-picture right now');
        return;
    }

    // Create PiP Button
    const pip_button = document.createElement("button");
    pip_button.title = "Picture-in-Picture";
    const svg = document.createElement("svg");
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '-8 -6 36 36');
    const path = document.createElement("path");
    const path1 = "M2.5,17A1.5,1.5,0,0,1,1,15.5v-9A1.5,1.5,0,0,1,2.5,5h13A1.5,1.5,0,0,1,17,6.5V10h1V6.5A2.5,2.5,0,0,0,15.5,4H2.5A2.5,2.5,0,0,0,0,6.5v9A2.5,2.5,0,0,0,2.5,18H7V17Z M18.5,11h-8A2.5,2.5,0,0,0,8,13.5v5A2.5,2.5,0,0,0,10.5,21h8A2.5,2.5,0,0,0,21,18.5v-5A2.5,2.5,0,0,0,18.5,11Z";
    const path2 = "M18.5,11H18v1h.5A1.5,1.5,0,0,1,20,13.5v5A1.5,1.5,0,0,1,18.5,20h-8A1.5,1.5,0,0,1,9,18.5V18H8v.5A2.5,2.5,0,0,0,10.5,21h8A2.5,2.5,0,0,0,21,18.5v-5A2.5,2.5,0,0,0,18.5,11Z M14.5,4H2.5A2.5,2.5,0,0,0,0,6.5v8A2.5,2.5,0,0,0,2.5,17h12A2.5,2.5,0,0,0,17,14.5v-8A2.5,2.5,0,0,0,14.5,4Z";
    path.setAttribute('fill', '#fff');
    svg.append(path);
    if (location.hostname == "m.youtube.com") {
        pip_button.style.setProperty("position", "absolute");
        pip_button.style.setProperty("z-index", "100");
        pip_button.style.setProperty("top", '0px');
        pip_button.style.setProperty("left", '4px');
        svg.setAttribute('width', '42px');
    } else {
        pip_button.className = "ytp-button";
        path.id = 'ACT_PiP_Path';
        const use = document.createElement("use");
        use.className = 'ytp-svg-shadow';
        use.setAttribute('href', '#' + path.id);
        path.before(use);
    }
    pip_button.addEventListener("click", event => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {
            document.querySelector("video[src]")?.requestPictureInPicture();
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    }, true);
    const pip_button_act = pathx => { path.setAttribute('d', pathx); pip_button.innerHTML = svg.outerHTML; };
    pip_button_act(path1);

    // Insert PiP Button (desktop) // Fixed once for unreliable @run-at document-start
    document.querySelector(".ytp-miniplayer-button")?.before(pip_button);

    // Video element initialization
    const PiP_Fix = e => e.stopPropagation();
    const onEnterPip = e => pip_button_act(path2);
    const onExitPip = e => pip_button_act(path1);
    const pip_init = video => {
        if (!video || video.nodeName != 'VIDEO' || !video.hasAttribute("src")) return;
        video.addEventListener('webkitpresentationmodechanged', PiP_Fix, true);
        video.addEventListener("leavepictureinpicture", onExitPip);
        video.addEventListener('enterpictureinpicture', onEnterPip);
    }
    pip_init(document.querySelector('video[src]'));

    // Dynamic adjustment
    new MutationObserver(mutationList => {
        mutationList.forEach((mutation) => {
            if (mutation.type == 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType != Node.ELEMENT_NODE) return;
                    node.nodeName == 'VIDEO' && pip_init(node);
                    node.classList.contains("ytp-miniplayer-button") && node.before(pip_button); // Insert PiP Button (desktop)
                })
            }
            if (mutation.type == 'attributes') {
                mutation.target.nodeName == 'VIDEO' && mutation.attributeName == 'src' && pip_init(mutation.target);
                if (mutation.target.id == "player-control-overlay" && mutation.attributeName == 'class') { // Insert PiP Button (mobile)
                    mutation.target.classList.contains("fadein") ? document.querySelector('#player-container-id').append(pip_button) : pip_button.remove();
                }
            }
        });
    }).observe(document, { subtree: true, childList: true, attributes: true });

})();
