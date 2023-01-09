import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import WindiCSS from 'vite-plugin-windicss';
import libCss from 'vite-plugin-libCss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    WindiCSS({
      scan: {
        include: ['**/*.vue', '**/*.ts']
      }
    }),
    libCss()
  ],
  build: {
    target: 'modules',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'main.ts'),
      name: 'NCurdTable',
      fileName: (format) => `n-curd-table.${format}.js`
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
