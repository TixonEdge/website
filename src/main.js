import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import 'aos/dist/aos.css';
import './css/style.css'

const app = createApp(App)
app.use(router)
app.use(Vue3Lottie)
app.mount('#app')
