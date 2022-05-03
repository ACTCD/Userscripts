// ==UserScript==
// @name               ACT.Google.DM.NCR
// @name:zh-CN         ACT.谷歌.DM.NCR
// @description        No country redirect, easy to switch region/language.
// @description:zh-CN  没有国家重定向，轻松切换区域/语言。
// @author             ACTCD
// @version            20220504.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.NCR.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.NCR.user.js
// @match              *://*.google.com/*
// @match              *://*.google.ad/*
// @match              *://*.google.ae/*
// @match              *://*.google.com.af/*
// @match              *://*.google.com.ag/*
// @match              *://*.google.com.ai/*
// @match              *://*.google.al/*
// @match              *://*.google.am/*
// @match              *://*.google.co.ao/*
// @match              *://*.google.com.ar/*
// @match              *://*.google.as/*
// @match              *://*.google.at/*
// @match              *://*.google.com.au/*
// @match              *://*.google.az/*
// @match              *://*.google.ba/*
// @match              *://*.google.com.bd/*
// @match              *://*.google.be/*
// @match              *://*.google.bf/*
// @match              *://*.google.bg/*
// @match              *://*.google.com.bh/*
// @match              *://*.google.bi/*
// @match              *://*.google.bj/*
// @match              *://*.google.com.bn/*
// @match              *://*.google.com.bo/*
// @match              *://*.google.com.br/*
// @match              *://*.google.bs/*
// @match              *://*.google.bt/*
// @match              *://*.google.co.bw/*
// @match              *://*.google.by/*
// @match              *://*.google.com.bz/*
// @match              *://*.google.ca/*
// @match              *://*.google.cd/*
// @match              *://*.google.cf/*
// @match              *://*.google.cg/*
// @match              *://*.google.ch/*
// @match              *://*.google.ci/*
// @match              *://*.google.co.ck/*
// @match              *://*.google.cl/*
// @match              *://*.google.cm/*
// @match              *://*.google.cn/*
// @match              *://*.google.com.co/*
// @match              *://*.google.co.cr/*
// @match              *://*.google.com.cu/*
// @match              *://*.google.cv/*
// @match              *://*.google.com.cy/*
// @match              *://*.google.cz/*
// @match              *://*.google.de/*
// @match              *://*.google.dj/*
// @match              *://*.google.dk/*
// @match              *://*.google.dm/*
// @match              *://*.google.com.do/*
// @match              *://*.google.dz/*
// @match              *://*.google.com.ec/*
// @match              *://*.google.ee/*
// @match              *://*.google.com.eg/*
// @match              *://*.google.es/*
// @match              *://*.google.com.et/*
// @match              *://*.google.fi/*
// @match              *://*.google.com.fj/*
// @match              *://*.google.fm/*
// @match              *://*.google.fr/*
// @match              *://*.google.ga/*
// @match              *://*.google.ge/*
// @match              *://*.google.gg/*
// @match              *://*.google.com.gh/*
// @match              *://*.google.com.gi/*
// @match              *://*.google.gl/*
// @match              *://*.google.gm/*
// @match              *://*.google.gr/*
// @match              *://*.google.com.gt/*
// @match              *://*.google.gy/*
// @match              *://*.google.hk/*
// @match              *://*.google.com.hk/*
// @match              *://*.google.hn/*
// @match              *://*.google.hr/*
// @match              *://*.google.ht/*
// @match              *://*.google.hu/*
// @match              *://*.google.co.id/*
// @match              *://*.google.ie/*
// @match              *://*.google.co.il/*
// @match              *://*.google.im/*
// @match              *://*.google.co.in/*
// @match              *://*.google.iq/*
// @match              *://*.google.is/*
// @match              *://*.google.it/*
// @match              *://*.google.je/*
// @match              *://*.google.com.jm/*
// @match              *://*.google.jo/*
// @match              *://*.google.jp/*
// @match              *://*.google.co.jp/*
// @match              *://*.google.co.ke/*
// @match              *://*.google.com.kh/*
// @match              *://*.google.ki/*
// @match              *://*.google.kg/*
// @match              *://*.google.co.kr/*
// @match              *://*.google.com.kw/*
// @match              *://*.google.kz/*
// @match              *://*.google.la/*
// @match              *://*.google.com.lb/*
// @match              *://*.google.li/*
// @match              *://*.google.lk/*
// @match              *://*.google.co.ls/*
// @match              *://*.google.lt/*
// @match              *://*.google.lu/*
// @match              *://*.google.lv/*
// @match              *://*.google.com.ly/*
// @match              *://*.google.co.ma/*
// @match              *://*.google.md/*
// @match              *://*.google.me/*
// @match              *://*.google.mg/*
// @match              *://*.google.mk/*
// @match              *://*.google.ml/*
// @match              *://*.google.com.mm/*
// @match              *://*.google.mn/*
// @match              *://*.google.ms/*
// @match              *://*.google.com.mt/*
// @match              *://*.google.mu/*
// @match              *://*.google.mv/*
// @match              *://*.google.mw/*
// @match              *://*.google.com.mx/*
// @match              *://*.google.com.my/*
// @match              *://*.google.co.mz/*
// @match              *://*.google.com.na/*
// @match              *://*.google.com.ng/*
// @match              *://*.google.com.ni/*
// @match              *://*.google.ne/*
// @match              *://*.google.nl/*
// @match              *://*.google.no/*
// @match              *://*.google.com.np/*
// @match              *://*.google.nr/*
// @match              *://*.google.nu/*
// @match              *://*.google.co.nz/*
// @match              *://*.google.com.om/*
// @match              *://*.google.com.pa/*
// @match              *://*.google.com.pe/*
// @match              *://*.google.com.pg/*
// @match              *://*.google.com.ph/*
// @match              *://*.google.com.pk/*
// @match              *://*.google.pl/*
// @match              *://*.google.pn/*
// @match              *://*.google.com.pr/*
// @match              *://*.google.ps/*
// @match              *://*.google.pt/*
// @match              *://*.google.com.py/*
// @match              *://*.google.com.qa/*
// @match              *://*.google.ro/*
// @match              *://*.google.ru/*
// @match              *://*.google.rw/*
// @match              *://*.google.com.sa/*
// @match              *://*.google.com.sb/*
// @match              *://*.google.sc/*
// @match              *://*.google.se/*
// @match              *://*.google.com.sg/*
// @match              *://*.google.sh/*
// @match              *://*.google.si/*
// @match              *://*.google.sk/*
// @match              *://*.google.com.sl/*
// @match              *://*.google.sn/*
// @match              *://*.google.so/*
// @match              *://*.google.sm/*
// @match              *://*.google.sr/*
// @match              *://*.google.st/*
// @match              *://*.google.com.sv/*
// @match              *://*.google.td/*
// @match              *://*.google.tg/*
// @match              *://*.google.co.th/*
// @match              *://*.google.com.tj/*
// @match              *://*.google.tl/*
// @match              *://*.google.tm/*
// @match              *://*.google.tn/*
// @match              *://*.google.to/*
// @match              *://*.google.com.tr/*
// @match              *://*.google.tt/*
// @match              *://*.google.com.tw/*
// @match              *://*.google.co.tz/*
// @match              *://*.google.com.ua/*
// @match              *://*.google.co.ug/*
// @match              *://*.google.co.uk/*
// @match              *://*.google.com.uy/*
// @match              *://*.google.co.uz/*
// @match              *://*.google.com.vc/*
// @match              *://*.google.co.ve/*
// @match              *://*.google.vg/*
// @match              *://*.google.co.vi/*
// @match              *://*.google.com.vn/*
// @match              *://*.google.vu/*
// @match              *://*.google.ws/*
// @match              *://*.google.rs/*
// @match              *://*.google.co.za/*
// @match              *://*.google.co.zm/*
// @match              *://*.google.co.zw/*
// @match              *://*.google.cat/*
// @grant              none
// @run-at             document-start
// ==/UserScript==
// https://www.google.com/supported_domains

(function () {
    'use strict';

    if (location.pathname == '/url') return;
    const lang = navigator.language || 'zh-CN';
    const _url = new URL(location);
    let url = new URL(location);
    url.searchParams.set("gl", lang.slice(-2));
    url.searchParams.set("hl", lang);
    url.searchParams.delete("client");
    const domain = 'google.com';
    let current_domian = location.hostname.match(/google\.[^\/]+/);
    current_domian &&= current_domian[0];
    if (current_domian != domain) {
        url.hostname = location.hostname.replace(current_domian, domain);
        if (url.hostname == 'www.google.com' && ['/', '/search'].includes(location.pathname)) {
            url.href = 'https://www.google.com/ncr#ncr:' + encodeURIComponent(url);
        }
        window.stop();
        location.replace(url);
        return;
    }
    if (_url.hash.slice(0, 5) == '#ncr:') {
        location.hash = '';
        window.stop();
        location.replace(decodeURIComponent(_url.hash.slice(5)));
        return;
    }
    if (_url.searchParams.has("client") || !_url.searchParams.get("gl") && !_url.searchParams.get("hl")) {
        window.stop();
        location.replace(url);
        return;
    }

    const default_lang = 'en-US';
    if (default_lang == lang) return;
    const default_region = default_lang.slice(-2);
    const default_langua = default_lang.slice(0, -3);
    const current_region = lang.slice(-2);
    const current_langua = lang.slice(0, -3);
    const langbar = document.createElement('div');
    const langbar_region = document.createElement('div');
    const langbar_region_default = document.createElement('span');
    const langbar_region_current = document.createElement('span');
    const langbar_langua = document.createElement('div');
    const langbar_langua_default = document.createElement('span');
    const langbar_langua_current = document.createElement('span');
    langbar.className = 'act_langbar mnr-c';
    langbar_region.textContent = lang == 'zh-CN' ? '区域:' : 'REGION:';
    langbar_langua.textContent = lang == 'zh-CN' ? '语言:' : 'LANGUAGE:';
    langbar_region_default.textContent = default_region;
    langbar_region_current.textContent = current_region;
    langbar_langua_default.textContent = default_langua.toUpperCase();
    langbar_langua_current.textContent = current_langua.toUpperCase();
    langbar_region.append(langbar_region_default, langbar_region_current);
    langbar_langua.append(langbar_langua_default, langbar_langua_current);
    default_region != current_region && langbar.append(langbar_region);
    default_langua != current_langua && langbar.append(langbar_langua);
    switch (_url.searchParams.get("gl")) {
        case current_region: langbar_region_current.className = 'act'; break;
        case default_region: langbar_region_default.className = 'act'; break;
    }
    switch (_url.searchParams.get("hl")) {
        case lang: langbar_langua_current.className = 'act'; break;
        case default_lang: langbar_langua_default.className = 'act'; break;
    }
    langbar_region.addEventListener('click', event => {
        switch (_url.searchParams.get("gl")) {
            case current_region: url.searchParams.set("gl", default_region); break;
            default: url.searchParams.set("gl", current_region);
        }
        location.replace(url);
    }, true);
    langbar_langua.addEventListener('click', event => {
        switch (_url.searchParams.get("hl")) {
            case lang: url.searchParams.set("hl", default_lang); break;
            default: url.searchParams.set("hl", lang);
        }
        location.replace(url);
    }, true);
    const langbar_style = document.createElement('style');
    langbar_style.textContent = `
.act_langbar {
    line-height: 2;
    margin-left: calc(var(--center-column-margin, 16px) - 10px);
    margin-bottom: 6px;
    user-select: none;
    -webkit-user-select: none;
}
@media (max-width: 760px) and (hover: none) {
    .act_langbar {
        padding: 5px;
        text-align: center;
    }
}
.act_langbar>div {
    display: inline-block;
    padding: 0px 10px;
    margin-block: 3px;
    margin-inline: 10px;
    border: 1.5px solid;
    border-radius: 20px;
    cursor: pointer;
}
.act_langbar span {
    margin-left: 10px;
}
.act_langbar span.act {
    padding: 1px 5px;
    border: 1px solid;
    border-radius: 20px;
}
`;

    if (document.head) {
        document.head.append(langbar_style);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.head && (observer.disconnect(), document.head.append(langbar_style));
        }).observe(document, { subtree: true, childList: true });
    }

    if (document.querySelector('#appbar')) {
        document.querySelector('#appbar')?.after(langbar);
    } else {
        new MutationObserver((mutationList, observer) => {
            document.querySelector('#appbar') && (observer.disconnect(), document.querySelector('#appbar')?.after(langbar));
        }).observe(document, { subtree: true, childList: true });
    }

    function DOMContentLoaded() {
        navigator.userAgent.includes('iPad') && !document.querySelector('#appbar') && document.querySelector('#st-card')?.closest('#main>div')?.after(langbar);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded);
    } else {
        DOMContentLoaded();
    }

})();
