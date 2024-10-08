import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    themeConfig: {
      logo: "/assets/logo.png",
      nav: [
        { text: "首页", link: "/" },
        { text: "指南", link: "/guide/" },
        { text: "组件", link: "/components/" },
        { text: "API参考", link: "/api/" },
        { text: "常见问题", link: "/faq/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],
      sidebar: {
        "/guide/": [
          {
            text: "开始",
            collapsible: true,
            items: [
              { text: "介绍", link: "/guide/" },
              { text: "安装", link: "/guide/installation" },
              { text: "基本概念", link: "/guide/concepts" },
            ],
          },
        ],
        "/components/": [
          {
            text: "常用组件",
            items: [
              { text: "介绍", link: "/components/" },
              { text: "按钮 Button", link: "/components/button" },
              { text: "表单 Form", link: "/components/form" },
              { text: "表格 Table", link: "/components/table" },
            ],
          },
        ],
      },
      footer: {
        message: "用心学习 Vue 3 和 TypeScript",
        copyright: "Copyright© 2024 mqxu",
      },
    },
  });