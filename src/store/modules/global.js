/*
 * @Author: Bug Router
 * @Date: 2024-04-28 17:07:34
 * @Description: Default
 */
import { defineStore } from 'pinia'
export { store } from '@/store'

export const useIsLoginStore = defineStore({
  id: 'global',
  state: () => ({
    isLogin: false
  }),
  getters: {},
  actions: {
    setIslogin(loginState) {
      this.isLogin = loginState
      window.localStorage.setItem('loginState', loginState)
    }
  }
})

export function useIsLoginStoreHook(store) {
  return useIsLoginStore(store)
}
