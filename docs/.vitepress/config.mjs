import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Q&A",
  description: "Thiền quán niệm Tứ Đại",
  base: '/thien-tu-dai/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Đặt câu hỏi', link: 'https://forms.gle/6d4B9Gctmqhoyp8Q9' },
    ],

    search: {
      provider: 'local'
    }
  }
})
