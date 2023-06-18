<!-- Parent Search -->
<!-- Home-->
<template>
    <div>
      <!--Buscador home-->
      <div class="control">
        <input type="text" class="input" v-model="search" placeholder="Search a name" v-on:keyup.enter="searchData">
        <button class="btnBuscar " v-on:click="searchData">Search</button>
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
                <div v-for="character of characters" v-bind:key="character.id"> 
                <div class="card-style" >
                  <div class="card-content" style="display: flex; flex-direction: column;">
                    <v-card-text class="texto-nombre-card my-4 text-center text-h6">{{ character.name }}</v-card-text>
                  </div>
                  <div class="card-header">
                    <img v-bind:src="character.image" v-bind:alt="character.name" style="border-radius: 50px; width: 180px;">
                  </div>
                </div>
              </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row> 
          <!--Paginacion Home-->
          <div class="container">
                <nav class="pagination" role="navegation" aria-label="pagination">
                    <!--Pagina anterior-->
                    <button>
                        <a class="pagination-previus" v-on:click="changePage(page-1)">Previus</a>
                    </button>    
                    <!--Página actual-->
                    <a class="pagination-link"> {{ page }}</a>
                    <!--Pagina siguiente-->
                    <button>
                        <a class="pagination-next" v-on:click="changePage(page+1)">Next</a>                
                    </button>
                </nav>
          </div>
      </div>
  </div>
  </template>

  <script>
  //importamos las librerias 
import axios from 'axios';
import { mapGetters } from 'vuex';
  

  //localStorage.setItem = (id, 'id'); 

  
  export default {
    name: 'Cards',
    props: [''],
    characters: [''],
    data: function(){
      return{
        characters: [],
        page: 1,
        pages: 1,
        search: '',
      }
    },
    //mostrará personajes cuando la web carga
    created(){
      this.fetch()
    },
    methods: {
      fetch(){
        const params = {
          //paginamos
          page: this.page,
          //buscamos por nombre
          name: this.search, /*valor buscador*/
        }
        let result = axios
        .get("https://rickandmortyapi.com/api/character", {params})
        .then(res =>{
          this.characters = res.data.results;
          this.pages= res.data.info.pages;
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
      border: solid 3pt rgb(0, 34, 112); 
      background: rgb(171, 174, 199); 
      border-radius: 30px; 
      padding: 5px; 
      width: 220px;
      height: 90%;
    }
    .texto-nombre-card{
        color: white;
        font-weight: 600;
        font-size: large;
        width: 200px;
        text-align: center;
    }
    .texto-nombre-card:hover{
        color: black;
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
        width: 300px;
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