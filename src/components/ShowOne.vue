<!--Mostrar solo un personaje-->
<template>
  <div>


      <h3>Amigos </h3>
      <input type="text" v-model="character" style="border: 1pt red solid;">
      <button @click="addCharacter" style="border: 1pt blue solid;">Agregar</button>
      <ul>
        <li v-for="(character, index) in $store.state.characters"
          :key="index">
          {{ character }}
        </li>
      </ul>
      <div>
        <h1>personajes</h1>
        <li v-for="(character, characters) in $store.state.characters"
          :key="character.id">
          nombre: {{ character.id }}
        </li>
      </div>
  </div>
  </template>

  <script>
  //importamos las librerias 
  import axios from 'axios';
  import { mapState } from "vuex"

  //importamos los componentes
 
  
  //import Vue from 'vue';
  
  export default {
    name: 'ShowOne',
    data: function(){
      return{
        character: '',
        show: ''

      }
    },
    methods: {
      addCharacter(){
        this.$store.state.character = this.character;
        this.$store.dispatch('addCharacterAction')
      },
      show(){
        this.$store.state.character = this.character;
        this.$store.dispatch('show')
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