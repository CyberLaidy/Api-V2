
<template>
    <div>
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
                <div  v-for="character of characters" v-bind:key="character.id">
                <div class="card-style" >
                  <div class="card-header">
                    <img v-bind:src="character.image" v-bind:alt="character.name">
                  </div>
                    <div class="card-content" style="display: flex; flex-direction: column;">
                    <v-card-text class="my-4 text-center text-h6">{{ character.name }}</v-card-text>
                    <!-- <v-card-text class="my-4 text-center text-h6">{{ character.id }}</v-card-text> -->
                    <!-- <button class="ver-mas">Ver más</button> -->
                    </div>
                </div>
              </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row> 
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
  
  //importamos los componentes
 
  
  //import Vue from 'vue';
  
  export default {
    name: 'Cards',
    props: [''],
    data: function(){
      return{
        characters: [],
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

        let result = axios
        .get("https://rickandmortyapi.com/api/character", {params})
        .then(res =>{
          this.characters = res.data.results;
          //console.log(res.data.info)
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
      }
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
    .card-header img{
      width: 170px;
    }
    .card-style{
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      margin: 20px; 
      border: solid 3pt rgb(243, 229, 245); 
      background: rgb(243, 229, 245); 
      border-radius: 20px; 
      padding: 5px; 
      width: 220px;
      height: 300px;
    }
  </style>
  <!--
    #f6e5cb
  #ffc5c1
  #f99fa9
  #aa6581
  #503850
-->