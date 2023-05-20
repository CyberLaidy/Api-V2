
<template>
  <div id="app">
    <Header />
    <Nav />
    <RouterView />

    <Footer />
  </div>
</template>

<script>
//importamos las librerias 
import axios from 'axios';

//importamos los componentes
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Episodes from './views/Episodes.vue';
import { RouterView } from 'vue-router';


export default {
  name: 'App',
  components: {
    Header,
    Nav,
    HomeView,
    Episodes,
    Footer,
    RouterView
},
};

</script>
<style>
.ver-mas{
    background-color: aquamarine;
    margin: 10px;
    width: 200px;
    height: 30px;
    border-radius: 20px;
}
</style>
