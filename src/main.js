import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import axios from "axios";

const token = localStorage.getItem('jwt')
if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+ token
}

createApp(App)
    .use(router)
    .provide('$axios', axios)
    .mount('#app')
