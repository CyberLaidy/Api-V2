<!-- CardEpisodes -->
<template>
  <CardEpisodes />
</template>

  <script>
  //importamos las librerias 
  //import axios from 'axios';
  
  import CardEpisodes from '@/components/CardsEpisodes.vue'
  
  export default{
    name: 'Episodes',
    components: {
      CardEpisodes
    },
    created() {
      this.$store.dispatch('fetchEpisode')
      //this.fetchEpisode()
    },
    methods: {
      //...mapActions(['fetchEpisode'])
      
    }
  };
  
  </script>
  <style>
  /* estilos en el hijo */
  </style>
