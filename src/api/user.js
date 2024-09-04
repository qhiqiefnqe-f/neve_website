import request from '@/utils/request'
import { useUserStore } from '@/stores/user' // 引入用户模块

export const userRegisterService = async ({ username, password }) => {
  try {
    const response = await request({
      method: 'post',
      url: '/api/reguser',
      data: {
        username,
        password
      }
    })
    if (response.data.status !== 0) {
      throw new Error(response.data.message || '未知错误')
    }
    console.log('注册成功', response.data)
    return response.data
  } catch (error) {
    // 捕获并处理错误
    console.error('捕获到的错误:', error)

    if (error.response) {
      // 服务器响应了一个状态码，但状态码在2xx范围之外
      console.error('注册失败', error.response.data)
      console.error('状态码:', error.response.status)
      console.error('响应头:', error.response.headers)
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('没有收到服务器响应', error.request)
    } else {
      // 其他错误
      console.error('注册过程中发生未知错误', error.message)
    }
    return Promise.reject(error)
  }
}
// 登录接口
export const userLoginService = async ({ username, password }) => {
  const userStore = useUserStore() // 获取 Pinia 仓库实例
  try {
    const response = await request({
      method: 'post',
      url: '/api/login',
      data: {
        username,
        password
      }
    })
    if (response.data.status !== 0) {
      return Promise.reject(new Error(response.data.message || '未知错误'))
    }
    console.log('登录成功', response.data)
    const token = response.data.token
    userStore.setToken(token) // 将 token 存入 Pinia 仓库
    return response.data
  } catch (error) {
    // 捕获并处理错误

    if (error.response) {
      // 服务器响应了一个状态码，但状态码在2xx范围之外
      console.error('注册失败', error.response.data)
      console.error('状态码:', error.response.status)
      console.error('响应头:', error.response.headers)
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('没有收到服务器响应', error.request)
    } else {
      // 其他错误
      console.error('登录过程中发生未知错误', error.message)
    }
    return Promise.reject(error)
  }
}

// 获取用户基本信息
export const userGetInfoService = () => request.get('/my/userinfo')

// 更新用户基本信息
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

// 更新用户头像
export const userUpdateAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })

// 更新用户密码
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
