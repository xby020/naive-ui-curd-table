<template>
  <div>
    <h1>NCurdTable</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
