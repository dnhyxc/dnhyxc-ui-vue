import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';

// 通过改写__dirname 为__dirnameNew，解决打包报错
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);

export const getPath = (_path) => path.resolve(__dirnameNew, _path);

// 组件库打包配置
export default defineConfig({
  build: {
    // 打包输出目录
    outDir: 'dist',
    // 构建库模式
    lib: {
      // 组件库入口文件
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'dnhyxc-ui',
      fileName: 'dnhyxc-ui',
      // 输出格式
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // 外部化处理依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    // 生成组件的类型声明文件
    dts({
      include: ['packages/**/*.ts', 'packages/**/*.tsx', 'packages/**/*.vue'],
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages')
    }
  }
});
