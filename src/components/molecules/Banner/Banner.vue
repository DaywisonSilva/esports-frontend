<template>
  <div class="banner"></div>
</template>
<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>()
</script>

<style lang="scss" scoped>
.banner {
  @apply w-full h-6 bg-red-50;
}
</style>
