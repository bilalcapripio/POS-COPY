import { createApp } from 'vue'
import router from './router'
window.$ = require('jquery');
import './assets/admin-lte/js/AdminLTE';
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import Print from 'vue-print-nb'


createApp(App)
.use(Vuex)
.use(store)
.use(router)
.use(Print)
.use(VueAxios, axios)
.mount('#app')

