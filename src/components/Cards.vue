<!--PAGE PARENT HOME --> 
<template>
  <div>
    <!--Buscador home-->
    <div class="control">
        <input type="text" class="input" v-model="search" placeholder="Search a name" v-on:keyup.enter="search">
        <button class="btnBuscar " v-on:click="search">Search</button>
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
              <div v-for="startusers of characters" v-bind:key="startusers.id"> 
              <div class="card-style-home" >
                <div class="card-header text-center">
                  <img v-bind:src="startusers.image" v-bind:alt="startusers.name" style="border-radius: 50px; width: 180px;">
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
import { mapGetters, mapMutations, mapState } from 'vuex';

export default{
  name: 'Card',
  props: {
    startusers: {
      type: Object
    },
  },
  searchUser: [''],
  characters: [''],
  data (){
      return{
         fetch: '',
         search: '',
      }
  },
  created(){
      this.$store.dispatch('fetchUsers');
      //this.$store.dispatch('fetchSearchUsers');
  },
  computed: {
      /**Mostrar personajes */
      cadenaPersonajes (){
          return `${this.characters}`
      },
      ...mapState(['characters']), 
      
      /**Buscar personajes */
      search: {
        get(){
          return this.$store.state.filter.name
        },
      }
  }, 
  methods: {
    ...mapMutations(['initStartUsers']),
    ...mapMutations(['initSearchtUsers']),
    ...mapGetters(['getsearchusers'])
  },
}
</script>

<style>
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
  display: flex;
    color: black;
    padding-bottom: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    justify-content: center;
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