<!--All con axios-->
<template>
    <div>
        <character :character="character" v-for="character in characters" :key="character.id"></character>
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
                <div class="card-style-details" >
                  <div class="card-header-details">
                    <v-card-text class="texto-nombre-card my-4 text-center text-h6">ID: {{ character.id }}</v-card-text>
                    <img v-bind:src="character.image" v-bind:alt="character.id" style="border-radius: 50%; width: 300px;">
                  </div>
                  <div class="card-content-details" style="display: flex; flex-direction: column;">
                    <v-card-text class="texto-nombre-details my-4 text-center text-h6">Nombre: {{ character.name }}</v-card-text>
                    <v-card-text class="texto-nombre-details my-4 text-center text-h6">Status: {{ character.status }}</v-card-text>
                    <v-card-text class="texto-nombre-details my-4 text-center text-h6">Specie: {{ character.species }}</v-card-text>
                    <v-card-text class="texto-nombre-details my-4 text-center text-h6">Gender: {{ character.gender }}</v-card-text>
                    <v-card-text class="texto-nombre-details my-4 text-center text-h6">Origin: {{ character.origin.name }}</v-card-text>
                    <v-card-text class="texto-nombre-details my-4 text-center text-h6">Location: {{ character.location.name }}</v-card-text>

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
import { mapActions, mapState } from 'vuex';
  //import { mapGetters } from 'vuex';
  
  
  export default {
    name: 'AllCharacter',
    props: [''],
    characters: {
      id: 'number',
      name: 'string',
      status: 'string',
      species: 'string',
      type: 'string',
      gender: 'string',
      location: 'object',
    },
    data: function(){
      return{
        characters: [''],
        page: 1,
        pages: 1
      }
    },
    //mostrará personajes cuando la web carge
    created(){
      this.fetch()
    },
    methods: {
      fetch(){
        const params = {
            page: this.page
        }
        //peticion http
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
      /*Paginacion*/
      changePage(page){
        this.page = (page <= 0 || page > this.pages) ? this.page : page
        this.fetch(); 

      },
      /*Candtidad Personajes*/
      cantidad(count){
        this.count = count
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
      background-color: pink;
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
    .card-header-details img{
      width: 170px;
    }
    .card-style-details{
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      margin: 20px; 
      border: solid 5pt rgb(19, 42, 133); 
      background: rgb(224 255 249); 
      border-radius: 30px; 
      padding: 5px; 
      width: 350px;
      height: 95%;
      margin: 20px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


    }
    .card-style-details:hover{
      border: solid 10pt rgb(0, 255, 204); 
      background: rgb(88, 126, 173); 
      color: white;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


    }

  </style>
  <!--
    #f6e5cb
  #ffc5c1
  #f99fa9
  #aa6581
  #503850
-->