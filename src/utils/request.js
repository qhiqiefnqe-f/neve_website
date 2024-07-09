import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userstore = useUserStore()
    if (userstore.token) {
      config.headers.Authorization = userstore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.code == 0) {
      return res
    }
    ElMessage.error(res.data.message || '未知错误')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    //特殊情况，401权限不足，或token过期 => 跳转登录页
    if (err.response.status === 401) {
      ElMessage.error('请先登录')
      //跳转登录页
      useUserStore().logout()
      //跳转到登录页
      router.push('/login')
      //默认情况，给提示就行
      ElMessage.error(err.response.data.message || '未知错误')
      return Promise.reject(err)
    }
  }
)
export default instance
export { baseURL }
