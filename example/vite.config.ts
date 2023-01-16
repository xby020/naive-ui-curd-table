import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      scan: {
        include: ['../packages/NCurdTable/src/**/*.vue']
      }
    }),
    AutoImport({
      imports: ['vue'],
      dts: './types/auto-imports.d.ts'
    }),
    Icons(),
    Components({
      dts: './types/components.d.ts',
      resolvers: [IconsResolver()]
    })
  ]
});
