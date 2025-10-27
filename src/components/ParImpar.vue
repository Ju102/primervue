<template>
  <div>
    <label>Introduzca un número o genere uno aleatorio</label>
    <input type="number" v-model="numero" />
    <button @click="generarNumeroRandom()">Generar</button>

    <hr />
    <h4>El número es {{ comprobarParImpar() }}</h4>
    <!--
    <h4 v-if="numero % 2 == 0">El número es par</h4>
    <h4 v-else>El número es impar</h4>
    -->
  </div>
</template>

<script>
export default {
  name: "ParImpar",
  data() {
    return {
      numero: 0,
    }
  },
  methods: {
    comprobarParImpar() {

      if (this.numero == 0) {
        return "cero";
      }
      else if (this.numero % 2 == 0) {
        return "par";
      }
      else {
        return "impar";
      }
    },
    generarNumeroRandom() {
      this.numero = parseInt(Math.random() * 100) + 1;
    }
  }
};
</script>

<style></style>