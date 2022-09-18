<template>
  <main class="main">
    <img src="./assets/logo.svg" alt="logo" />
    <h1 class="main__title">
      Seu <span class="main__title--emphasis">duo</span> está aqui
    </h1>
    <div class="main__listCards">
      <Card
        v-for="card in data.cards"
        :key="card.title"
        :img-src="card.src"
        :alt="card.alt"
        :title="card.title"
        :subtitle="card.subtitle"
        link="https://domain/image.png"
      />
    </div>
    <Banner
      title="Não encontrou seu duo?"
      subtitle="Publique um anúncio para encontrar novos players!"
    />
  </main>
</template>

<script setup lang="ts">
import Card from '@components/molecules/Card/Card.vue'
import Banner from '@components/molecules/Banner/Banner.vue'

const data = {
  cards: [
    {
      src: '/img/image1.png',
      alt: 'image 1',
      title: 'League of Legends',
      subtitle: '4 anúncios'
    },
    {
      src: '/img/image2.png',
      alt: 'image 2',
      title: 'Dota 2',
      subtitle: '4 anúncios'
    },
    {
      src: '/img/image3.png',
      alt: 'image 3',
      title: 'Counter Strike',
      subtitle: '4 anúncios'
    },
    {
      src: '/img/image4.png',
      alt: 'image 5',
      title: 'Apex Legends',
      subtitle: '4 anúncios'
    },
    {
      src: '/img/image5.png',
      alt: 'image 5',
      title: 'Fortnite',
      subtitle: '4 anúncios'
    },
    {
      src: '/img/image6.png',
      alt: 'image 6',
      title: 'World of Warcraft',
      subtitle: '4 anúncios'
    }
  ]
}
</script>

<style lang="scss" scoped>
.main {
  @apply max-w-[1344px] mx-auto flex justify-center items-center flex-col pt-20;

  .main__title {
    @apply text-6xl  font-black mt-20;
  }

  .main__title--emphasis {
    @apply bg-nlw-gradient bg-clip-text text-transparent;
  }

  .main__listCards {
    @apply grid grid-cols-6 gap-6 mt-16 mb-8;
  }
}
</style>
