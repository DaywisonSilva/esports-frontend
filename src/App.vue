<template>
  <main class="main">
    <img src="./assets/logo.svg" alt="logo" />
    <h1 class="main__title">
      Seu <span class="main__title--emphasis">duo</span> está aqui
    </h1>
  </main>
</template>

<style lang="scss" scoped>
@import 'tailwindcss/utilities';
@import 'tailwindcss/base';
@import 'tailwindcss/components';
.main {
  @apply max-w-[1344px] mx-auto flex justify-center items-center flex-col pt-20;

  .main__title {
    @apply text-6xl text-white font-black mt-20;
  }

  .main__title--emphasis {
    @apply bg-nlw-gradient bg-clip-text text-transparent;
  }
}
</style>
