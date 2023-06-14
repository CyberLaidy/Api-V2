<!-- Page Search - cardsSearch -->
<template>
    <div class="home">
      <p class="titulo-home">Search Characters</p>
      <CardsSearch />
    </div>
  </template>
  
  <script>
  //import Cards from '@/components/Cards.vue';
  
 import CardsSearch from '@/components/CardsSearch.vue';
  
  export default {
    name: 'HomeView',
    components:{
        CardsSearch, //search
  
    }
  }
  </script>