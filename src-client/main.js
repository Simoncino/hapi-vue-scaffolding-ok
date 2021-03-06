import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
//import VueRouter from 'vue-router'

Vue.use(VueAxios, axios);
//Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
