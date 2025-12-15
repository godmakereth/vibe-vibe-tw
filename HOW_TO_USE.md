# 如何在實際編程中運用本教程

## 📚 理解專案性質

**Vibe Vibe 是什麼**：一本互動式的 AI 編程教科書
**不是什麼**：不是可以直接運行的程式碼庫

## 🎯 三種實際運用方式

### 方式一：從零開始學習（推薦新手）

#### 第1步：準備工具
```bash
# 1. 安裝必要的開發工具
# macOS 使用 Homebrew:
brew install node

# 2. 安裝 AI 編程工具（選一個）
# - Cursor: https://cursor.sh
# - Windsurf: https://codeium.com/windsurf
# - 或使用線上工具: https://bolt.new
```

#### 第2步：跟隨基礎篇教程
1. 閱讀 `docs/Basic/01-awakening/` 了解概念
2. 跟隨 `docs/Basic/01-awakening/1.4-tools-guide/` 配置環境
3. 完成 `docs/Basic/01-awakening/1.5-hello-world/` 第一個項目

#### 第3步：實踐學習循環
```
閱讀教程章節 → 理解概念 → 打開 Cursor/AI 工具 → 實際寫程式 → 遇到問題回來查閱
```

#### 實例：做一個計數器應用

**1. 閱讀教程**
```bash
# 打開教程文件
open docs/Basic/01-awakening/1.5-hello-world/1.5.2-step-by-step.md
```

**2. 用 AI 工具實作**
打開 Cursor，對 AI 說：
```
我想創建一個簡單的計數器網頁應用：
- 顯示當前數字（從 0 開始）
- 有「+1」和「-1」按鈕
- 有「重置」按鈕
- 使用 HTML、CSS、JavaScript

請幫我實作，並解釋每部分的作用。
```

**3. 遇到問題？查閱教程**
- 不知道如何部署？→ 查看 `docs/Basic/05-refine/5.2-deployment/`
- 想加資料庫？→ 查看 `docs/Advanced/04-database/`

---

### 方式二：作為開發參考手冊（適合有基礎者）

#### 場景1：我要做一個有用戶登入的網站

**步驟**：
1. **規劃階段** - 閱讀產品文檔章節
   ```bash
   docs/Advanced/05-product/5.3-requirements-analysis/
   ```
   學習如何拆解需求、設計 MVP

2. **技術選型** - 查看技術棧章節
   ```bash
   docs/Advanced/02-tech-stack/2.1-architecture/
   ```
   了解 Next.js + Prisma + NextAuth 架構

3. **實際開發** - 參考具體章節
   ```bash
   # 用戶認證
   docs/Advanced/06-security/6.1-nextauth/

   # 數據庫設計
   docs/Advanced/04-database/4.1-data-modeling/

   # API 設計
   docs/Advanced/07-api/
   ```

4. **在 Cursor 中實作**
   ```
   我要用 Next.js 15 + NextAuth.js 實作用戶登入系統：

   需求：
   - Google OAuth 登入
   - Email/密碼登入
   - PostgreSQL 資料庫
   - Prisma ORM

   請按照 Next.js App Router 最佳實踐實作。
   先幫我建立專案結構。
   ```

#### 場景2：我的 API 該如何設計？

**步驟**：
1. 閱讀 API 設計章節
   ```bash
   docs/Advanced/07-api/7.1-http-and-api/
   docs/Advanced/07-api/7.2-error-handling/
   ```

2. 學習規範
   - HTTP 方法使用
   - 錯誤處理格式
   - 狀態碼選擇

3. 在 Cursor 中實作
   ```
   根據 RESTful API 最佳實踐，幫我設計一個用戶管理 API：

   需要的端點：
   - GET /api/users - 獲取用戶列表（支持分頁、篩選）
   - GET /api/users/:id - 獲取單個用戶
   - POST /api/users - 創建用戶
   - PUT /api/users/:id - 更新用戶
   - DELETE /api/users/:id - 刪除用戶

   要求：
   - 正確的錯誤處理
   - 輸入驗證
   - 統一的回應格式
   ```

---

### 方式三：解決具體問題（問題驅動）

#### 遇到問題時的查閱流程

**問題：我的 Next.js 應用部署後很慢**

1. **搜尋教程**
   ```bash
   # 方法1：使用 grep 搜尋關鍵字
   grep -r "性能" docs/Advanced/
   grep -r "優化" docs/Advanced/

   # 方法2：查看相關章節
   docs/Advanced/03-frontend/3.5-debugging/3.5.3-performance.md
   docs/Advanced/12-advanced/12.2-seo/12.2.2-ssr.md
   ```

2. **學習優化方法**
   - 了解 SSR、SSG、ISR 差異
   - 學習快取策略
   - 圖片優化技巧

3. **用 AI 實作優化**
   ```
   我的 Next.js 應用有性能問題：

   目前狀況：
   - 首頁載入需要 3 秒
   - 使用 Client Side Rendering
   - 有很多大圖片

   請幫我：
   1. 分析性能瓶頸
   2. 改用 SSR 或 SSG
   3. 優化圖片（使用 next/image）
   4. 添加適當的快取策略
   ```

---

## 💡 實戰工作流範例

### 完整專案開發流程

假設你要做一個「個人部落格系統」：

#### Phase 1: 規劃（1-2 天）
```bash
# 閱讀這些章節
docs/Advanced/05-product/5.3-requirements-analysis/
docs/Basic/02-mindset/2.3-subtraction-thinking/

# 使用 AI 協助規劃
```
**與 AI 對話**：
```
我想做一個個人部落格系統。請幫我：

1. 定義 MVP 功能（最小可行產品）
2. 拆解用戶故事
3. 設計數據庫結構
4. 列出技術選型

參考資料：我想要能發布文章、支持 Markdown、有評論功能。
```

#### Phase 2: 環境設置（1 小時）
```bash
# 參考教程
docs/Advanced/01-concept/1.1-setup-and-verify/

# 在終端執行
npx create-next-app@latest my-blog --typescript --tailwind --app
cd my-blog

# 安裝依賴
npm install prisma @prisma/client next-auth
```

#### Phase 3: 開發（1-2 週）
每個功能模塊都參考對應教程章節：

**文章管理功能**
1. 讀教程：`docs/Advanced/04-database/4.1-data-modeling/`
2. 用 Cursor 寫程式：
   ```
   請幫我設計部落格的 Prisma Schema：

   需要的模型：
   - User（用戶）
   - Post（文章）：標題、內容、發布時間、作者
   - Comment（評論）：內容、作者、所屬文章

   要求：
   - 適當的關聯關係
   - 必要的索引
   - 時間戳欄位
   ```

**認證功能**
1. 讀教程：`docs/Advanced/06-security/6.1-nextauth/`
2. 用 Cursor 實作：
   ```
   實作 NextAuth.js 認證：
   - Google OAuth
   - 連接 Prisma
   - Session 管理
   ```

**前端頁面**
1. 讀教程：`docs/Advanced/03-frontend/3.4-tailwind-and-ui/`
2. 用 Cursor 實作：
   ```
   使用 Tailwind CSS 和 shadcn/ui 創建：
   - 文章列表頁
   - 文章詳情頁
   - 文章編輯器（支持 Markdown）
   ```

#### Phase 4: 部署（幾小時）
```bash
# 參考教程
docs/Advanced/10-deploy/10.2-1panel-deployment/

# 或使用 Vercel（更簡單）
# 1. 推送到 GitHub
# 2. 連接到 Vercel
# 3. 完成！
```

---

## 🎓 學習建議

### 1. 循序漸進
❌ 不要一次想讀完全部教程
✅ 根據當前需求查閱相關章節

### 2. 實踐導向
❌ 不要只看教程不動手
✅ 每學一個概念就用 AI 工具實作一次

### 3. AI 輔助學習
```
理想的學習循環：
教程學概念 → AI 寫程式 → 運行測試 → 理解原理 → 優化改進
```

### 4. 建立索引
在筆記中記錄：
```markdown
# 我的 Vibe Vibe 快速索引

## 常用章節
- 資料庫設計：docs/Advanced/04-database/4.1-data-modeling/
- API 規範：docs/Advanced/07-api/7.2-error-handling/
- 部署指南：docs/Advanced/10-deploy/

## 已完成的學習
- [x] Next.js 基礎
- [x] Prisma ORM
- [ ] NextAuth.js（進行中）
```

---

## 🔧 推薦的開發設置

### 在 VS Code/Cursor 中打開教程
```bash
# 1. Clone 這個倉庫到本地
git clone https://github.com/godmakereth/vibe-vibe-tw.git

# 2. 在 Cursor 中打開
cursor vibe-vibe-tw/

# 3. 開發時的工作流
# 左邊：你的專案程式碼
# 右邊：教程 Markdown 文件
# AI Chat：根據教程內容讓 AI 寫程式
```

### 使用 Cursor Composer 模式
```
@vibe-vibe-tw/docs/Advanced/06-security/6.1-nextauth/6.1.2-google-oauth.md

根據這份文檔，幫我在當前專案中實作 Google OAuth 登入。
```

---

## 📝 實戰案例範本

### 案例：待辦事項應用

**1. 規劃階段**
```
教程參考：docs/Basic/02-mindset/2.1-thinking-upgrade/

AI Prompt:
我要做一個待辦事項應用，請幫我：
1. 定義核心功能（Jobs to be Done）
2. 設計最小 MVP
3. 列出技術棧
```

**2. 開發階段**
```
教程參考：
- docs/Advanced/02-tech-stack/
- docs/Advanced/04-database/

AI Prompt（分多次對話）:
[第1輪] 創建 Next.js 專案並設置 Prisma
[第2輪] 設計 Todo 資料庫 Schema
[第3輪] 實作 CRUD API
[第4輪] 創建前端 UI
[第5輪] 添加認證功能
```

**3. 部署階段**
```
教程參考：docs/Advanced/10-deploy/10.1-pre-flight/

AI Prompt:
專案已完成，請幫我準備部署到 Vercel：
1. 環境變數配置
2. 資料庫連線設置
3. 建構優化
```

---

## 🎯 關鍵要點

### ✅ 做這些
- 把教程當作「參考手冊」而非「小說」
- 遇到問題時搜尋關鍵字找相關章節
- 結合 AI 工具（Cursor/Claude）實際寫程式
- 建立自己的學習筆記和快速索引

### ❌ 不要做這些
- 不要試圖「背誦」教程內容
- 不要期望讀完就能寫程式（要動手實踐）
- 不要直接複製貼上程式碼（這個是教程，沒有完整的可運行程式碼）
- 不要跳過基礎篇直接看進階篇（除非你有基礎）

---

## 🚀 立即開始

### 今天就開始的三個行動

1. **安裝 Cursor**
   - 下載：https://cursor.sh
   - 設置：登入你的 AI 帳號

2. **閱讀 Hello World 教程**
   ```bash
   docs/Basic/01-awakening/1.5-hello-world/
   ```

3. **用 AI 做第一個專案**
   ```
   在 Cursor 中對 AI 說：

   請幫我創建一個簡單的自我介紹網頁：
   - 顯示我的名字、照片、簡介
   - 使用 HTML、CSS、JavaScript
   - 要有現代化的設計
   - 響應式布局（手機、電腦都好看）
   ```

**完成後你就理解了如何運用這個教程！** 🎉

---

## 💡 常見問題

**Q: 教程裡沒有完整的程式碼可以運行嗎？**
A: 是的，這是**教學文檔**而非程式碼庫。你需要根據教程指引，用 AI 工具生成程式碼。

**Q: 我能把教程內容複製給 AI 嗎？**
A: 可以！實際上這是推薦的做法。例如：
```
@docs/Advanced/06-security/6.1-nextauth/6.1.2-google-oauth.md
根據這份文檔幫我實作 Google 登入
```

**Q: 我應該從哪裡開始？**
A:
- 完全新手：`docs/Basic/01-awakening/`
- 有基礎：`docs/Advanced/00-bootcamp/` 快速複習，然後選你需要的章節

**Q: 需要全部讀完嗎？**
A: 不需要！根據你的項目需求查閱相關章節即可。

---

**記住：這個教程是你的 AI 編程「工具書」，不是要背的「教科書」！** 📚✨
