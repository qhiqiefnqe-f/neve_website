import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref(localStorage.getItem('token') || '')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    return {
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true // 将状态持久化
  }
)
