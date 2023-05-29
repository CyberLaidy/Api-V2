<template>
    <div class="home">
    <p class="titulo-home">Character details</p> 
    <AllCharacter />
  </div>
</template>

<script>
import AllCharacter from '@/components/AllCharacter.vue';


export default {
    Name: 'Details',
    props: '',
    components: {
        AllCharacter,
    }
}
</script>