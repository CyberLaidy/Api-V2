<!-- PAGE DETALLES un personaje -->
<template>
    <div class="home">
    <p class="titulo-home">More details</p> 
    <CardMoreInfo />
   
  </div>
</template>

<script>
import CardMoreInfo from '@/components/CardMoreInfo.vue';

export default {
    Name: 'OneDetails',
    props: '',
    components: {
        CardMoreInfo,
    
    }
}
</script>


<style>
.titulo-home {
    font-family: 'Courier New', Courier, monospace;
}

</style>