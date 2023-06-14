<!--CARDs Personaje -- FUNCIONA--> 
<template>
    <div>
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
                <div class="card-style" >
                  <div class="card-header">
                    <img v-bind:src="startusers.image" v-bind:alt="startusers.name" style="border-radius: 50px; width: 180px;">
                  </div>
                    <div class="card-content" style="display: flex; flex-direction: column;">
                    <v-card-text class="texto-nombre-card my-4 text-center text-h6">{{ startusers.name }}</v-card-text>
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
import { mapState } from 'vuex';

  export default{
    name: 'CardCharacters',
    props: [''],
    components: {

    },
    data(){
        return{

        }
    },
    created(){
        this.$store.dispatch('fetchUsers');
    },
    computed: {
        /**Mostrar personajes */
        cadenaPersonajes (){
            return `${this.characters}`
        },
        ...mapState(['characters']),
        
    }

  }

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
  border: solid 3pt cornflowerblue; 
  background:cornflowerblue; 
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