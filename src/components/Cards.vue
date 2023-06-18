<!--PAGE PARENT HOME --> 
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
              <div class="card-style-home" >
                <div class="card-header">
                  <img v-bind:src="startusers.image" v-bind:alt="startusers.name" style="border-radius: 50px; width: 180px;">
                  <button v-on:click="moreDetails">More Details</button>
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
import { mapMutations, mapState } from 'vuex';

export default{
  name: 'Card',
  props: [''],
  components: {

  },
  data(){
      return{
          id: '',
      }
  },
  created(){
      this.$store.dispatch('fetchUsers');
      this.$store.dispatch('fetchOneCharacter');
  },
  methods: {
    moreDetails(){
      this.$store.dispatch('fetchOneCharacter', this.id);
    }

  },
  computed: {
      /**Mostrar personajes */
      cadenaPersonajes (){
          return `${this.characters}`
      },
      ...mapState(['characters']), 

      cadenaUnPersonaje(){
        return `${this.setonecharacter}`
      },
      ...mapState(['setonecharacter'])

    },
  
  
}

  /* fetchOneCharacter(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(response => console.log(response)) 
  } */
    


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
width: 200px;
}
.card-style-home{
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  margin: 20px; 
  border: solid 3pt rgb(255, 255, 255); 
  background: beige; 
  border-radius: 30px; 
  padding: 5px; 
  width: 250px;
  height: 90%;
  padding: 20px;
  justify-content: center;
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
background: rgba(36, 220, 110, 0.761); 
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
.card-header button {
  background-color:  thistle;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  width: 170px;

}
.card-header button:hover {
  background-color: azure;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  width: 170px;
}

</style>