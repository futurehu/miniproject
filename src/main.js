import Vue from 'vue'
import App from './App'
import './styles/base.css'
import './styles/iconfont.css'
Vue.config.productionTip = false
App.mpType = 'app' 
import store from './store/index.js'
Vue.prototype.$store = store
import {backBeaforWin,openWin} from './utils/index'
import {request} from './api/request'
// 把通用方法挂载到Vue原型上
Vue.prototype.$http = request
Vue.prototype.$backBeaforWin = backBeaforWin
Vue.prototype.$openWin = openWin
const app = new Vue(App)
app.$mount()
