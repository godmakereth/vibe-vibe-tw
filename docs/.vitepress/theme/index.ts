import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick, h } from 'vue'
import { useRoute, useData } from 'vitepress'
import mediumZoom from 'medium-zoom'
import Giscus from '@giscus/vue'

// 引入時間線樣式
import "vitepress-markdown-timeline/dist/theme/index.css";
import './custom.css' // 稍後創建這個文件，用於微調樣式

export default {
  extends: DefaultTheme,
  
  // 1. 佈局擴展：注入 Giscus 評論
  Layout: () => {
    const { frontmatter, isDark } = useData();
    
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => {
        return h('div', {
          class: 'info-banner',
          style: {
            background: '#e6a23c',
            color: '#fff',
            padding: '8px',
            textAlign: 'center',
            fontSize: '14px',
            lineHeight: '1.5'
          }
        }, '當前版本內部預覽版，內容有待優化調整，並非正式發行版本，不代表最終品質')
      },
      'doc-after': () => {
        // 如果頁面 Frontmatter 設置了 comment: false，則不顯示評論
        if (frontmatter.value.comment === false) return null;
        
        return h('div', { style: { marginTop: '2rem' } }, [
          h(Giscus, {
            repo: "datawhalechina/vibe-vibe",
            repoId: "R_kgDOQerM_g",
            category: "General",
            categoryId: "DIC_kwDOQerM_s4CzzOf",
            mapping: "pathname",
            strict: "0",
            reactionsEnabled: "1",
            emitMetadata: "1",
            inputPosition: "bottom",
            theme: isDark.value ? "dark_dimmed" : "light",
            lang: "zh-CN",
            loading: "lazy"
          })
        ])
      }
    })
  },

  // 2. 增強功能：圖片放大
  setup() {
    const route = useRoute()
    
    const initZoom = () => {
      // 給主要內容區的圖片添加放大功能，排除 logo 等
      // background: var(--vp-c-bg) 確保背景色適應深色模式
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      initZoom()
      
      // 動態計算 Banner 高度並設置 CSS 變量
      const updateBannerHeight = () => {
        const banner = document.querySelector('.info-banner')
        if (banner) {
          const height = (banner as HTMLElement).offsetHeight
          document.documentElement.style.setProperty('--vp-layout-top-height', `${height}px`)
        }
      }
      
      updateBannerHeight()
      window.addEventListener('resize', updateBannerHeight)
    })

    // 監聽路由變化，確保切換頁面後圖片依然可以放大
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
