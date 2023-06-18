<!--Navegacion (Header)-->
<template>
    <div class="menu">
      <v-tabs
      background-color="#ececec"
      color="black"
      slider-color="#00ff5e"
      grow 
      flat>
        <v-tab to="/" style="text-decoration: none;">Home</v-tab>
        <v-tab to="/details" style="text-decoration: none;">Details</v-tab>
        <v-tab to="/more" style="text-decoration: none;">More</v-tab>
        <v-tab to="/episodes" style="text-decoration: none;">Episodes</v-tab>
        <v-tab to="/locations" style="text-decoration: none;">Locations</v-tab>
        <v-tab to="/add" style="text-decoration: none;">Add</v-tab>
        <v-tab to="/search" style="text-decoration: none;">Search</v-tab>
        <v-tab to="/morevuex" style="text-decoration: none;">more-vuex</v-tab>
      </v-tabs>
    </div>
</template>


<script>
import router from "@/router";
import { RouterLink, RouterView } from "vue-router";

export default {
    name: "Nav",
    components: { RouterView }
}

</script>

<style>

.menu{
  height: 60px;
  font-family: system-ui;
}

</style>

        
        
<!-- <v-tab > Cambiamos el menu [flat -> linea | grow -> ocupar espacio]
  <router-link to="/" style="text-decoration: none;">Home</router-link>
</v-tab>
<v-tab>
  <router-link to="/details" style="text-decoration: none;">Details</router-link>
</v-tab>
<v-tab>
  <router-link to="/episodes" style="text-decoration: none;">Episodes</router-link>
</v-tab>
<v-tab>
  <router-link to="/locations" style="text-decoration: none;">Locations</router-link>
</v-tab>
<v-tab>
  <router-link to="/add" style="text-decoration: none;">Add</router-link>
</v-tab>
<v-tab>
  <router-link to="/search" style="text-decoration: none;">Search</router-link>
</v-tab> -->