import { defineConfig } from 'dumi';

export default defineConfig({
  base:"/speed-form/",
  outputPath: 'dist',
  themeConfig: {
    demo:{

    }
  },
  logo:"/logo.png",
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  styles:[
    "/styles.css"
  ]
});
