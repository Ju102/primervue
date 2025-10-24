<template>
  <div>
    <h1>Directivas en Vue</h1>

    <!--h3>{{ $data }}</h3-->
    <h3>{{ nombre }}</h3>
    <h3>{{ numero }}</h3>

    <label>Introduzca un número:</label>
    <input type="number" v-model="numero" />
    <br />
    <h4 v-if="numero > 0" style="color: green">El número es positivo</h4>
    <h4 v-else-if="numero < 0" style="color: red">El número es negativo</h4>
    <h4 v-else style="color: blue">El número es cero</h4>
    <hr />
    <ul>
      <li v-for="(serie, index) in lista" :key="index">
        {{ index + 1 }} - {{ serie }}
      </li>
    </ul>
    <hr />
    <label>Introduzca Serie: </label>
    <input type="text" v-model="serieNueva"/>
    <button @click="nuevaSerie()">Añadir</button> 
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",

  data() {
    return {
      numero: 0,
      nombre: "",
      serieNueva: "",
      lista: [
        "Los Simpson",
        "The Boys",
        "Breaking Bad",
        "La Casa de Papel",
        "Stranger Things",
      ],
    };
  },

  methods: {
    nuevaSerie() {
        this.lista.push(this.serieNueva);
    },
  },
};
</script>

<style>
</style>