<template>
  <div class="banner">
    <div class="banner__content">
      <div class="banner__texts">
        <div class="banner__title">{{ title }}</div>
        <div class="banner__subtitle">{{ subtitle }}</div>
      </div>
      <Button label="Publicar anúncio" class="banner__btn">
        <template #prepend>
          <vue-feather type="zoom-in"></vue-feather>
        </template>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '../Button/Button.vue'

defineProps<{ title: string; subtitle: string }>()
</script>

<style lang="scss" scoped>
.banner {
  @apply w-full h-28 mb-32 rounded-lg overflow-hidden relative bg-banner-gradient;
}

.banner__content {
  @apply w-full h-[calc(100%-4px)] absolute bottom-0 rounded-md bg-[#2A2634] px-8 flex items-center justify-between;
}

.banner__title {
  @apply font-black text-2xl mb-2;
}

.banner__subtitle {
  @apply text-zinc-400;
}
</style>
