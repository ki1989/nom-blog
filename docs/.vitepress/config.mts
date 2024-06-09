import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/nom-blog/',
  title: "NOM tech blog",
  description: "NOM tech blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/sample.jpg",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'about', link: '/about' },
      { text: 'frontend', link: '/frontend' },
      { text: 'oracle', link: '/oracle' },
      { text: 'sample', link: '/sample' }
    ],
    sidebar: [
      {
        text: 'フロントエンド',
        items: [
        ]
      },
      {
        text: 'ORACLE',
        items: [
          { text: '表領域作成Tips', link: '/oracle/create-tablespace' },
        ]
      },
      {
        text: 'その他',
        items: [
          { text: 'Gitの使い方', link: '/tech/how-to-use-git' },
        ]
      }
    ],
    footer: {
      copyright: "©︎ 2024"
    },
    lastUpdated: {
      text: "最終更新日時",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium"
      }
    },
    search: {
      provider: "local"
    },
    docFooter: {
      prev: "前の記事",
      next: "次の記事"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/handism' }
    ]
  },
  ignoreDeadLinks: "localhostLinks",
  lang: "ja-JP",
  cleanUrls: true,
  srcDir: "./src",
  srcExclude: ["**/README.md", "**/TODO.md"],
  head: [["link", {rel: "icon", href: "/favicon.ico"}]],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://ki1989.github.io'
  },
})
