<template>
  <div>
    <h1 class="text-sky-400 text-3xl font-bold">NCurdTable</h1>
    <h2 class="bg-green-600 text-light-50">Hi,{{ name }}</h2>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
