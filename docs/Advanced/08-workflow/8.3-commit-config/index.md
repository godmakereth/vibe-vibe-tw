---
title: "8.3 讓你看懂改了什麼——提交規範：Conventional Commits 與 Release Note"
typora-root-url: ../../public
---

# 8.3 讓你(和 AI)看懂改了什麼——提交規範

好的提交信息是給未來的自己和隊友寫的說明書——也是讓 AI 理解代碼變更的關鍵。

## 爲什麼提交規範很重要

```bash
# 差的提交歷史
git log --oneline
a1b2c3d fix
b2c3d4e update
c3d4e5f fix bug
d4e5f6g 改了點東西
e5f6g7h WIP

# 好的提交歷史
git log --oneline
a1b2c3d feat: 添加用戶登錄功能
b2c3d4e fix: 修復登錄驗證失敗的問題
c3d4e5f docs: 更新 API 文檔
d4e5f6g refactor: 重構用戶認證模塊
e5f6g7h test: 添加登錄功能的單元測試
```

**規範提交的價值**：
- 快速定位問題引入的提交
- 自動生成 CHANGELOG
- 方便代碼審查
- 讓 AI 更容易理解代碼變更意圖

## Conventional Commits 規範

Conventional Commits 是目前最流行的提交信息規範：

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### 核心元素

| 元素 | 說明 | 示例 |
|------|------|------|
| type | 變更類型 | feat, fix, docs |
| scope | 影響範圍（可選） | auth, api, ui |
| description | 簡短描述 | 添加用戶登錄 |
| body | 詳細說明（可選） | 多行詳細描述 |
| footer | 關聯信息（可選） | Closes #123 |

## 本節結構

1. **提交格式**：Conventional Commits 標準格式詳解
2. **類型分類**：feat/fix/docs 等類型的使用場景
3. **自動化檢查**：commitlint 與 husky 配置
4. **CHANGELOG 生成**：從提交歷史自動生成發佈日誌

## 快速示例

```bash
# 功能提交
git commit -m "feat(auth): 添加 Google OAuth 登錄"

# 修復提交
git commit -m "fix(api): 修復用戶查詢分頁錯誤"

# 帶 body 的提交
git commit -m "refactor(database): 優化查詢性能

- 添加複合索引
- 使用連接池
- 緩存熱點數據

Closes #456"
```

## 驗收清單

- [ ] 理解 Conventional Commits 規範
- [ ] 能正確使用 type 和 scope
- [ ] 會配置 commitlint 自動檢查
- [ ] 能使用工具自動生成 CHANGELOG
