import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

var app = createApp(App);
app.config.globalProperties.$filters = {
    // Creamos dos métodos que recibirán datos y devolverán un resultado
    mayuscula(dato) {
        return dato.toUpperCase();
    },

    getNumeroDoble(numero) {
        return numero * 2;
    }
}
app.use(router).mount('#app');
