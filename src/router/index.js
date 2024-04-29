import { createRouter, createWebHistory } from 'vue-router'
import { defaultRouter, menuRouter } from '@/router/routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...defaultRouter, ...menuRouter]
})

export default router
