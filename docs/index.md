---
layout: home
hero:
  name: "Vibe Vibe"
  text: "人人都能學會的 AI 編程"
  tagline: "不寫代碼，也能做產品。從零基礎到全棧開發，讓 AI 成爲你的編程搭檔"
  image:
    src: /logo.png
    alt: Vibe Coding
  actions:
    - theme: brand
      text: 零基礎入門
      link: /Basic/
    - theme: alt
      text: 有基礎進階
      link: /Advanced/
    - theme: alt
      text: 動手做項目
      link: /Practice/
    - theme: alt
      text: 優質好文章
      link: /Articles/

features:
  - title: 零基礎友好
    details: 不需要任何編程經驗，從"什麼是代碼"開始，手把手帶你做出第一個作品
  - title: AI 驅動開發
    details: 學會"指揮 AI 寫代碼"而不是"自己寫代碼"，用自然語言描述需求，讓 AI 幫你實現
  - title: MVP 思維
    details: 掌握"最小可行產品"理念，用最少的時間驗證你的想法，避免功能蔓延的陷阱
  - title: 現代技術棧
    details: 進階篇基於 Next.js + TypeScript + Prisma，學習企業級全棧開發最佳實踐
  - title: 安全意識
    details: 從第一天就建立安全底線意識，學會保護用戶數據和避免常見安全漏洞
  - title: 漸進式學習
    details: 基礎篇建立認知，進階篇深入實戰。兩條路徑，適合不同階段的你
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #15a051ff 30%, #2eb3dfff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #15a051ff 50%, #2eb3dfff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPHero .actions .VPButton.brand {
  background-color: #45523E;
  border-color: #45523E;
}
.VPHero .actions .VPButton.brand:hover {
  background-color: #4F5B53;
  border-color: #4F5B53;
}
.VPHero .actions .VPButton.brand:active {
  background-color: #3B423C;
  border-color: #3B423C;
}
</style>

## 選擇你的學習路徑

<div class="paths-container" style="display: flex; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">

<div style="flex: 1; min-width: 300px; padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #667eea11 0%, #764ba211 100%); border: 1px solid #667eea33;">

### 基礎篇：零基礎入門

**適合人羣**：從未寫過代碼的小白、文科生、設計師、產品經理

**學習目標**：
- 理解 Vibe Coding 是什麼
- 學會用 AI 做出你的第一個作品
- 掌握 MVP 思維和產品感

**章節預覽**：
| 章節 | 內容 |
|------|------|
| 0. 序章 | 自測清單、學習路徑規劃 |
| 1. 覺醒 | 從碼農到指揮官的思維轉變 |
| 2. 心法 | MVP 思維、不加功能的藝術 |
| 3. 技法 | 提示詞工程、PRD 編寫 |
| 4. 實戰 | 從 0 到 1 做出你的作品 |
| 5. 進階 | 版本控制、部署、安全意識 |
| 6. 路徑 | 不同背景的學習建議 |


</div>

<div style="flex: 1; min-width: 300px; padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #f093fb11 0%, #f5576c11 100%); border: 1px solid #f093fb33;">

### 進階篇：全棧實戰

**適合人羣**：有一定編程基礎、想系統學習全棧開發的開發者

**學習目標**：
- 掌握 Next.js 現代全棧架構
- 學會企業級工程化實踐
- 具備獨立開發完整產品的能力

**章節預覽**：
| 章節 | 內容 |
|------|------|
| Bootcamp | 計算機基礎、命令行、開發環境 |
| 1-2. 架構 | Next.js + TypeScript + Prisma |
| 3-4. 開發 | 前後端開發、數據庫設計 |
| 5-6. 產品 | 產品思維、認證與安全 |
| 7-8. 規範 | API 設計、Git 協作流程 |
| 9-10. 質量 | 測試策略、部署運維 |
| 11-12. 進階 | 發佈流程、高級優化 |


</div>

</div>

## 項目狀態

::: warning 內部預覽版本
- 本版本爲**內部預覽版**，並非正式發行版本，不代表最終品質
- 正式版本需要等待後續對每一個章節進行深度優化、補充互動教學內容、以及完善實戰練習環節
- 如發現問題歡迎通過 [GitHub Issues](https://github.com/datawhalechina/vibe-vibe/issues) 反饋
:::

::: tip 進階版預告：Web 互動教學
我們正在開發**交互式教學內容**，正式版將支持：
- **可視化原理演示** —— 通過動畫和交互圖解，直觀理解前後端交互、請求響應流程
- **數據庫交互沙盒** —— 在瀏覽器中體驗數據庫查詢、表關係設計，理解數據流轉
- **架構圖解互動** —— 點擊探索系統架構，理解各層職責和數據走向
- **概念對比卡片** —— 交互式對比 SSR/CSR、REST/GraphQL 等核心概念

讓抽象概念變得可觸摸，敬請期待！
:::

## 什麼是 Vibe Coding？

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
> 
> — Andrej Karpathy, 2025

**Vibe Coding** 是 2025 年最火的編程方式（Collins 詞典年度詞彙）。它的核心理念是：

- **用自然語言描述需求**，而不是手寫代碼
- **讓 AI 生成代碼**，你來驗收和調整
- **快速迭代**，做出能用的東西比代碼完美更重要

簡單說：**你負責想法，AI 負責實現。**

## 適合誰學習？

| 你是誰 | 推薦路徑 | 理由 |
|--------|----------|------|
| 設計師 / 產品經理 | 基礎篇 | 零代碼基礎也能做出可運行的原型 |
| 文科生 / 跨專業 | 基礎篇 | 從最基礎的概念開始，循序漸進 |
| 前端開發者 | 進階篇 | 擴展後端能力，成爲全棧工程師 |
| 後端開發者 | 進階篇 | 瞭解現代前端生態和 Next.js |
| 創業者 / 獨立開發者 | 兩者皆可 | 快速搭建 MVP，獨立完成產品 |
| 想提升效率的開發者 | 基礎篇 + 進階篇 | 系統學習 AI 輔助開發工作流 |

## 技術棧一覽

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">

<div style="padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #667eea11 0%, #764ba211 100%); border: 1px solid #667eea33;">
  <h4 style="margin-top: 0; margin-bottom: 1rem; color: #667eea;">基礎篇</h4>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li><strong>前端基礎</strong>：HTML/CSS/JS</li>
    <li><strong>AI 工具</strong>：ChatGPT/Claude/Cursor等</li>
    <li><strong>版本控制</strong>：Git 基礎操作</li>
    <li><strong>部署</strong>：靜態網站部署</li>
  </ul>
</div>

<div style="padding: 1.5rem; border-radius: 12px; background: linear-gradient(135deg, #f093fb11 0%, #f5576c11 100%); border: 1px solid #f093fb33;">
  <h4 style="margin-top: 0; margin-bottom: 1rem; color: #f093fb;">進階篇</h4>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li><strong>框架</strong>：Next.js + TypeScript</li>
    <li><strong>數據層</strong>：PostgreSQL + Prisma</li>
    <li><strong>UI 框架</strong>：Tailwind CSS + shadcn/ui</li>
    <li><strong>認證</strong>：NextAuth.js</li>
    <li><strong>部署</strong>：Docker + Vercel/Edgeone</li>
  </ul>
</div>

</div>

## 貢獻者名單

感謝以下成員爲本項目做出的貢獻：

| 姓名 | 職務 | 簡介 |
|------|------|------|
| <a href="http://www.guohaoqi.cn" target="_blank">齊國皓</a> | 項目負責人 & 核心貢獻者 | 現就讀於新加坡國立大學計算機學院, 湖南大學金融科技協會創始人 |
| <a href="https://www.hangkangfu.cn/" target="_blank">符航康</a> | 項目負責人 & 核心貢獻者 | 湖南大學金融科技協會創始成員, 一名 AI 原生的年輕人，湖南大學信息科學與工程學院24級本科生 |
| 陳俊希 | 「優質文章篇」板塊貢獻者 | 湖南大學金融科技協會現任會長，湖南大學金融與統計學院24級本科生 |
| 金龍 | 「實踐篇」板塊貢獻者 | 北京大學學生創新學社AI俱樂部副部長，北京大學24級研究生 |
| 舒璐璐 | 「實踐篇」板塊貢獻者 | 湖南大學「麓山人文+」創始人，湖南大學嶽麓書院23級本科生 |

## 如何貢獻

本項目歡迎社區貢獻：

- 在頁面底部評論區反饋問題
- 提交 [GitHub Issues](https://github.com/datawhalechina/vibe-vibe/issues)
- 提交 Pull Request 完善內容

