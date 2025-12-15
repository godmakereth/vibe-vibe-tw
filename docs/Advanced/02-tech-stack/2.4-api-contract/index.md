---
title: "2.4 前後端如何高效協作——接口契約/API Route；請求/響應、冪等、流式返回"
typora-root-url: ../../public
---

# 2.4 前後端如何高效協作——接口契約

## 認知重構

在傳統開發模式中，前端等後端、後端等需求，彼此阻塞是常態。而在 Vibe Coding 時代，**契約先行**的理念讓前後端可以並行開發，AI 也能基於契約生成更準確的代碼。

```
傳統模式：需求 → 後端開發 → 前端對接 → 聯調（串行）
契約先行：需求 → 定義契約 → 前後端並行開發 → 聯調（並行）
```

## 本章知識圖譜

```mermaid
mindmap
  root((前後端協作))
    契約先行
      接口定義
      類型共享
      版本管理
    Mock 數據
      MSW 模擬
      Faker 生成
      場景切換
    並行開發
      前端獨立
      後端專注
      類型安全
    聯調測試
      契約驗證
      問題定位
      錯誤處理
```

## 核心概念速覽

| 概念 | 作用 | 工具 |
|------|------|------|
| **API 契約** | 定義請求/響應格式 | TypeScript 類型、Zod Schema |
| **Mock 數據** | 模擬後端響應 | MSW、Faker.js |
| **並行開發** | 前後端同時進行 | 共享類型定義 |
| **聯調測試** | 驗證契約一致性 | Postman、測試用例 |

## 爲什麼需要 API 契約？

```mermaid
flowchart LR
    subgraph Without["沒有契約"]
        F1["前端猜測格式"] --> E1["聯調時發現不對"]
        E1 --> F2["前端重寫"]
        F2 --> E2["再次聯調"]
    end
    
    subgraph With["有契約"]
        C["共同定義契約"] --> P1["前端基於契約開發"]
        C --> P2["後端基於契約開發"]
        P1 --> T["聯調驗證"]
        P2 --> T
    end
```

### 契約的三大價值

1. **消除溝通歧義**：接口格式白紙黑字，沒有"我以爲"
2. **支持並行開發**：前端用 Mock，後端用測試，互不阻塞
3. **AI 協作更精準**：AI 基於類型定義生成代碼，準確率大幅提升

## API Route 在 Next.js 中的位置

```mermaid
flowchart TB
    subgraph App["Next.js 應用"]
        Pages["頁面組件"]
        SA["Server Actions"]
        API["API Routes"]
    end
    
    subgraph External["外部"]
        Third["第三方服務"]
        Webhook["Webhook"]
        Mobile["移動端"]
    end
    
    Pages --> SA
    Pages --> API
    Third --> API
    Webhook --> API
    Mobile --> API
```

| 場景 | 推薦方案 |
|------|----------|
| 內部數據變更 | Server Actions |
| 對外暴露接口 | API Routes |
| 第三方回調 | API Routes |
| 移動端調用 | API Routes |

## 本章導航

- **2.4.1 契約先行**：先定義接口，再寫代碼
- **2.4.2 Mock 數據**：讓前端不依賴後端
- **2.4.3 並行開發**：前後端同時進行
- **2.4.4 聯調測試**：確保契約一致性
