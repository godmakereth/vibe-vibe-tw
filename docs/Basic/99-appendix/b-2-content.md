---
title: "B.2 CSS/樣式問題"
---

# B.2 CSS/樣式問題

樣式問題不會報紅色錯誤，但會讓你的頁面「長得不對」。這一節幫你快速定位和解決常見的樣式問題。


## 樣式完全不生效

**現象**：你寫了 CSS，但頁面完全沒變化。

**排查清單**：

| 檢查項 | 怎麼檢查 | 解決方法 |
|--------|----------|----------|
| CSS 文件沒引入 | 看 HTML 有沒有 `<link>` 標籤 | 添加 `<link rel="stylesheet" href="style.css">` |
| 路徑寫錯了 | 檢查文件路徑是否正確 | 確保 `href` 路徑對應實際文件位置 |
| 選擇器寫錯了 | 檢查 class/id 名是否匹配 | `.btn`（class）vs `#btn`（id），別搞混 |
| 被其他樣式覆蓋 | 用瀏覽器開發者工具檢查 | 增加選擇器權重或調整順序 |
| 緩存問題 | 強制刷新頁面 | Mac: `Cmd+Shift+R`，Win: `Ctrl+Shift+R` |

**快速修復 Prompt**：
```markdown
我的 CSS 樣式沒有生效。

HTML 代碼：
[粘貼相關 HTML]

CSS 代碼：
[粘貼 CSS]

請幫我檢查爲什麼樣式沒生效。
```


## 佈局錯亂

**現象**：元素的位置不對，擠在一起、跑偏了、或者溢出了。

**常見問題與解決**：

### 元素擠在一起
```css
/* 問題：多個元素擠成一行 */
/* 解決：讓它們換行顯示 */
.container {
  display: flex;
  flex-wrap: wrap;  /* 允許換行 */
  gap: 10px;        /* 添加間距 */
}
```

### 元素跑到屏幕外
```css
/* 問題：內容超出容器 */
/* 解決：限制寬度，允許滾動或隱藏 */
.content {
  max-width: 100%;    /* 不超過父容器 */
  overflow: auto;     /* 超出時顯示滾動條 */
}
```

### 垂直居中不生效
```css
/* 最簡單的垂直居中方法 */
.parent {
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
  height: 100vh;            /* 父容器要有高度！ */
}
```

::: warning 常見坑
垂直居中不生效，90% 是因爲父容器沒有設置高度。`height: 100%` 或 `height: 100vh` 是常用的解決方案。
:::


## 響應式問題

**現象**：在電腦上好好的，手機上就亂了。

**快速檢查**：
1. 有沒有加 viewport meta 標籤？
2. 有沒有用百分比/rem 而不是固定 px？
3. 有沒有寫媒體查詢？

**基礎響應式模板**：

```html
<!-- 必須在 <head> 里加這行 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* 基礎樣式（手機優先） */
.container {
  width: 100%;
  padding: 15px;
}

/* 平板及以上 */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* 電腦 */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```


## 常見樣式問題速查表

| 問題 | 可能原因 | 快速解決 |
|------|----------|----------|
| 字體大小不對 | 繼承了父元素的樣式 | 明確設置 `font-size` |
| 顏色不對 | 選擇器權重不夠 | 檢查是否被覆蓋，提高權重 |
| 邊距不對 | margin 和 padding 搞混 | margin 是外邊距，padding 是內邊距 |
| 圖片變形 | 寬高比被破壞 | 使用 `object-fit: cover` |
| 按鈕點不到 | 被其他元素遮擋 | 檢查 `z-index` 和定位 |
| 文字溢出 | 容器太小 | 使用 `overflow: hidden` 或 `text-overflow: ellipsis` |


## 用瀏覽器調試樣式

這是解決樣式問題最有效的方法：

1. **打開開發者工具**：右鍵頁面 → 檢查（或按 F12）
2. **選中元素**：點擊左上角的「選擇」圖標，然後點擊頁面上的元素
3. **查看樣式**：右側會顯示這個元素的所有樣式
4. **即時修改**：直接在右側修改 CSS 值，頁面會即時更新
5. **找到問題**：看哪些樣式被劃掉了（說明被覆蓋了）

::: tip 小技巧
在開發者工具裏調好樣式後，把修改後的 CSS 複製回你的代碼文件。這樣比盲改快多了。
:::
