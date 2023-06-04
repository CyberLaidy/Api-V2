<template>
    <div class="create">
      <h1>Create, POST [Añadir]</h1>
      <p>Hacer un modal con los inputs, como crear lista, pero que se vaya guardando el dato cuando se ponga añadir</p>
      <div style=" display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: large; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <p>Rellena los campos y crea un nuevo personaje</p>
        <div class="add">
          <div class="input-button">
            <input type="text" placeholder="Escribe un nombre">
            <button>Añadir</button>
          </div>
          <p>Custom Name: </p>
        </div>
        <div class="add">
          <div class="input-button">
            <p>¿Alive o Dead?</p>
            <input type="text" placeholder="Escribe un nombre">
            <button>Añadir</button>
          </div>
          <p>Custom Specie: </p>
        </div>
        <div class="add">
          <div class="input-button">
            <input type="text" placeholder="Escribe un nombre">
            <button>Añadir</button>
          </div>
          <p>Custom Typo: </p>
        </div>
        <div class="add">
          <div class="input-button">
            <input type="text" placeholder="Gender">
            <button>Añadir</button>
          </div>
          <p>Custom Gender: </p>
        </div>
      </div>
      <div class="add-new-character" style="text-align: center; margin-top: 20px;">
        <h3>Tu personaje tiene estos datos</h3>
        <p>respuesta</p>
        <p>respuesta</p>
        <p>respuesta</p>
        <p>respuesta</p>
      </div>
    </div>
  </template>

<script>
export default {
    Name: 'Create',
    props: ['character'],
    character: {
      id: 'number',
      name: 'string',
      status: 'string',
      species: 'string',
      type: 'string',
      gender: 'string',
      location: 'object',
    },
}
</script>
<style>
button {
    background: aquamarine;
    border: solid 1pt;
    padding: 5px;
}
input{
  border: black solid 1pt;
    padding: 5px;
  }
  .add{
  margin-top: 20px;

}

</style>