import { createApp } from 'vue'
// import App from './components/01.watch/App.vue'
// import App from './components/02.life-cycle/App.vue'
// import App from './components/03.father-son/App.vue'
// import App from './components/04.brother/App.vue'
// import App from './components/05.provide&inject/App.vue'
// import App from './components/06.network/App.vue'

// vue 高级
// import App from './components/001.ref/App.vue'
// import App from './components/002.$nextTick/App.vue'
// import App from './components/003.dynamic/App.vue'
// import App from './components/004.basse-slot/App.vue'
// import App from './components/005.named-slot/App.vue'
import App from './components/006.scoped-slot/App.vue'

import './assets/css/bootstrap.css'

// import axios from 'axios'

const app = createApp(App)

// axios.defaults.baseURL = 'http://www.escook.cn'
// app.config.globalProperties.$http = axios

app.mount('#app')
