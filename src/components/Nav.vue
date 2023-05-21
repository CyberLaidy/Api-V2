<template>

    <div class="menu">
      <v-tabs
      fixed-tabs
      background-color="#F3E5F5"
      color="#5E35B1"
    >
      <v-tab>
        <RouterLink to="/" style="text-decoration: none;">Home</RouterLink>
      </v-tab>
      <v-tab>
        <router-link to="/episodes" style="text-decoration: none;">Episodes</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/details" style="text-decoration: none;">Details</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/about" style="text-decoration: none;">About</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/create" style="text-decoration: none;">Create</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/edit" style="text-decoration: none;">Edit</router-link>
      </v-tab>
    </v-tabs>

    </div>

</template>

<script>

//import { useRouter } from 'vue-router';
import router from "@/router";
import { RouterLink, RouterView } from "vue-router";

export default {
    name: "Nav",
    components: { RouterView }
}

</script>

<style>

.menu .router-link-active{
  color: white;
  background-color: palevioletred;
  padding: 10px;
  font-weight: 600;
  text-decoration: none !important;
  border-radius: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.menu{
  height: 60px;
  font-family: system-ui;
}

</style>