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
    
  };
  
  </script>
  <style>
  /* estilos en el hijo */
  </style>
