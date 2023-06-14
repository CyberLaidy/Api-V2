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
    initTvEpisode(state, tvepisode){ //FUNCIONA
      state.episodes = tvepisode
    },
    initStartUsers(state, startusers){ //FUNCIONA
      state.characters = startusers
    }, 
    initWorld(state, world){
      state.locations = world
    },
    initAllPages(state, allpages){
      state.characters = allpages
    },
    initPageMorty(state, pagemorty){
      state.characters = pagemorty
    },
    initSearchUser(state, userName){ //OK
      state.characters = userName
    },
    setCharactersFilter(state, payload){ //??
      state.characters = payload
    },
    
  },
  actions: {
    fetchEpisode({ commit }){ /**FUNCIONA */
      fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(response => {

        commit('initTvEpisode', response.results)
        
      })
    },
    fetchUsers({ commit }){ /**FUNCIONA */
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {
      
       commit('initStartUsers', response.results)
      })
    },
    fetchWorld({ commit }){
      fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(response => {        
      
        commit('initWorld', response.results)
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
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(response => {        
      
        commit('initPageMorty', response.results)
      })
    },
    fetchSearchUser({ commit }, userName){
      fetch('https://rickandmortyapi.com/api/character', {userName})
      .then(response => response.json())
      .then(response => {        
      
        commit('initSearchUser', response.results)
      })
    },  
  },
  modules: {

  },
});
