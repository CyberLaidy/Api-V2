<template>
  <div class="home">
    <p class="titulo-home">Character List</p>
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

<style>
  .titulo-home{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-size: x-large;
    color: palevioletred;
    font-family: system-ui;
    font-weight: 700;
    text-transform: capitalize;
    
  }
</style>