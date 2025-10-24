<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/music">Música</router-link></li>
      <li><router-link to="/cinema">Cine</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent"
};
</script>

<style>
@import './../assets/css/estilos.css'
</style>