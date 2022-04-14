// ==UserScript==
// @name               ACT.Zhihu.DM.Stay
// @name:zh-CN         ACT.知乎.DM.Stay
// @description        Stay in web not app, browsing experience optimization.
// @description:zh-CN  留在网络而非应用，网站浏览体验优化。
// @author             ACTCD
// @version            20220415.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Zhihu.DM.Stay.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Zhihu.DM.Stay.user.js
// @match              *://*.zhihu.com/*
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function () {
    'use strict';

    if (location.href == "https://www.zhihu.com/signin?next=%2F") location.replace("https://www.zhihu.com/explore"); // Index Login jump

    function cleaner() {
        //=D
        document.querySelector('.Modal-wrapper button.Modal-closeButton')?.click(); // Cover Login banner
        //=D/search
        document.querySelector('.SearchBar-tool input')?.setAttribute('placeholder', ''); // Recommended
        document.querySelectorAll('.AutoComplete-menu .AutoComplete-group').forEach(e => {
            e.querySelector('.SearchBar-topSearchItem') && e.style.setProperty('display', 'none'); // Recommended
        });
        //=D/question
        document.querySelector('.QuestionHeader .QuestionRichText-more')?.click(); // Content collapse
        document.querySelector('.QuestionHeader-footer.is-fixed')?.classList.remove("is-fixed"); // Fix space
        //=M/search
        document.querySelector('.MobileAppHeader-searchBox input[type=search]')?.setAttribute('placeholder', ''); // Recommended
        //=M/question
        document.querySelector('.ContentItem-expandButton')?.click(); // Content collapse
        document.querySelector('.RichContent-actions.is-fixed')?.classList.remove("is-fixed"); // Fix space
        //=Common
        document.querySelectorAll('a[href^="https://link.zhihu.com/"]').forEach(e => {
            const url = new URL(e.href);
            e.href = url.searchParams.get('target') ?? e.href;
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
/*=D/question */
.Question-mainColumnLogin { display: none !important; } /* Embed Login banner */
.List .Pc-word { display: none !important; } /* AD */
.Sticky .AppBanner { display: none !important; } /* Embed App banner */
.Sticky .Pc-card { display: none !important; } /* AD */
/*=M */
.MobileAppHeader-downloadLink { visibility: hidden !important; } /* Top App banner */
.OpenInAppButton,.OpenInApp { display: none !important; } /* Float App banner */
/*=M/explore */
#js-openInApp { display: none !important; } /* Top App banner */
/*=M/search */
.MobileHotSearch-container { display: none !important; } /* Recommended */
.MobileHistorySearch-container { padding-top: 15px !important; } /* Fix space */
/*=M/question */
.RelatedReadings { display: none !important; } /* Recommended */
.HotQuestions { display: none !important; } /* Recommended */
.MBannerAd { display: none !important; } /* AD */
`;

    if (document.head) {
        document.head.append(style);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(style));
        }).observe(document, { subtree: true, childList: true });
    }

})();
