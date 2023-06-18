
<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <RouterView />

    <Footer></Footer>
  </div>
</template>

<script>


//importamos los componentes
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';  
import Details from './views/Details.vue';
import Create from './views/Create.vue';

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    HomeView,
    Footer,
    Details,
    RouterView,
    Create,

  },
};

</script>


<style>
   .ver-mas{
      background-color: rgb(42, 77, 126);
      color: rgb(255, 255, 255);
      margin: 10px;
      width: 150px;
      height: 30px;
      border-radius: 20px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .ver-mas:hover{
     background-color: rgb(255, 255, 255);
      color: black;
    }
    .texto-nombre-card{
      color: black;
      padding-bottom: 5px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .texto-nombre-episode{
      color: black;
      padding-bottom: 5px;
      font-family: monospace;
      font-size: large;
    }
    .texto-nombre-episode:hover{
      color: white;
      padding-bottom: 5px;
      font-family: monospace;
    }
</style>
