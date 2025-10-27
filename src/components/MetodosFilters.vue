<template>
    <div>
        <h3>Métodos Filters</h3>
        <ul>
            <li v-for="numero in numeros" :key="numero">
                Número: {{ numero  }},
                Doble: {{ $filters.getNumeroDoble(numero) }}
            </li>
        </ul>
        <br />
        <ul>
            <li v-for="nombre in nombres" :key="nombre">
                Nombre: {{ nombre }},
                Mayúscula: {{ $filters.mayuscula(nombre) }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MetodosFilters",
    data() {
        return {
            numeros: [56, 98, 3, 21, 4, 16],
            nombres: ["Julio", "Diana", "Raul", "Sofía"],
        }
    }
}
</script>

<style></style>