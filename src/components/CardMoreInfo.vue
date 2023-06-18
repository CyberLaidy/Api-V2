<!-- Parent Search -->
<!-- Home-->
<template>
  <div>
    <!-- Modal -->
    <v-card class="mx-auto d-flex " max-width="344">
      <div class="modal" :class="{ 'is-active' : modal }" v-if="modal">
        <div class="modal-background" @click="modal=false">
          <v-card-title>
            Detalles de personaje
          </v-card-title>
          <v-card-text>
            <p>Nombre: </p>
            <p>Género: </p>
            <p>Specie:</p>
            <p>Typo: </p>
          </v-card-text>
        </div>
      </div>
    </v-card>
    <!--card con todos los personajes-->
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
              <div @showModal="showModal" v-for="character of characters" v-bind:key="character.id"> 
              <div class="card-style" >
                <div class="card-content" style="display: flex; flex-direction: column;">
                  <v-card-text class="texto-nombre-card my-4 text-center text-h6">{{ character.name }}</v-card-text>
                  
                </div>
                <div class="card-header">
                  <img v-bind:src="character.image" v-bind:alt="character.name" style="border-radius: 50px; width: 180px;">
                  <button class="btnMoreInfo" @click="showModal(character.id)">More</button>
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
import axios from 'axios';


export default {
  name: 'CardMoreInfo',
  props: {
    character:  {type: Object},
    characters:  {type: Object},
    currentCharacter: {
      type: Object
    },
  },
  data: function(){
    return{
      modal: false,
      fetch: '',
    }
  },
  //mostrará personajes cuando la web carga
  created(){
    this.fetchAll(),
    this.fetchOne(id)
  },
  methods: {
    fetchAll(){
      let result = axios
      .get("https://rickandmortyapi.com/api/character")
      .then(result =>{
        this.characters = result.data.results;
        console.log(result.data)
      })
      .catch(err => {
        console.log("error "+err)
      })
    },
    showMore(id){
      //this.$emit('showModal', id) hijo a padre 
      this.showModal(id)
    },
    showModal(id){
      //acciones
      this.fetchOne(id)
    },
    fetchOne(id){
      //http 
      let res = axios.get(`https://rickandmortyapi.com/api/character/${id}/`)
      .then(result => {
        this.currentCharacter = result.data.results;
        this.modal = true;
        console.log('Datos personaje: ', result.data) //no puedo usar currentCharacter
      }) 
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
    align-items: center;
    margin: 20px;
    border: solid 3pt white;
    background: #39bfbf;
    border-radius: 30px;
    padding: 5px;
    width: 300px;
    height: 95%;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
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
    background: rgba(36, 167, 88, 0.761);
  }
  button.btnMoreInfo {
    background: greenyellow;
    border-radius: 20px;
  }
  button.btnMoreInfo:hover {
    background: royalblue;
    border-radius: 20px;
    color: white;
  }
</style>