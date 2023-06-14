<!-- AddCharacter -->

<template>
  <AddCharacter />
</template>


<script>
import axios from 'axios';
import AddCharacter from '@/components/AddCharacter.vue';
export default {
    name: 'Create',
    props: [''],
    characters: [''],
    components: {
      AddCharacter,
    }
}

</script>

<style>
</style>