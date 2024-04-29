/*
 * @Author: Bug Router
 * @Date: 2024-04-25 13:18:48
 * @Description: Default
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router).use(Antd).use(createPinia())

app.mount('#app')
