<template>
  <div class="home">
    <h1>Pagina Home</h1>
    <Cards />
  </div>
</template>

<script>
//import Cards from '@/components/Cards.vue';

import Cards from '@/components/Cards.vue';


export default {
  name: 'HomeView',
  components:{
      Cards,

  }
}
</script>
