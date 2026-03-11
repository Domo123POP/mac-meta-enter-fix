# Mac IME Enter Fix (FB/IG/Threads) ⌨️

修復 Mac 使用者在 Facebook、Instagram、Messenger 與 Threads 網頁版中，使用「內建注音中文輸入法」打字時，按 `Enter` 確認選字卻會「直接送出未完成訊息」的煩人 Bug。

## 解決了什麼問題？
Meta 旗下平台的網頁版在接收到 `Enter` 鍵指令時，並未正確判斷 Mac 系統是否處於「組字/選字狀態 (isComposing)」。這導致 Mac 用戶在使用注音、拼音等原生輸入法時，經常發生話打到一半、底線還在，按 Enter 想確認文字卻直接把半截訊息發送出去的災情。

**本專案透過在網頁底層攔截按鍵事件，讓你不用改變任何打字習慣、不用換輸入法，就能完美消除選字底線，且不會誤觸發送！**

## 適用平台
- Facebook
- Instagram
- Messenger
- Threads

## 安裝方式

目前提供兩種使用方式，請擇一安裝即可：

### 方法一：安裝為瀏覽器擴充功能 (Chrome / Edge / Brave適用)
這是最簡單的方法，適合所有人。
1. 點擊本頁面右上方的綠色按鈕 `Code`，選擇 `Download ZIP`，並將下載的檔案解壓縮。
2. 打開你的瀏覽器擴充功能管理頁面：
   - Chrome/Brave: 網址列輸入 `chrome://extensions/`
   - Edge: 網址列輸入 `edge://extensions/`
3. 打開右上角的 **「開發人員模式 (Developer mode)」**。
4. 點擊左上角的 **「載入未封裝項目 (Load unpacked)」**。
5. 選擇你剛剛解壓縮的 `mac-ime-enter-fix-main` 資料夾。
6. 安裝完成！重新整理 FB/IG 網頁即可生效。

### 方法二：透過 Tampermonkey (篡改猴) 安裝腳本
如果你原本就有在使用 Tampermonkey 腳本管理器，可以將 `content.js` 內的程式碼加上 Header，作為 UserScript 獨立執行。
*(若需要腳本版程式碼，可自行參閱專案原始碼修改 Header)*
