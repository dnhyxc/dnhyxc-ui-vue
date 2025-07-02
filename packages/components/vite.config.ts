import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import dts from 'vite-plugin-dts';
// 组件库打包配置
export default defineConfig({
  build: {
    // 打包输出目录
    outDir: 'dist',
    // 构建库模式
    lib: {
      // 组件库入口文件
      entry: path.resolve(__dirname, './index.ts'),
      name: 'dnhyxc-ui',
      // 根据不同格式输出到不同目录
      fileName: (format, entryName) => {
        if (format === 'es') {
          return `${entryName}.mjs`;
        }
        return `${entryName}.js`;
      },
      // 输出格式
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // 外部化处理依赖
      external: ['vue'],
      output: [
        {
          // 保持目录结构
          preserveModules: true,
          // 输出目录
          preserveModulesRoot: 'src',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          },
          format: 'es',
          dir: 'dist/es'
        },
        {
          format: 'umd',
          globals: {
            vue: 'Vue'
          },
          name: 'dnhyxc-ui',
          dir: 'dist/lib'
        }
      ]
    }
  },
  plugins: [
    vue(),
    // 生成组件的类型声明文件
    dts({
      include: ['./**/*'],
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages')
    }
  }
});
