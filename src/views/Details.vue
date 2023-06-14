<template>
    <div class="home">
    <p class="titulo-home">Character details</p> 
    <AllCharacter />
  </div>
</template>

<script>
import ShowOne from '@/components/ShowOne.vue';


export default {
    Name: 'Details',
    props: '',
    components: {
        ShowOne,
    }
}
</script>