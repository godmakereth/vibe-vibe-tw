import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'
// @ts-ignore
import timeline from "vitepress-markdown-timeline";

export default withMermaid(defineConfig({
  title: "Vibe Coding 全棧實戰教程",
  description: "從 Next.js 到 AI 輔助開發，用 Vibe Coding 的方式重塑你的編程工作流。涵蓋零基礎入門、全棧開發、數據庫、部署運維等 12 個核心章節。",
  
  // 排除 docs/docs 目錄不構建
  srcExclude: ['**/docs/**'],
  
  head: [
    ['meta', { name: 'keywords', content: 'Vibe Coding, 全棧開發, Next.js, TypeScript, React, Prisma, AI編程, Cursor, Claude' }],
    ['meta', { name: 'author', content: 'Eyre' }],
    ['meta', { property: 'og:title', content: 'Vibe Coding 全棧實戰教程' }],
    ['meta', { property: 'og:description', content: '從 Next.js 到 AI 輔助開發，用 Vibe Coding 的方式重塑你的編程工作流' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/png' }],
  ],

  // 1. Markdown 增強配置
  markdown: {
    // 開啓數學公式 ($$ E=mc^2 $$)
    math: true,
    // 語言別名，消除 gitignore/env 警告
    languageAlias: {
      'gitignore': 'ini',
      'env': 'properties'
    },
    // 註冊時間線插件
    config: (md) => {
      md.use(timeline);
    },
  },

  // 2. Mermaid 配置
  mermaid: {
    // refer to mermaid config options
  },


  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-mermaid', 'mermaid']
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
      allowedHosts: true
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Vibe Vibe',
    
    nav: [
      { text: '首頁', link: '/' },
      { 
        text: '基礎篇', 
        items: [
          { text: '0. 序章', link: '/Basic/00-preface/' },
          { text: '1. 覺醒：從碼農到指揮官', link: '/Basic/01-awakening/' },
          { text: '2. 心法：核心思維', link: '/Basic/02-mindset/' },
          { text: '3. 技術：從想法到產品', link: '/Basic/03-technique/' },
          { text: '4. 從 0 到 1 實戰', link: '/Basic/04-practice-0-to-1/' },
          { text: '5. 精進技能', link: '/Basic/05-advanced/' },
          { text: '附錄', link: '/Basic/99-appendix/' },
          { text: '結語', link: '/Basic/100-epilogue/' },
          { text: '下部預告', link: '/Basic/101-next-part/' },
        ]
      },
      { 
        text: '進階篇', 
        items: [
          { text: '0. Bootcamp 概念打底', link: '/Advanced/00-bootcamp/' },
          { text: '1. 概念與準備', link: '/Advanced/01-concept/' },
          { text: '2. 技術選型與架構', link: '/Advanced/02-tech-stack/' },
          { text: '3. 前端到後端', link: '/Advanced/03-frontend/' },
          { text: '4. 數據庫與數據', link: '/Advanced/04-database/' },
          { text: '5. 產品與文檔', link: '/Advanced/05-product/' },
          { text: '6. 認證與安全', link: '/Advanced/06-security/' },
          { text: '7. API 設計規範', link: '/Advanced/07-api/' },
          { text: '8. 項目規則與協作', link: '/Advanced/08-workflow/' },
          { text: '9. 測試與質量', link: '/Advanced/09-testing/' },
          { text: '10. 部署與運維', link: '/Advanced/10-deploy/' },
          { text: '11. 發佈與覆盤', link: '/Advanced/11-review/' },
          { text: '12. 高級專題', link: '/Advanced/12-advanced/' },
        ]
      },
      { 
        text: '實踐篇', 
        items: [
          { text: '文科生/商科生項目', link: '/Practice/01-for-liberal-arts/' },
          { text: '理工科學生項目', link: '/Practice/02-for-stem/' },
          { text: '職場人士項目', link: '/Practice/03-for-professionals/' },
          { text: '核心技能', link: '/Practice/10-core-skills/' },
          { text: 'AI Agent 開發', link: '/Practice/11-ai-agents/' },
          { text: '全棧項目實戰', link: '/Practice/12-fullstack-projects/' },
          { text: '工具與效率', link: '/Practice/13-tools-integration/' },
        ]
      },
      { 
        text: '優質文章篇', 
        items: [
          { text: '知名公司博客', link: '/Articles/01-company-blogs/' },
          { text: '優質播客', link: '/Articles/02-podcasts/' },
          { text: '研究報告', link: '/Articles/03-research-reports/' },
          { text: '優質 Newsletter', link: '/Articles/04-newsletters/' },
          { text: '開發者社區', link: '/Articles/05-communities/' },
        ]
      },
    ],
    
    // 核心：自動生成側邊欄
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true, 
      useFolderLinkFromIndexFile: true,
      hyphenToSpace: true,
      
      manualSortFileNameByPriority: [
        'Basic', 'Advanced', 'Practice', 'Articles',
        'Basic/00-preface', 'Basic/01-awakening', 'Basic/02-mindset', 'Basic/03-technique',
        'Basic/04-practice-0-to-1', 'Basic/05-advanced', 'Basic/06-learning-paths', 
        'Basic/99-appendix', 'Basic/100-epilogue', 'Basic/101-next-part',
        'Advanced/00-bootcamp', 'Advanced/01-concept', 'Advanced/02-tech-stack', 'Advanced/03-frontend',
        'Advanced/04-database', 'Advanced/05-product', 'Advanced/06-security', 'Advanced/07-api',
        'Advanced/08-workflow', 'Advanced/09-testing', 'Advanced/10-deploy', 'Advanced/11-review', 'Advanced/12-advanced',
        'Practice/01-for-liberal-arts', 'Practice/02-for-stem', 'Practice/03-for-professionals',
        'Practice/10-core-skills', 'Practice/11-ai-agents', 'Practice/12-fullstack-projects', 'Practice/13-tools-integration',
        'Articles/01-company-blogs', 'Articles/02-podcasts', 'Articles/03-research-reports', 'Articles/04-newsletters', 'Articles/05-communities'
      ],
      
      collapsed: true,
      excludePattern: ['public', 'assets', 'docs'], 
    }),

    // editLink: {
    //   pattern: 'https://github.com/Eyre921/awesone-vibe-coding-tutorial/edit/main/docs/:path',
    //   text: '在 GitHub 上編輯此頁'
    // },

    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '頁面導航',
      level: [2, 3]
    },

    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '菜單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文檔',
            buttonAriaLabel: '搜索文檔'
          },
          modal: {
            noResultsText: '無法找到相關結果',
            resetButtonTitle: '清除查詢條件',
            footer: {
              selectText: '選擇',
              navigateText: '切換'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/vibe-vibe' }
    ],

    footer: {
      message: '',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP備2024097797號-3</a>'
    }
  }
}))
