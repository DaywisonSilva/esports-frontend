<template>
  <a href="" class="card">
    <img :src="imgSrc" :alt="alt" />
    <div class="card__info">
      <strong class="card__title">{{ title }}</strong>
      <br />
      <span class="card__subtitle">{{ subtitle }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ imgSrc: string; alt: string; title: string; subtitle: string }>()
</script>

<style lang="scss" scoped>
.card {
  @apply relative rounded-lg overflow-hidden;
}

.card__info {
  @apply w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 bg-game-gradient;
}

.card__title {
  @apply font-bold;
}

.card__subtitle {
  @apply text-zinc-300 text-sm;
}
</style>
