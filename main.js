import Vue from 'vue'
import App from './App'
import axios from './utils/http.js';
import store from './utils/vuex.js';

Vue.prototype.axios = axios;
Vue.prototype.store = store
Vue.config.productionTip = false ; // true 开发环境 false生产环境

App.mpType = 'app'

const app = new Vue({
    ...App
})

app.$mount(); 









