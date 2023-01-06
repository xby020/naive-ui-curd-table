import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: resolve(__dirname, '../tsconfig.json')
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './main.ts'),
      name: 'NCurdTable',
      fileName: (format) => `n-curd-table.${format}.js`
    },
    outDir: resolve(__dirname, '../dist'),
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
