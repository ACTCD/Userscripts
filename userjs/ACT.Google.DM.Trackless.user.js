// ==UserScript==
// @name               ACT.Google.DM.Trackless
// @name:zh-CN         ACT.谷歌.DM.直链无跟踪
// @description        Make links direct and track less.
// @description:zh-CN  直接的链接，更少的跟踪。
// @author             ACTCD
// @version            20220722.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.Trackless.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.Trackless.user.js
// @match              *://www.google.com/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
	"use strict";

	window.addEventListener(
		"click",
		(event) => {
			const anchor = event.target.closest("a");
			if (!anchor) return;
			anchor.removeAttribute("ping");
			anchor.setAttribute("rel", "noopener noreferrer");
			const href = anchor.getAttribute("href");
			if (!href || href == "#") return;
			if (["button"].includes(anchor.getAttribute("role"))) return;
			const url = new URL(href, location);
			if (href.slice(0, 5) == "/url?") {
				anchor.href = url.searchParams.get("url") || href;
			}
			event.stopImmediatePropagation();
		},
		true,
	);

	if (location.pathname == "/search") {
		window.addEventListener(
			"contextmenu",
			(event) => {
				event.stopImmediatePropagation();
			},
			true,
		);

		window.addEventListener(
			"mousedown",
			(event) => {
				event.stopImmediatePropagation();
			},
			true,
		);

		window.addEventListener(
			"mouseup",
			(event) => {
				event.stopImmediatePropagation();
			},
			true,
		);
	}

	const inline_script = () => {
		window.navigator.sendBeacon = () => console.log("BAN: Beacon");
	};

	const script = document.createElement("script");
	script.textContent = "(" + inline_script + ")();";

	if (document.head) {
		document.head.append(script);
	} else {
		new MutationObserver((mutationList, observer) => {
			document.head && (observer.disconnect(), document.head.append(script));
		}).observe(document, { subtree: true, childList: true });
	}
})();
