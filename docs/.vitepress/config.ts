import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Slate.js",
  ignoreDeadLinks: true,

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  description: "一个简单的富文本编辑器内核",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../images/logo.png",
    search: {
      provider: "local",
    },

    nav: [{ text: "介绍", link: "/Introduction" }],

    sidebar: [
      { text: "介绍", link: "/Introduction" },
      {
        text: "实战",
        items: [
          { text: "安装", link: "/walkthroughs/01-installing-slate" },
          {
            text: "添加时间处理器",
            link: "/walkthroughs/02-adding-event-handlers",
          },
          {
            text: "自定义节点",
            link: "/walkthroughs/03-defining-custom-elements",
          },
          {
            text: "自定义样式",
            link: "/walkthroughs/04-applying-custom-formatting",
          },
          {
            text: "执行命令",
            link: "/walkthroughs/05-executing-commands",
          },
          {
            text: "保存到数据库",
            link: "/walkthroughs/06-saving-to-a-database",
          },
          {
            text: "使用打包后的版本",
            link: "/walkthroughs/XX-using-the-bundled-source",
          },
        ],
      },
      {
        text: "核心概念",
        items: [
          {
            text: "接口",
            link: "/concepts/01-interfaces",
          },
          {
            text: "节点",
            link: "/concepts/02-nodes",
          },
          {
            text: "位置",
            link: "/concepts/03-locations",
          },
          {
            text: "命令",
            link: "/concepts/04-commands",
          },
          {
            text: "操作",
            link: "/concepts/05-operations",
          },
          {
            text: "编辑器",
            link: "/concepts/06-editor",
          },
          {
            text: "插件",
            link: "/concepts/07-plugins",
          },
          {
            text: "渲染",
            link: "/concepts/08-rendering",
          },
          {
            text: "序列化",
            link: "/concepts/09-serializing",
          },
          {
            text: "规范化",
            link: "/concepts/10-normalizing",
          },
          {
            text: "迁移",
            link: "/concepts/XX-migrating",
          },
        ],
      },
      {
        text: "通用",
        link: "/general",
        items: [
          {
            text: "资源",
            link: "/general/resources",
          },
          {
            text: "常见问题",
            link: "/general/faq",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/LsyWeb/slate-docs" }],
  },
});
