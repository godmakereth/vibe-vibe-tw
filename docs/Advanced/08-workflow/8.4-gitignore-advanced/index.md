---
title: "8.4 哪些文件不該進倉庫——`.gitignore` 管理：依賴/構建/敏感/IDE/系統/日誌"
typora-root-url: ../../public
---

# 8.4 哪些文件不該進倉庫——Gitignore 進階

`.gitignore` 是代碼倉庫的"門衛"——它決定哪些文件能進，哪些文件留在門外。

## 爲什麼需要 .gitignore

**不該進倉庫的文件**：

| 類型 | 示例 | 原因 |
|------|------|------|
| 依賴目錄 | node_modules | 太大，可通過 package.json 恢復 |
| 構建產物 | .next, out, dist | 可重新構建 |
| 敏感信息 | .env, *.pem | 安全風險 |
| 系統文件 | .DS_Store | 與代碼無關 |
| IDE 配置 | .idea, .vscode | 個人偏好 |
| 日誌文件 | *.log | 臨時數據 |

## Next.js 項目的 .gitignore

```gitignore
# 依賴目錄
node_modules/
.pnpm-store/

# 構建產物
.next/
out/
dist/
build/

# 環境變量
.env
.env.local
.env.*.local

# 日誌
*.log
npm-debug.log*
pnpm-debug.log*

# 系統文件
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp
*.swo

# 測試覆蓋率
coverage/

# TypeScript
*.tsbuildinfo

# Vercel
.vercel

# 本地數據庫
*.db
*.sqlite
```

## 本節結構

1. **依賴與構建產物**：node_modules、.next、out 等
2. **敏感文件**：.env 管理與 .env.example 模板
3. **系統與 IDE 文件**：跨平臺忽略配置
4. **防誤提交**：pre-commit 鉤子檢查

## .gitignore 語法速查

| 語法 | 含義 | 示例 |
|------|------|------|
| `*` | 匹配任意字符 | `*.log` |
| `**` | 匹配任意目錄 | `**/node_modules` |
| `!` | 取反（不忽略） | `!.env.example` |
| `/` 開頭 | 只匹配根目錄 | `/dist` |
| `/` 結尾 | 只匹配目錄 | `logs/` |
| `#` | 註釋 | `# 忽略日誌` |

## 驗收清單

- [ ] 瞭解哪些文件應該被忽略
- [ ] 能編寫基本的 .gitignore 規則
- [ ] 理解敏感文件的處理方式
- [ ] 知道如何配置全局 gitignore
