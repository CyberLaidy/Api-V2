<!--CARDs Personaje Home || FILTER BY NAME-->
<template>
    <div>
      <!--Buscador home-->
      <!-- <div class="control">
        <input type="text" class="input" v-model="searchUser" placeholder="Inserta un nombre" v-on:keyup.enter="searchUser">
        <button class="btnBuscar " v-on:click="searchUser">Buscar</button>
      </div> -->
            <!--Buscador home-->
            <div class="control">
        <input type="text" class="input" v-model="name" placeholder="Search by name" v-on:keyup.enter="filter()">
        <button class="btnBuscar " v-on:click="search">Buscar</button>
      </div>
      <!--card-->
      <div style="margin-top: 30px;">
          <v-row class="vrow" v-on="fetch">
            <v-col cols="12" style="display: contents;">
              <v-hover
                v-slot="{ hover }"
                disabled>
                <v-card
                  :elevation="hover ? 12 : 2"
                  class="mx-auto"
                  height="350"
                  max-width="350"
                  style="display: contents; ">
                <div v-for="userName of characters" :key="userName.id"> 
                <div class="card-style" >
                  <div class="card-header">
                  </div>
                    <div class="card-content" style="display: flex; flex-direction: column;">
                    <v-card-text class="texto-nombre-card my-4 text-center text-h6">{{ userName.name }}</v-card-text>
                    <img v-bind:src="userName.image" v-bind:alt="userName.name" style="border-radius: 100px; width: 180px;">

                    <!-- <v-card-text class="my-4 text-center text-h6">{{ character.id }}</v-card-text> -->
                    <!-- <button class="ver-mas">Ver más</button> -->
                    </div>
                </div>
              </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row> 
      </div>
  </div>
  </template>

  <script>
  //importamos las librerias 
  import store from '@/store';
import axios from 'axios';

import { mapActions, mapGetters } from 'vuex';
  

  //localStorage.setItem = (id, 'id'); 

  import { mapState } from 'vuex';

  export default {
    name: 'Cards',
    props: [''],
    components: {

    },
    data: function(){
      return{
         userName: '',
         name,
         filter,

      }
      
    },
    //mostrará personajes cuando la web carga
    created(){
      this.$store.dispatch('fetchSearchUser');
      
    },
    computed: {
        /**Mostrar personajes */
        cadenaBusqueda (){
            return `${this.characters}`
        },
        ...mapState(['characters', 'userName'])
        
    },
    methods: {
      searchBusqueda(){
        const params = {
          name: this.name
        }
        this.$store.dispatch('fetchSearchUser', params);
      },
      ...mapActions(['initSearchUser']),
      /**Buscador */
      searchData(){
        this.page = 1
        this.$store.dispatch('fetchSearchUser', params);

      }, 
    }
    /* methods: {

      fetch(){
        const params = {
          //paginamos
          page: this.page,
          //buscamos por id
          name: this.search
        }
        let result = axios
        .get("https://rickandmortyapi.com/api/character", {params})
        .then(res =>{
          this.characters = res.data.results;
          //console.log(res.data.info)
          this.pages= res.data.info.pages;
          //this.ids= res.data.results.id;
          console.log(res.data)
        })
        .catch(err => {
          console.log("error "+err)
        })
      },
      changePage(page){
        this.page = (page <= 0 || page > this.pages) ? this.page : page
        this.fetch();
      },
      //Creamos una funcion para el buscador
      searchData(){
        this.page = 1
        this.fetch();

      }, 
    },
    */
  };
  
  </script>
  <style>
    nav.pagination{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }
    .pagination-link{
      padding: 15px;
      background-color: rgb(171, 171, 171);
      color: white;
      margin: 5px;
    }
    button .pagination-previus{ 
      padding: 15px;
      /* color: grey; */
      color: white;
      background: #97979799;
    }
    button .pagination-next{
      padding: 15px;
      color: white;
      background: #4caf50bf;
    }
    .vrow{
        align-content: center;
        justify-content: center;
    }
    .pagination{
        margin: auto;
    }
    .container{
      max-width: 100% !important;
      padding-bottom: 5px;
      padding-top: 10px;
    }
    .card-header img{
      width: 170px;
    }
    .card-style{
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      margin: 20px; 
      border: solid 3pt rgb(0, 0, 0); 
      background: rgb(50, 138, 101); 
      border-radius: 30px; 
      padding: 5px; 
      width: 220px;
      height: 90%;

    }
    .card-style:hover{
      border: solid 3pt rgb(255, 255, 255); 
      background: rgba(0, 255, 102, 0.761); 
    
    }
    .v-card__text:hover{
      font-size: 20px;
      font-weight: 600;
    }
    .search {
      display: flex;
      justify-content: center;
      /* background: aqua; */
    }
    .search input {
        background: aqua;
        height: 50px;
        border: solid black;
        padding: 10px;
    }
    button.btnBuscar {
      background: greenyellow;
      border: solid 1pt;
      padding: 13px;
      border-radius: 0px 10px 10px 0px;
  }
    input.input {
      background: aliceblue;
      border: solid black 1pt;
      padding-left: 10px;
      border-radius: 10px 0px 0px 10px;
    }
    .control {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  
  </style>