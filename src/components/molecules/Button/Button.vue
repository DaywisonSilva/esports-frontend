<template>
  <button class="btn">
    <slot name="prepend"></slot>
    <span class="btn__label">
      {{ label }}
    </span>
    <slot name="append"></slot>
  </button>
</template>
<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<style lang="scss" scoped>
.btn {
  @apply flex items-center p-4 bg-violet-500 rounded-md;
}

.btn__label {
  @apply mx-3;
}
</style>
