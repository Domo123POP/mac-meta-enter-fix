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
