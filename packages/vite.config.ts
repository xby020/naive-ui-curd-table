import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import WindiCSS from 'vite-plugin-windicss';
import libCss from 'vite-plugin-libCss';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      exclude: ['./types/components.d.ts', './types/auto-imports.d.ts']
    }),
    WindiCSS({
      scan: {
        include: ['**/*.vue', '**/*.ts']
      }
    }),
    libCss(),
    AutoImport({
      imports: ['vue'],
      dts: './types/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    Icons(),
    Components({
      dts: './types/components.d.ts',
      resolvers: [IconsResolver()]
    })
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
      external: ['vue', 'naive-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'naive-ui': 'naive-ui'
        }
      }
    }
  }
});
