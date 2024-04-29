/*
 * @Author: Bug Router
 * @Date: 2024-04-28 17:02:20
 * @Description: Default
 */
import { createPinia } from 'pinia'
const store = createPinia()

export function setupStore(app) {
  app.use(store)
}

export { store }
