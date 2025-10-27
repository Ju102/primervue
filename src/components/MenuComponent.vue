<template>
  <nav>
    <h1>MENÚ</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/music">Música</router-link></li>
      <li><router-link to="/cinema">Cine</router-link></li>
      <li><router-link to="/ciclovida">Ciclo de Vida</router-link></li>
      <li><router-link to="/directivas">Directivas</router-link></li>
      <li><router-link to="/parimpar">Par o Impar</router-link></li>
      <li><router-link to="/juegos">Juegos</router-link></li>
      <li><router-link to="/filters">Métodos Filter</router-link></li>
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