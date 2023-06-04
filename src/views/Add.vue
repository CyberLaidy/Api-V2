<!--CREAMOS LISTA DE PERSONAJES CON VUEX-->
<template>
    <div class="add">
      <h1 class="titulo-add">Add character / Añade tus personajes</h1>
      <div class="formulario">
        <p>Crea tu Lista de personajes con Vuex</p>
        <input type="text" v-model="personaje" style="border: solid black 1pt;">
        <button @click="addPersonaje" style="border: solid green 1pt; background-color: green; color: white;">Add Character</button>
      </div>
      <!--Lista de personajes importada de vuex-->
      <p class="titulo-add">Estos son tus personajes: </p>
      <ul class="lista-personajes">
        <li v-for="(personaje, index) in $store.state.personajes" 
        :key="index">
        {{ personaje }}
        </li>
      </ul>
    </div>
  </template>

<script>

export default {
    name: 'Add',
    data: function(){
      return{
        personaje: '',
      }
    },
    methods: {
      addPersonaje(){
        this.$store.state.personaje = this.personaje;
        this.$store.dispatch('addPersonajeAction')

      },
    }
}
</script>

<style>
.add{
  display: flex;
    /* text-align: center; */
    flex-direction: column;
    align-items: center;
}
  .formulario{
    background-color: white;
    border: solid rgb(42, 77, 126) 5pt;
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 20px;
    justify-content: center;
    margin: 20px;
  }
  .formulario button {
    width: 200px;
    height: 30px;
    border-radius: 20px;
    font-size: large;
    font-family: revert;
}
  .formulario p{
    color: black;
    font-size: x-large;
    font-family: system-ui;
  }
  .lista-personajes{
    background-color: darkseagreen;
    color: white;
    width: 500px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    text-transform: uppercase;
    font-size: x-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }
  .formulario input {
    height: 40px;
    padding-left: 10px;
    background: cadetblue;
    color: white;
    font-size: larger;
    font-family: cursive;
    text-transform: math-auto;
    text-align: center;
    padding: 5px;
}
  .titulo-add{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-size: large;
    color: rgb(0, 34, 112);
    font-family: system-ui;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>