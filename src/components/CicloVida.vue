<template>
  <div>
    <h1>Ciclo de Vida de un Componente Vue</h1>
    <p>
      <b>{{ mensaje }}</b>
    </p>
    <button @click="cambiarMensaje">Cambiar Mensaje</button>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  data() {
    return {
      mensaje: "Hoy ya es viernes!",
    };
  },
  methods: {
    // Aqui incluimos los métodos del componente

    // Para acceder a los datos del componente usamos "this"
    cambiarMensaje() {
      this.mensaje = "Ya es fin de semana!";
    },
  },

  mounted() {
    console.log("El componente CicloVida ha sido montado en el DOM");
  },
  created() {
    console.log("El componente CicloVida ha sido creado");
  },
  updated() {
    console.log("El componente CicloVida ha sido actualizado");
  },
  unmounted() {
    console.log("El componente CicloVida ha sido desmontado del DOM");
  },
};
</script>

<style>
</style>