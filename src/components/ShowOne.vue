<!--Mostrar solo un personaje-->
<template>
  <div>
      <h3>Pasamos los valores de vuex a un character</h3>
      Id: {{ this.$store.getters.characterId }}
      Name: {{ this.$store.getters.characterName }}
      Status: {{ this.$store.getters.characterStatus }}
      Specie: {{ this.$store.getters.characterSpecies }}
      Type: {{ this.$store.getters.characterType }}
      Gender: {{ this.$store.getters.characterGender }}
      Location: {{ this.$store.getters.characterLocation }}

  </div>
  </template>

  <script>
  //importamos las librerias 
  import axios from 'axios';
  
  //importamos los componentes
 
  
  //import Vue from 'vue';
  
  export default {
    name: 'ShowOne',
    props: ['characters'],
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
        character: [''],
      }
    },

    computed: {
      computed: {
        characterId(){
          return this.$store.getters.characterId
        },
        characterName(){
          return this.$store.getters.characterName
        }
      }
    }

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
      border: solid 2pt rgb(19, 42, 133); 
      background: rgb(168, 179, 205); 
      border-radius: 30px; 
      padding: 5px; 
      width: 400px;
      height: 95%;
      margin: 20px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


    }
    .card-style-details:hover{
      border: solid 10pt rgb(0, 255, 204); 
      background: rgb(88, 126, 173); 
      color: white;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 20px;

    }
    .v-card__text {
      font-size: 15px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  </style>
  <!--
    #f6e5cb
  #ffc5c1
  #f99fa9
  #aa6581
  #503850
-->