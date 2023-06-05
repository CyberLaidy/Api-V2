import Vue from 'vue'
import store from '@/store';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    episodes: [],
    locations: []
  },
  mutations: {
    initUser(state, users){
      state.characters = users
    }, 
    initTvEpisode(state, tvepisode){
      state.episodes = tvepisode
    },
    getTvEpisode(state, tvEpisode){
      state.episodes = tvEpisode
    },
    initWorld(state, world){
      state.locations = world
    }
  },
  actions: {
    fetchTvEpisode({ commit }){
      fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(response => {
        // NO SE PUEDE MODIFICAR EL ESTADO DESDE UNA ACTION!!!!
        // https://vuex.vuejs.org/guide/mutations.html
        // 
        // this.episodes = response.results;
        // this.pages= response.info.pages;
        // console.log(`data ${response.data}`)
        
        // Será results, no?
        commit('initTvEpisode', response.results)
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
  },
  modules: {
    /* actions,
    state,
    mutations */
  },
});
