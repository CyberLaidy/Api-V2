<!-- PAGE DETALLES -->
<template>
    <div class="home">
    <p class="titulo-home">Character details</p> 
    <CardsCharacters />
    
  </div>
</template>

<script>
import CardsCharacters from '@/components/CardsCharacters.vue';

export default {
    Name: 'Details',
    props: '',
    components: {
        CardsCharacters,
    
    }
}
</script>


<style>
.titulo-home {
    font-family: 'Courier New', Courier, monospace;
}

</style>