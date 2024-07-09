<script setup>
import { ref } from 'vue'

const isRegister = ref(true)
const register = () => {
  isRegister.value = !isRegister.value
  console.log('register')
}
</script>

<template>
  <div class="container">
    <Transition name="slide-up" mode="out-in">
      <div class="main" v-if="isRegister">
        <h1>登录</h1>
        <small>Take your art to the next level. Get it</small>
        <small>seen by millions of people</small>
        <button class="signingithub">
          Login with Github
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </button>
        <h2>-or-</h2>
        <div class="input-container">
          <input type="text" id="input1" required="" />
          <label for="input" class="label">Email</label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input type="password" id="input2" required="" />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <button class="start">start!</button>
        <small
          >Don't have an account?
          <a href="#" @click="register">Sign up</a></small
        >
      </div>

      <div class="main" v-else>
        <h1>注册</h1>
        <small>Take your art to the next level. Get it</small>
        <small>seen by millions of people</small>

        <label for="usernameField" class="usernamelabel label">Username</label>
        <input
          type="text"
          placeholder="@ input your username"
          id="usernameField"
          required="required"
        />
        <h2>-and-</h2>

        <div class="input-container">
          <input type="text" id="input1" required="" />
          <label for="input" class="label">Email</label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input type="password" id="input2" required="" />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <button class="start">Remember</button>
        <small
          >Already have an account?
          <a href="#" @click="register">Login</a></small
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
  font-size: 13px;
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
  width: 8em;
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
  width: 200px;
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
  margin: 10px auto;
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
  width: 40%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
