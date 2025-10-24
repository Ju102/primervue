<template>
  <div>
    <h1>Mi primer proyecto de Vueeeeee</h1>
    <img src="./../assets/images/hawelin.jpg" alt="Imagen de ejemplo" />
    <p>Hola, me llamo {{ nombre }} y tengo {{ edad }} años.</p>
    <p>Los idiomas que hablo son:</p>
    <ul>
      <li v-for="idioma in miArray" :key="idioma">{{ idioma }}</li>
    </ul>
    <p>Objeto ejemplo: {{ objeto.clave }}</p>
  </div>
</template>

<script>
// Vue utiliza codigo JS
// Cada component que generemos debe tener un nombre obligatorio y debemos exportalo con dicho nombre
// El name es la etiqueta utilizada por otros components para dibujarlo.

export default {
  name: "HolaMundo",
  data() {
    return {
      // Las variables son almacenadas en formato JSON dentro de data
      nombre: "Julio",
      edad: 23,
      miArray: ["Español", "Ingles", "Frances", "Italiano"],
      objeto: { clave: "valor" },
    };
  },
};
</script>

<style>
h1 {
  color: blue;
}
@import "./../assets/css/estilos.css";
</style>