<template>
  <n-grid :x-gap="24" :y-gap="8" :cols="cols">
    <n-form-item-grid-item
      v-for="(filter, filterIndex) in filters"
      :key="filterIndex"
      :label="filter.queryLable"
    >
      <table-form-item
        :type="filter.type"
        :label="filter.queryLable"
        :options="filter.queryOptions"
      ></table-form-item>
    </n-form-item-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NFormItemGridItem, NInput, NInputNumber } from 'naive-ui';
import { CurdTableQueryItem, CurdTableRawData } from 'packages/NCurdTable';

import TableFormItem from './TableFormItem.vue';

interface TableFilterItemProps {
  cols?: number;
  filters?: CurdTableQueryItem<CurdTableRawData>[];
}

const props = withDefaults(defineProps<TableFilterItemProps>(), {
  cols: 4
});
</script>

<style scoped></style>
