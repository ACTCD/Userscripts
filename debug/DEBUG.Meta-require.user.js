// ==UserScript==
// @name               DEBUG.Meta-require
// @description        Demo user script alert URL.
// @author             ACTCD
// @version            20230910.1
// @match              *://example.com/*
// @grant              none
// @run-at             document-start
// @require            https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js
// @require            https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js
// ==/UserScript==

(function () {
	"use strict";
	alert(`jQuery: ${window?.jQuery?.fn?.jquery ?? "unload"}`);
})();
