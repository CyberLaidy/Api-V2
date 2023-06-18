<!--PAGE PARENT HOME --> 
<template>
    <div>
    <!-- Modal -->
    <v-card class="mx-auto d-flex " max-width="344">
      <div class="modal" :class="{ 'is-active' : modal }" v-if="modal">
        <div class="modal-background" @click="modal=false">
        <v-card-title>
          Detalles de personaje {{ onecharacter.name }}
        </v-card-title>
        <v-card-text>
          
          <p>Nombre: </p>
          <p>Género: </p>
          <p>Specie: </p>
          <p>Typo: </p>
        </v-card-text>
      </div>
    </div>
  </v-card>
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
                <div v-for="startusers of characters" v-bind:key="startusers.id"> 
                <div class="card-style-home" >
                  <div class="card-header">
                    <img v-bind:src="startusers.image" v-bind:alt="startusers.name" style="border-radius: 50px; width: 180px;">
                    <button @click="showMore(startusers.id)">More Information</button>
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
  import { mapActions, mapMutations, mapState } from 'vuex';
  
  export default{
    name: 'DetailsVuex',
    props: {
      startusers:{
        type: Object
      }
    },
    data: function(){
    return{
      modal: false,
      fetch: '',
    }
  },
    created(){
        this.$store.dispatch('fetchUsers');
        this.$store.dispatch('fetchOneUsers' (id));
    },
    methods: {
        showMore(id){
            this.showModal(id)
        },
        showModal(id){
            this.$store.dispatch('fetchOneUsers' (id));
        },
        saveCharacter(onecharacter){
          this.$store.state.onecharacter = onecharacter;
        }
    },
    computed: {
        /**Mostrar todos los personajes */
        cadenaPersonajes (){
            return `${this.characters}`
        },
        ...mapState(['characters']), 
        ...mapActions(['fetchUsers']),
        
        /**Mostrar detalles de cada personajes */
        cadenaOnePersonaje (){
            return `${this.onecharacter}`
        },
        ...mapState(['onecharacter']), 
        ...mapActions(['fetchOneUsers']),
      },
    
  }
  </script>
  
  <style>
  .card-header img{
  width: 100px;
  }
  img {
    width: 100px !important;
    border-radius: 100px !important;
}
  .card-style-home{
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin: 20px; 
    border: solid 3pt rgb(255, 255, 255); 
    background: rgb(200, 200, 198); 
    border-radius: 30px; 
    padding: 5px; 
    width: 333px;
    height: 50%;
    padding: 20px;
    justify-content: center;
  }
  .card-header {
    gap: 10px;
    display: flex;
    flex-direction: row !important;
    align-items: center;
}
  .texto-nombre-card{
  color: white;
  font-family: monospace;
  font-size: large;
  }
  .texto-nombre-card:hover{
  color: black;
  }
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-style-home:hover{
  border: solid 3pt rgb(255, 255, 255); 
  background: rgba(147, 212, 255, 0.761); 
  }

  .card-header button {
    margin-top: 0 !important;
    background-color:  rgb(111, 157, 212);
    padding: 10px;
    border-radius: 20px;
    width: 170px;
    color: white;
  }
  .card-header button:hover {
    background-color: rgb(247, 179, 214);
    margin-top: 0 !important;
    padding: 10px;
    border-radius: 20px;
    width: 170px;
    color: black;
  }
  
  </style>