import Vue from 'vue'
//import { set } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)


/*Como los valores son fijos, create otro componente y usa los valores de vuex*/
export default new Vuex.Store({
  state: {
    characters: [''],
    character: {
      id: '2020',
      name: 'Sandra',
      status: 'string',
      species: 'string',
      type: 'string',
      gender: 'string',
      location: 'object',
    },
    search: {
      name: 'string'
    }

  },
  getters: {
    AllCharactersApi (state){
      return state.characters
    },
    OneCharactersApi (state){
      return state.character
    },
    searchData(state){
      return state.search
    },
    /**Character */
    characterName (state){
      return state.character.name
    },
    characterId (state){
      return state.character.id
    },
    characterStatus (state){
      return state.character.status
    },
    characterSpecies (state){
      return state.character.species
    },
    characterType (state){
      return state.character.tyoe
    },
    characterGender (state){
      return state.character.gender
    },
    characterLocation (state){
      return state.character.location
    },
    
  },
  mutations: {

    
  },
  actions: {
    changePage(page){
      this.page = (page <= 0 || page > this.pages) ? this.page : page
      this.fetch();
      
    },


  },
  modules: {
  }
})
