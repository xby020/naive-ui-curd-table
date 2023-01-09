import { NCurdTable } from './src/components/NCurdTable';

declare module 'vue' {
  interface GlobalComponents {
    NCurdTable: typeof NCurdTable;
  }
}
