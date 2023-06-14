
<template>
  <CardEpisodes />
</template>

  <script>
  //importamos las librerias 
  //import axios from 'axios';
  
  import { mapState } from 'vuex';
  import CardEpisodes from '@/components/CardsEpisodes.vue'
  
  export default{
    name: 'Episodes',
    components: {
      CardEpisodes
    },
    created() {
      this.$store.dispatch('fetchEpisode')
      //this.fetchEpisode()
    },
    methods: {
      //...mapActions(['fetchEpisode'])
      
    }
  };
  
    /* name: 'Cards',
    props: ['episodes'],
    data(){
      return{
        episodes: [],
        page: 1,
        pages: 1
      }
    },
    computed: {
      cadenaEpisodios(){
        return `${this.episodes}`
      },
    },
    
    created() {
    this.fetch()
  },
  methods: {
    fetch(){
      const params = {
          page: this.page
      } */
      /* let result = axios
      .get("https://rickandmortyapi.com/api/episode", {params})
      .then(res =>{
        this.characters = res.data.results;
        //console.log(res.data.info)
        this.pages= res.data.info.pages;
        console.log(res.data)
      })
      .catch(err => {
        console.log("error "+err)
      }) */
 /*    },
    changePage(page){
      this.page = (page <= 0 || page > this.pages) ? this.page : page
      this.fetch();
    },
      
    },
  }; */
  
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
      background-color: rgb(40, 115, 158);
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
    .card-style-episode{
        display: flex;
        margin: 20px;
        border: solid 3pt rgb(125, 125, 125);
        background: gainsboro;
        border-radius: 30px;
        padding: 5px;
        width: 300px;
        height: 80%;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        align-items: center;
        flex-direction: column;

    }
    .card-style-episode:hover{
      border: solid 3pt skyblue; 
      background: skyblue; 

    }
 
  </style>
  <!--
    #f6e5cb
  #ffc5c1
  #f99fa9
  #aa6581
  #503850
-->