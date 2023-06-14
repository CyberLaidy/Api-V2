import Vue from 'vue'
//import { set } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    episodes: [],
    characters: [],
    locations: [],
    charactersFilter: [],
    setCharactersFilter: []
  },
  mutations: {
    initTvEpisode(state, tvepisode){ //
      state.episodes = tvepisode
    },
    initStartUsers(state, startusers){ //
      state.characters = startusers
    }, 
    initStartWorld(state, startworld){
      state.locations = startworld
    },
    initAllPages(state, allpages){
      state.characters = allpages
    },
    initPageMorty(state, pagemorty){
      state.characters = pagemorty
    },
    initSearchUser(state, userName){ //
      state.characters = userName
    },
    setCharactersFilter(state, filterName){ 
      state.characters = filterName
    },
    postAddCharacter(state, addName){
      state.characters = addName
    }
    
  },
  actions: {
    fetchEpisode({ commit }){ /** Episodes*/
      fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(response => {

        commit('initTvEpisode', response.results)
        
      })
    },
    fetchUsers({ commit }){ /**Charcaters */
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
    fetchMorty({ commit }){
      fetch('https://rickandmortyapi.com/api/character/2')
      .then(response => response.json())
      .then(response => {        
      
        commit('initPageMorty', response.results)
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
        console.log('comi')
        commit('postAddCharacter', response.results)
      })
    },  
  },
  modules: {

  },
});
