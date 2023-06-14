<!--Footer-->
<template>
  <div class="footer" style="margin-top: 30px;">
    <p>Política de Privacidad</p>
    <p>Api create by Sandra</p>
    <p>Aviso Legal y Cookies</p>
  </div>
</template>

<script>
 export default{
    name: 'Footer',
    
  }  
</script>
<style>
  .footer{
    background-color: lightgrey;
    display: flex;
    justify-content: space-around;
    height: auto;
    align-items: center;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
}
  .footer:hover{
    background-color: lightgrey;
    color: slateblue;
    font-weight: 600;
    cursor: pointer;
}

</style>