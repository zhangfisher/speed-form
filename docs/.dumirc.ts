import { defineConfig } from 'dumi';

export default defineConfig({
  base:"/speed-form/",
  publicPath:"/speed-form/",
  outputPath: 'dist',
  themeConfig: {
    demo:{

    }
  },
  logo:"/speed-form/logo.png",
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  styles:[
    "/speed-form/styles.css"
  ]
});
