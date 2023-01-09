import type { App, Plugin } from 'vue';

import NCurdTable from './src/NCurdTable.vue';

export const NCurdTablePlugin: Plugin = {
  install(app: App) {
    app.component(NCurdTable.name, NCurdTable);
  }
};

export { NCurdTable };
