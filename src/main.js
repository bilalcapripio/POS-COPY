import { createApp } from 'vue'
import router from './router'
window.$ = require('jquery');
import './assets/admin-lte/js/AdminLTE';
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

createApp(App)
.use(Vuex)
.use(Chartkick.use(Chart))
.use(store)
.use(router)
.use(VueAxios, axios)
.mount('#app')

