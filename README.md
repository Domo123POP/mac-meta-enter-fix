# Mac Safari Meta Enter Fix ⌨️🧭

專為 **Mac Safari** 使用者設計！修復在 Facebook、Instagram、Messenger 與 Threads 網頁版中，使用「Mac 內建中文輸入法」打字時，按 `Enter` 確認選字卻會「直接送出未完成訊息」的煩人 Bug。

## 💡 解決了什麼問題？
由於 Safari 的 WebKit 引擎與 Meta 網頁版的腳本衝突，導致網頁在接收到 `Enter` 鍵指令時，無法正確判斷系統是否正處於「組字/選字狀態 (isComposing)」。這讓 Safari 用戶在使用注音、拼音等原生輸入法時，經常發生話打到一半、底線還在，按 Enter 卻直接把半截訊息發送出去的災情（Chrome / Edge 等瀏覽器無此問題）。

**本專案透過在網頁底層攔截按鍵事件，讓你不用換輸入法、不用改用 Chrome，就能在 Safari 完美消除選字底線，不會誤觸發送！**

## 🚀 適用平台
- Facebook 網頁版
- Instagram 網頁版
- Messenger 網頁版
- Threads 網頁版
*(僅限 macOS Safari 瀏覽器)*

## 🛠️ 安裝方式

由於 Apple 對 Safari 擴充功能的嚴格限制，最簡單且免費的安裝方式是透過「腳本管理器」來運行本修復程式：

### 步驟一：安裝腳本管理器 (擇一即可)
1. **[Tampermonkey (篡改猴)](https://apps.apple.com/tw/app/tampermonkey/id1482490089?mt=12)**：最知名、穩定的腳本管理器 (Mac App Store 下載，可能需付費或使用舊版免費版)。
2. **[Userscripts](https://apps.apple.com/tw/app/userscripts/id1463298887?mt=12)**：完全免費開源的 Safari 腳本擴充功能 (推薦)。

### 步驟二：新增修復腳本
1. 確保腳本管理器已在 Safari 的「設定 > 延伸功能」中啟用。
2. 點擊瀏覽器上方的腳本管理器圖示，選擇「新增腳本 (Add New Script)」。
3. 將本專案 `content.js` 內的完整程式碼複製，並覆蓋貼上到編輯器中。
4. **重點：** 在程式碼最上方加入以下 Header 標頭，讓腳本知道要在哪些網址執行：

```javascript
// ==UserScript==
// @name         Safari Meta Enter Fix
// @namespace    [http://tampermonkey.net/](http://tampermonkey.net/)
// @version      1.0
// @description  防止 Safari 內建輸入法在 Meta 網頁選字時按 Enter 直接送出訊息
// @match        *://*[.facebook.com/](https://.facebook.com/)*
// @match        *://*[.instagram.com/](https://.instagram.com/)*
// @match        *://*[.messenger.com/](https://.messenger.com/)*
// @match        *://*.threads.net/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

// (下方接著貼上 content.js 的原始碼)
