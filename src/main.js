import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router";

import "@/assets/scss/style.scss";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'animate'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import "@/assets/js/main.js";

const app = createApp(App)

app.use(store)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')


