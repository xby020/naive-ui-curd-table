<template>
  <!-- text -->
  <n-input
    v-if="type === 'text'"
    type="text"
    :placeholder="`请输入${label}`"
    size="medium"
  ></n-input>

  <!-- number -->
  <n-input-number
    v-if="type === 'number'"
    :placeholder="`请输入${label}`"
    size="medium"
  />

  <!-- select -->
  <n-select
    v-if="type === 'select'"
    :placeholder="`请输入${label}`"
    size="medium"
    :options="options"
    clearable
  />

  <!-- multSelect -->
  <n-tree-select
    v-if="type === 'multSelect'"
    multiple
    cascade
    checkable
    max-tag-count="responsive"
    :options="selectOptions"
  />
</template>

<script setup lang="ts">
import {
  NInput,
  NInputNumber,
  NSelect,
  NTreeSelect,
  SelectOption,
  TreeSelectOption
} from 'naive-ui';

import type {
  CurdTableQueryItem,
  CurdTableRawData,
  TableFormType
} from 'packages/main';

interface TableFormItemProps {
  type: TableFormType;
  label?: string;
  options?: CurdTableQueryItem<CurdTableRawData>['queryOptions'];
}

const props = defineProps<TableFormItemProps>();

const selectOptions = computed(() => {
  if (props.type === 'multSelect') {
    return props.options as TreeSelectOption[];
  }
});
</script>

<style scoped></style>
