// ==UserScript==
// @name               ACT.Google.DM.NCR
// @name:zh-CN         ACT.谷歌.DM.NCR
// @description        No country redirect, easy to switch region/language.
// @description:zh-CN  没有国家重定向，轻松切换区域/语言。
// @author             ACTCD
// @version            20220506.1
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
    const plang = navigator.language; // Preferred language // 首选语言
    const slang = 'en-US'; // Second language // 第二语言
    const o_url = new URL(location);
    let url = new URL(location);
    let region = 'ZZ'; // ZZ = Current Region // ZZ = 当前所在区域
    if (plang.length == 5 && plang[2] == '-') {
        region = plang.slice(-2).toUpperCase();
        url.searchParams.set("gl", region);
    } else {
        url.searchParams.delete("gl");
    }
    url.searchParams.set("hl", plang);
    url.searchParams.delete("client");
    const domain = 'google.com';
    let current_domian = location.hostname.match(/google\.[^\/]+/);
    current_domian &&= current_domian[0];
    if (!navigator.cookieEnabled) {
        if (plang.toUpperCase() == 'ZH-CN') {
            alert('[ACT.谷歌.DM.NCR]:\n您设置了“阻止所有 Cookie”，导致 NCR 功能将无法生效。');
        } else {
            alert('[ACT.Google.DM.NCR]:\nYou had set "Block All Cookies", resulting the NCR feature will not be active.');
        }
    } else {
        if (current_domian != domain) {
            url.hostname = location.hostname.replace(current_domian, domain);
            url.href = 'https://www.google.com/ncr#ncr:' + encodeURIComponent(url);
            window.stop();
            location.replace(url);
            return;
        }
        if (o_url.hash.slice(0, 5) == '#ncr:') {
            location.hash = '';
            window.stop();
            location.replace(decodeURIComponent(o_url.hash.slice(5)));
            return;
        }
    }

    const r1 = region;
    const r2 = r1 != slang.slice(3, 5) ? slang.slice(3, 5) : 'ZZ';
    const l1 = plang;
    const l2 = l1.toUpperCase() != slang.toUpperCase() ? slang : '';
    const langbar = document.createElement('div');
    const langbar_r = document.createElement('div');
    const langbar_r_r1 = document.createElement('span');
    const langbar_r_r2 = document.createElement('span');
    const langbar_l = document.createElement('div');
    const langbar_l_l1 = document.createElement('span');
    const langbar_l_l2 = document.createElement('span');
    langbar.className = 'act_langbar mnr-c';
    langbar_r.textContent = plang.toUpperCase() == 'ZH-CN' ? '区域:' : 'REGION:';
    langbar_l.textContent = plang.toUpperCase() == 'ZH-CN' ? '语言:' : 'LANGUAGE:';
    langbar_r_r1.textContent = r1.toUpperCase();
    langbar_r_r2.textContent = r2.toUpperCase();
    langbar_l_l1.textContent = l1.toUpperCase();
    langbar_l_l2.textContent = l2.toUpperCase();
    langbar_r.append(langbar_r_r1, langbar_r_r2);
    langbar_l.append(langbar_l_l1); l2 !== '' && langbar_l.append(langbar_l_l2);
    langbar.append(langbar_r, langbar_l);
    let gl = r1, hl = plang;
    switch (o_url.searchParams.get("gl")?.toUpperCase()) {
        case r1.toUpperCase(): langbar_r_r1.className = 'act'; gl = r2; break;
        case r2.toUpperCase(): langbar_r_r2.className = 'act'; gl = r1; break;
        case undefined: r2 == 'ZZ' ? langbar_r_r2.className = 'act' : (langbar_r_r1.className = 'act', gl = r2, langbar_r_r1.textContent = 'ZZ'); break;
        default: langbar_r_r2.className = 'act'; langbar_r_r2.textContent = 'N/A';
    }
    switch (o_url.searchParams.get("hl")?.toUpperCase()) {
        case plang.toUpperCase(): langbar_l_l1.className = 'act'; hl = slang; break;
        case slang.toUpperCase(): langbar_l_l2.className = 'act'; hl = plang; break;
        case undefined: langbar_l_l1.className = 'act'; hl = slang; langbar_l_l1.textContent = plang.toUpperCase(); break;
        default: langbar_l_l2.className = 'act'; langbar_l_l2.textContent = 'N/A'; langbar_l.append(langbar_l_l2);
    }
    console.log(o_url.searchParams.get("gl")?.toUpperCase());
    url = new URL(location);
    langbar_r.addEventListener('click', event => {
        url.searchParams.set("gl", gl);
        location.replace(url);
    }, true);
    langbar_l.addEventListener('click', event => {
        if (langbar_l_l2.textContent === '') return;
        url.searchParams.set("hl", hl);
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
