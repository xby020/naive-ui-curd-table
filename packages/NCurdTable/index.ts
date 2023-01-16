import type { App, Plugin } from 'vue';

import NCurdTable from './src/NCurdTable.vue';

import type {
  CurdTableRawData,
  TableFormType,
  CurdTableBaseItem,
  CurdTableColumnItem,
  CurdTableQueryItem,
  CurdTableItem
} from './types';

export const NCurdTablePlugin: Plugin = {
  install(app: App) {
    app.component(NCurdTable.name, NCurdTable);
  }
};

export {
  NCurdTable,
  CurdTableRawData,
  TableFormType,
  CurdTableBaseItem,
  CurdTableColumnItem,
  CurdTableQueryItem,
  CurdTableItem
};
