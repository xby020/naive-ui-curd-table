import { App } from 'vue';

import NCurdTable from './src/components/NCurdTable';

export { NCurdTable };

export default {
  install(app: App) {
    app.component(NCurdTable.name, NCurdTable);
  }
};
