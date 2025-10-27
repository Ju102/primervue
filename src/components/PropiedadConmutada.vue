<template>
    <div>
        <h2>Propiedad Conmutada</h2>
        <!--
        <ul>
            <li v-for="game in juegos" :key="game">
                {{ game }}
            </li>
        </ul>
        -->
        <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego"></li>
        </ul>
        <hr/>
        <input type="number" v-model="numero" />
        <div v-html="evaluarNumero"></div>
    </div>
</template>

<script>

export default {
    name: "PropiedadConmutada",
    computed: {
        evaluarNumero() {
            let data = "";
            if (this.numero % 2 == 0) {
                data = "<h4>El número es par</h4>";
            } else {
                data = "<h4>El número es impar</h4>";
            }
            return data;
        },

        // Se escribe como un método pero se utiliza como una propiedad
        juegosRojos() {
            var datos = this.juegos;
            var i = 0;

            for (var juego of this.juegos) {
                var juegoRojo = "<span style='color: red'>" + juego + "</span>";
                datos[i] = juegoRojo;
                i++;
            }
            return datos;
        }
    },
    data() {
        return {
            numero: 0,
            juegos: ["Parchís", "La Oca", "Monopoly", "Ajedrez"],
        }

    },
    methods: {
    }
};
</script>

<style></style>