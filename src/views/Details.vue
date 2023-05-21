<template>
    <div class="home">
    <p class="titulo-home">Character details</p> 
    <OneCharacter />
  </div>
</template>

<script>
import OneCharacter from '@/components/OneCharacter.vue';


export default {
    Name: 'Details',
    components: {
        OneCharacter,
    }
}
</script>