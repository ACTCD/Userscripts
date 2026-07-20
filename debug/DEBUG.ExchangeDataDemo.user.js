// ==UserScript==
// @name               DEBUG.ExchangeDataDemo
// @description        Use custom `unsafeWindow` to exchange data.
// @author             ACTCD
// @version            20260721.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/dev/debug/DEBUG.ExchangeDataDemo.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/dev/debug/DEBUG.ExchangeDataDemo.user.js
// @match              *://*.example.com/*
// @grant              GM.listValues
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
	"use strict";

	// Content script context
	console.info("Content script context:", window.browser.runtime);
	const randomEventNameCtoP = crypto.randomUUID();
	const randomEventNamePtoC = crypto.randomUUID();

	// Create a closed-shadow-root with a iframe
	const iframe = document.createElement("iframe");
	const div = document.createElement("div");
	div.style.display = "none";
	const shadowRoot = div.attachShadow({ mode: "closed" });
	shadowRoot.append(iframe);
	(document.body ?? document.head ?? document.documentElement).append(div);

	function handle(detail) {
		// Please check and use the received data carefully, sanitize before use.
		// Even if random event names are used, there is still the possibility of malicious tampering.
		const data = detail.data;
		if (typeof data !== "number") return "error data";
		GM.listValues(); // You can do whatever you want with `GM APIs` here...
		return data + data;
	}

	iframe.contentWindow.addEventListener(randomEventNamePtoC, (event) => {
		console.log("Content script receive:", event.detail);
		iframe.contentWindow.dispatchEvent(
			new CustomEvent(randomEventNameCtoP, {
				detail: { result: handle(event.detail), from: "Content script" },
			}),
		);
	});

	// Page script wrapper
	const exchangeData = {
		// Pass the variables you need to use to the page context (Any that can be structured clone serialized)
		randomEventNameCtoP,
		randomEventNamePtoC,
	};
	const inlineScript = (exchangeData) => {
		// Page iframe context
		// You cannot use `GM APIs` inside this function
		const { randomEventNamePtoC, randomEventNameCtoP } = exchangeData;
		// here `window` is iframe global, `window.parent` is page global.
		// note such as dispatchEvent in the page global may have been tampered,
		// calling any global function in unsafeWindow is considered vulnerable.
		// use dispatchEvent, CustomEvent in iframe global to send and receive messages
		// custom unsafeWindow point to page window
		const unsafeWindow = window.parent;
		unsafeWindow.page_data = 1; // set page property
		console.info("Page script context:", unsafeWindow.browser.runtime);
		console.info("Page script page_data:", unsafeWindow.page_data);
		console.info("Page iframe context:", window.browser.runtime);
		console.info("Page iframe page_data:", window.page_data);
		const sendmsg = (data) =>
			window.dispatchEvent(
				new CustomEvent(randomEventNamePtoC, {
					detail: { data: data, from: "Page script" },
				}),
			);
		const simulate = () => {
			sendmsg(unsafeWindow.page_data); // get page property
			unsafeWindow.page_data++; // page property changes
		};
		window.setInterval(simulate, 3000);
		window.addEventListener(randomEventNameCtoP, (event) =>
			console.log("Page script receive:", event.detail),
		);
	};

	// Inject script to page iframe
	const script = document.createElement("script");
	script.textContent = `(${inlineScript})(${JSON.stringify(exchangeData)}); //# sourceURL=pageInlineScript.js`;
	iframe.contentWindow.document.documentElement.append(script);
})();
