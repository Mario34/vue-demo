import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/demo', component: Demo },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(ElementPlus, { size: 'mini' })
app.use(router)
app.mount('#app')