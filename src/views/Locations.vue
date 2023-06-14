<!-- Locations -->
<template>
  <div class="home">
    <p class="titulo-home">Locations</p>
    <CardsLocation />
  </div>
</template>

<script>
import CardsLocation from '@/components/CardsLocation.vue';
export default {
  name: 'HomeView',
  components:{
    CardsLocation, 

  }
}


</script>