import { createApp } from 'vue'
import './style.css' // <--- Debe estar aquí
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // Dile a Vue que use el sistema de rutas
app.mount('#app')