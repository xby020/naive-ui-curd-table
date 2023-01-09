import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      scan: {
        include: ['../packages/src/components/**/*.{vue,html,jsx,tsx}']
      }
    })
  ]
});
