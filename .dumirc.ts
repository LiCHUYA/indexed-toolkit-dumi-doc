import { defineConfig } from 'dumi';
// @ts-ignore
import { globalCSS } from './styles/global.less.ts';
const repo = 'indexed-toolkit-dumi-doc'; 
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'indexeddb',
      nav: [
      { title: '指南', link: '/guide' },
      { title: 'API', link: '/api/api-reference' }
    ],
    sidebar: {
      '/guide': [
        {
          title: '入门',
          children: [
            { title: '快速开始', link: '/guide/getting-started' },
            { title: '基础概念', link: '/guide/concepts' }
          ]
        },
        {
          title: '核心功能',
          children: [
            { title: '数据库操作', link: '/guide/database' },
            { title: '表操作', link: '/guide/table' },
            { title: '查询构建器', link: '/guide/query' },
            { title: '文件存储', link: '/guide/file-storage' },
            { title: '数据迁移', link: '/guide/migration' }
          ]
        }
      ],
      '/api': [
        {
          title: 'API 参考',
          children: [
            { title: 'Api参考', link: '/api/api-reference' },
          ]
        }
      ]
    }
  },
  lessLoader: {  
    javascriptEnabled: true,
  },
  styles: [globalCSS()],
  
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
