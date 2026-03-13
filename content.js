// ==UserScript==
// @name         Mac Safari IME Enter Fix
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  修復 Mac Safari 內建輸入法在 Meta 網頁與 X (Twitter) 選字時按 Enter 會直接送出訊息的 Bug
// @match        *://*.facebook.com/*
// @match        *://*.instagram.com/*
// @match        *://*.messenger.com/*
// @match        *://*.threads.net/*
// @match        *://*.twitter.com/*
// @match        *://*.x.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 攔截按鍵事件 (使用 capture 階段，搶在網頁腳本之前執行)
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            // 判斷系統是否正處於「組字/選字」狀態 (isComposing)，或是原生輸入法處理中 (keyCode 229)
            if (event.isComposing || event.keyCode === 229) {
                event.stopPropagation();
                event.stopImmediatePropagation();
            }
        }
    }, true);

    window.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            if (event.isComposing || event.keyCode === 229) {
                event.stopPropagation();
                event.stopImmediatePropagation();
            }
        }
    }, true);
})();
