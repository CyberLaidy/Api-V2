<!--Header-->
<template>
    <div class="nav" style="background-color: rgb(75, 75, 75); display: flex; justify-content: center; height: 70px; align-items: center;"
    >
      <v-btn>
        <span style=" font-size: 30pt; font-weight: 600;">RICKY & MORTI</span>
      </v-btn>
    </div>
  </template>

<script>
  import Nav from './Nav.vue';
  export default {
    name: 'Header',
    components:{
      Nav,
    }
  }

</script>
