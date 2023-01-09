<template>
  <div class="w-200 h-200 bg-slate-600 text-4xl font-bold text-light-50">
    {{ foo }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NCurdTableProps } from 'types';

export default defineComponent({
  name: 'NCurdTable',
  props: {
    foo: {
      type: String as PropType<NCurdTableProps['foo']>,
      default: 'Hello World'
    }
  }
});
</script>

<style scoped></style>
