<template>
  <n-config-provider
    class="w-full h-full flex flex-col gap-2"
    :theme="dark ? darkTheme : undefined"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <!-- Title -->
    <div class="flex justify-between items-center">
      <!-- title -->
      <n-h1 class="m-0">{{ tableTitle }}</n-h1>
      <!-- function -->
      <div class="flex gap-2">
        <n-button type="primary" @click="">
          <icon-mdi-plus></icon-mdi-plus>
          新增
        </n-button>
        <n-button type="info" @click="">
          <icon-mdi-refresh></icon-mdi-refresh>
          刷新
        </n-button>
        <n-button type="error" @click="">
          <icon-mdi-trash-can-outline></icon-mdi-trash-can-outline>
          重置
        </n-button>
      </div>
    </div>

    <!-- Filter -->
    <div class="w-full flex justify-between gap-4">
      <!-- query -->
      <n-form class="w-full h-full" label-placement="left">
        <table-filter :cols="queryRow" :filters="filters"></table-filter>
      </n-form>

      <!-- function -->
      <div class="h-full flex gap-2">
        <n-button type="default" size="large" @click="">
          <icon-mdi-magnify></icon-mdi-magnify>
          查询
        </n-button>
        <n-button type="default" size="large" @click="toggleMore">
          <component
            :is="isMore ? IconMdiChevronUp : IconMdiChevronDown"
          ></component>
        </n-button>
      </div>
    </div>

    <!-- Table -->
    <div class="w-full flex-auto">
      <n-data-table
        class="w-full h-full"
        :class="dark ? 'bg-zinc-800' : 'bg-stone-200'"
        flex-height
        :columns="columns"
        :data="data"
      />
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  NDataTable,
  NConfigProvider,
  darkTheme,
  zhCN,
  dateZhCN,
  NH1,
  NButton,
  NForm,
  NGrid,
  NFormItemGi,
  NInput,
  DataTableColumn
} from 'naive-ui';
import type {
  CurdTableColumnItem,
  CurdTableItem,
  CurdTableQueryItem,
  CurdTableRawData
} from 'packages/NCurdTable/types';

import TableFilter from './components/TableFilter.vue';

import IconMdiPlus from '~icons/mdi/plus';
import IconMdiRefresh from '~icons/mdi/refresh';
import IconMdiTrashCanOutline from '~icons/mdi/trash-can-outline';
import IconMdiChevronUp from '~icons/mdi/chevron-up';
import IconMdiChevronDown from '~icons/mdi/chevron-down';
import IconMdiMagnify from '~icons/mdi/magnify';

interface Props {
  columns: CurdTableItem<any>[];
  tableTitle?: string;
  dark?: boolean;
  queryRow?: number;
}

const props = withDefaults(defineProps<Props>(), {
  tableTitle: '',
  dark: false,
  queryRow: 4
});

// Filter
const isMore = ref(false);
function toggleMore() {
  isMore.value = !isMore.value;
}
const filters = computed(() => {
  return props.columns.filter(
    (item): item is CurdTableQueryItem<CurdTableRawData> => item.query === true
  );
});

// table
const columns = computed(() => {
  const columnsItem = props.columns.filter(
    (item): item is CurdTableColumnItem<CurdTableRawData> => item.show === true
  );
  return columnsItem.map((item) => {
    const column: DataTableColumn = {
      key: item.key
    };
    return Object.assign(column, item.column);
  });
});

const data = ref([
  {
    name: 'Jack',
    age: 18,
    address: 'some where'
  }
]);
</script>

<style scoped></style>
