import Vue from 'vue'
import store from '@/store';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //poner variables y colecciones aqui
    //Vacia la lista por defecto
    personajes: [],
    personaje: null,
    /*Se podria crear un personaje con varias variables ?*/
    createPersonaje: {
      name: '',
      status: '',
      species: '',
      gender: '',
    }
  },
  mutations: {
    //funciones para cambiar el estado [pt, edit, delete]
    //LOAD_CHARACTERS: (state, payload) => (state.characters = payload),
    
    addAmigo(state){
      state.amigos = [state.amigo, ...state.amigos]
    },
    //Añadimos el personaje
    addPersonaje(state){
      state.personajes = [state.personaje, ...state.personajes]
    },
    addCharacter(state){
      state.characters = [state.character, ...state.characters]
    },
    show(state){
      state.characters = [state.character, ...state.characters]
    }



    /* initUser(state, users){
      state.characters = users
    }, 
    } */
  }, getters:{
    //nos devuelve el numero de caracters, episodios y localizaciones
    /* countCharacters: (state) => state.characters.length, */
    
    
    mensaje(state){
      return state.email
    },
    nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`
    },
    show(state){
      return state.characters
    },


  },
  actions: {
    //funciones que pueden llamar a las mutaciones
    addAmigoAction(contex){
      contex.commit('addAmigo');
    },    
    addPersonajeAction(contex){
      contex.commit('addPersonaje');
    },    
    addCharacterAction(contex){
      contex.commit('addCharacters');
    },
    show(state){
      fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => {return res.json();})
      .then((response) => {
        this.characters = response.data.results;
        this.pages= response.data.info.pages;});
      state.commit('show');
    },
    
    
    
    
    
    
    
    
    
    
    
    
    GET_CHARACTERS_NAME: (state) => {
      fetch(`https://rickandmortyapi.com/api/character${state.state.name}`)
      .then((res) => {return res.json();})
      .then((response) => {
        this.characters = response.data.results.map((character) => character.name)
        this.characters = response.data.results;
        this.pages= response.data.info.pages;
        console.log(`data ${response.data}`)
        state.commit("LOAD_CHARACTERS_NAME", characters)
      });
    },
    GET_CHARACTERS: (state) => {
      fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then((response) => {
        this.characters = response.data.results.map((character) => character.id)
        state.commit("LOAD_CHARACTERS", characters)
      });
    },
    GET_CHAR: (state) => {
      axios.get("https://rickandmortyapi.com/api/character")
      .then(response =>{
        state.commit('SET_CHAR', response.data)
      })
    },
  },

    /* fetchTvEpisode({ commit }){
      fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(response => {
        this.episodes = response.data.results;
        this.pages= response.data.info.pages;
        console.log(`data ${response.data}`)
        
        commit('initTvEpisode', response.data)
      })
    },
    fetchUsers({ commit }){
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {
        this.characters = response.data.results;
          this.pages= response.data.info.pages;
          console.log(`data ${response.data}`)
          
        commit('initUsers', response.data)
      })
    },
    fetchWorld({ commit }){
      fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(response => {
        this.location = response.data.results;
        this.pages= response.data.info.pages;
        console.log(`data ${response.data}`)
        
      commit('initWorld', response.data)
      })
    }, 
  },*/
 
  modules: {
    /* actions,
    state,
    mutations */
  },

});
