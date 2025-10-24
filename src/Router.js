// Necesarias las librerias de Vue Router con npm install vue-router

import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CinemaComponent from './components/CinemaComponent.vue';
import MusicComponent from './components/MusicComponent.vue';

// Un array con las rutas

const Rutas = [
    { path: "/", component: HomeComponent },
    { path: "/cinema", component: CinemaComponent },
    { path: "/music", component: MusicComponent },

]

// Creamos una variable para el router indicando el tipo de navegacion (history) y las rutas

const router = createRouter({
    history: createWebHistory(),
    routes: Rutas,
});

// La constante router se exporta para usarla en main.js

export default router; 