<template>
    <div class="create">
      <h1>Create, POST [Añadir]</h1>
      <p>Hacer un modal con los inputs y el fetch con el post aunque no funcione</p>
      
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