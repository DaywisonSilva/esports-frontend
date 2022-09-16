<template>
  <main class="main">
    <img src="./assets/logo.svg" alt="logo" />
    <h1 class="main__title">
      Seu <span class="main__title--emphasis">duo</span> está aqui
    </h1>
    <div class="main__listCards">
      <a href="" class="card">
        <img src="/img/image1.png" alt="image1" />
        <div class="card__info">
          <strong class="card__title">League of Legends</strong>
          <br />
          <span class="card__subtitle">4 anúncios</span>
        </div>
      </a>
      <a href="" class="card">
        <img src="/img/image2.png" alt="image 2" />
        <div class="card__info">
          <strong class="card__title">Dota 2</strong>
          <br />
          <span class="card__subtitle">4 anúncios</span>
        </div>
      </a>
      <a href="" class="card">
        <img src="/img/image3.png" alt="image 3" />
        <div class="card__info">
          <strong class="card__title">Counter Strike</strong>
          <br />
          <span class="card__subtitle">4 anúncios</span>
        </div>
      </a>
      <a href="" class="card">
        <img src="/img/image4.png" alt="image 4" />
        <div class="card__info">
          <strong class="card__title">Apex Legends</strong>
          <br />
          <span class="card__subtitle">4 anúncios</span>
        </div>
      </a>
      <a href="" class="card">
        <img src="/img/image5.png" alt="image 5" />
        <div class="card__info">
          <strong class="card__title">Fortnite</strong>
          <br />
          <span class="card__subtitle">4 anúncios</span>
        </div>
      </a>
      <a href="" class="card">
        <img src="/img/image6.png" alt="image 6" />
        <div class="card__info">
          <strong class="card__title">World of Warcraft</strong>
          <br />
          <span class="card__subtitle">4 anúncios</span>
        </div>
      </a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import 'tailwindcss/utilities';
@import 'tailwindcss/base';
@import 'tailwindcss/components';
.main {
  @apply max-w-[1344px] mx-auto flex justify-center items-center flex-col pt-20;

  .main__title {
    @apply text-6xl  font-black mt-20;
  }

  .main__title--emphasis {
    @apply bg-nlw-gradient bg-clip-text text-transparent;
  }

  .main__listCards {
    @apply grid grid-cols-6 gap-6 mt-16;
  }

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
}
</style>
