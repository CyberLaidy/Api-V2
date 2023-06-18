import Vue from 'vue'
//import { set } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    episodes: [], //todos los espisodios
    characters: [], //todos los personajes
    locations: [], //todos las localizaciones
    charactersFilter: [],
    onecharacter: [{
      id: '',
      name: '',
      gender: ''
    }], //un personaje
    id: []
  },
  mutations: {
    initTvEpisode(state, tvepisode){ //
      state.episodes = tvepisode
    },
    initStartUsers(state, startusers){ //
      state.characters = startusers
    }, 
    initStartWorld(state, startworld){ //
      state.locations = startworld
    },
    initAllPages(state, allpages){
      state.characters = allpages
    },
    initSearchUser(state, userName){ //
      state.characters = userName
    },
    setCharactersFilter(state, filterName){ 
      state.characters = filterName
    },
    postAddCharacter(state, addName){
      state.characters = addName
    },
    initOneStartUsers(state, onestartusers){ //
      state.onecharacter = onestartusers
    }, 
    
  },
  actions: {
    fetchEpisode({ commit }){ /** Episodes*/
      fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(response => {

        commit('initTvEpisode', response.results)
        
      })
    },
    fetchUsers({ commit }){ /**Characters */
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {
      
       commit('initStartUsers', response.results)
      })
    },
    fetchWorld({ commit }){ /**Locations */
      fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(response => {        
      
        commit('initStartWorld', response.results)
      })
    },
    fetchPages({ commit }){
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {        
      
        commit('initAllPages', response.info)
      })
    },
    fetchSearchUser({ commit }){
      fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(response => {        
      
        commit('initSearchUser', response.results)
      })
    },  
    fetchPostAddCharacter({ commit }){
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {        
        commit('postAddCharacter', response.results)
      })//añadir metodo Post
    },    
    fetchOneUsers({ commit }){ /**detalles de personajes */
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(response => {
      
       commit('initOneStartUsers', response.results)
      })
    },
  },
  getters: { 
    getonecharacter: state => {
      return state.onecharacter
    }
  },
  modules: {

  },
});
