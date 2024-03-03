// ==UserScript==
// @name               DEBUG.Alert-URL
// @description        Demo user script alert URL.
// @author             ACTCD
// @version            20221118.1
// @match              *://*/*
// @grant              none
// @inject-into        content
// @run-at             document-start
// ==/UserScript==

(function () {
	"use strict";
	alert("DEBUG.Alert-URL:\n\n" + location);
})();
