<script setup>
import { ref } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()

const isRegister = ref(true)
const toRegister = () => {
  isRegister.value = !isRegister.value
  console.log('register')
}
const register = () => {
  const response = userRegisterService({
    username: email.value,
    password: password.value
  })
  console.log('注册结果', response)

  // 在这里添加注册成功后重定向
  if (response) {
    router.push('/')
  }
}

const login = async () => {
  try {
    const response = await userLoginService({
      username: email.value,
      password: password.value
    })
    console.log('登录结果', response)

    // 在这里添加登录成功后重定向
    if (response.status === 0) {
      router.push('/')
    } else {
      console.error('登录失败', response.msg)
    }
  } catch (error) {
    console.error('登录过程中发生错误', error)
  }
}
</script>

<template>
  <div class="container">
    <Transition name="slide-up" mode="out-in">
      <div class="main" v-if="isRegister">
        <h1>登录</h1>
        <small>Take your art to the next level. Get it</small>
        <small>seen by millions of people</small>

        <div class="input-container">
          <input type="text" id="input1" required="" v-model="email" />
          <label for="input" class="label">Email</label>
          <div class="underline"></div>
        </div>
        <small>-and-</small>
        <div class="input-container">
          <input type="password" id="input2" required="" v-model="password" />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <button class="start" @click="login">start!</button>
        <small
          >Don't have an account?
          <a href="#" @click="toRegister">Sign up</a></small
        >
      </div>

      <div class="main" v-else>
        <h1>注册</h1>
        <small>Dream as if you'll live forrever</small>
        <small>Live as if you'll die today</small>

        <div class="input-container">
          <input type="text" id="input1" required="" v-model="email" />
          <label for="input" class="label">Email</label>
          <div class="underline"></div>
        </div>
        <small>-and-</small>
        <div class="input-container">
          <input type="password" id="input2" required="" v-model="password" />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <button class="start" @click="register">Remember me</button>
        <small
          >Already have an account?
          <a href="#" @click="toRegister">Login</a></small
        >
      </div>
    </Transition>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.empty {
  height: 20px;
}
.usernamelabel {
  display: block;
  color: white;
  font-size: 14px;
  padding: 5px 5px;
}

#usernameField {
  display: block;
  width: 230px;
  height: 40px;
  margin-bottom: 12px;
  background-color: #292929;
  border-radius: 30px;
  border: 2px solid #292929;
  padding: 0px 12px;
  outline: none;
  caret-color: lavender;
  color: rgb(212, 212, 212);
  font-size: 12px;
  transition-duration: 0.2s;
}

#usernameField:focus,
#usernameField:valid {
  border: 2px solid lavender;
  transition-duration: 0.2s;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
h1 {
  font-size: 35px;
  font-weight: 600;
}
h2 {
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
}

small {
  margin-top: 1px;
  font-size: 15px;
}

a {
  color: #560bad;
  text-decoration: none;
}
button.start {
  cursor: pointer;
  --color: #560bad;
  font-family: inherit;
  display: inline-block;
  width: 40%;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);
}

button.start:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 150px;
  width: 220px;
  border-radius: 50%;
}

button.start:hover {
  color: #fff;
}

button.start:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

button.start:hover:before {
  top: -30px;
  left: -30px;
}

button.start:active:before {
  background: #3a0ca3;
  transition: background 0s;
}

.input-container {
  position: relative;
  margin: 30px auto;
  width: 250px;
}

.input-container input[type='text'] {
  font-size: 15px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}
.input-container input[type='password'] {
  font-size: 15px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 5px;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type='text']:focus ~ .label,
.input-container input[type='text']:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #333;
}

.input-container input[type='password']:focus ~ .label,
.input-container input[type='password']:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type='text']:focus ~ .underline,
.input-container input[type='text']:valid ~ .underline {
  transform: scaleX(1);
}
.input-container input[type='password']:focus ~ .underline,
.input-container input[type='password']:valid ~ .underline {
  transform: scaleX(1);
}
.svg-icon {
  margin-left: 10px;
}
.signingithub {
  display: flex;
  align-items: center;

  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to bottom right, lavender, #cac5ec);
}

.main {
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 40px;
  background: white;
  min-width: 400px;
  width: 35%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
