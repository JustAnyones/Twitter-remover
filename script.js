// ==UserScript==
// @name         No social media
// @namespace    https://github.com/JustAnyones/Twitter-remover/
// @version      0.4
// @description  Prevents you from opening social media websites at any cost.
// @author       JustAnyone
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com/
// @updateURL    https://raw.githubusercontent.com/JustAnyones/Twitter-remover/main/script.js
// @downloadURL  https://raw.githubusercontent.com/JustAnyones/Twitter-remover/main/script.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let is_twitter = window.location.host === "twitter.com" || window.location.host === "x.com";
    
    // SrPelo and ChickenThoughts is good
    if (is_twitter && (window.location.pathname.includes("SrPelo") || window.location.pathname.includes("ChickyThoughts"))) {
      return 0;
    }
  
    window.stop();
    window.location.replace("https://www.researchgate.net/publication/323903323_A_Study_on_Positive_and_Negative_Effects_of_Social_Media_on_Society"); // lets educate 'em'
})();
