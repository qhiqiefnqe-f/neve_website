<template>
  <div class="navbar">
    <div class="navbar__logo">我是navbar</div>
    <div class="navbar__menu">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style>
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: black;
}

.navbar > * {
  position: relative; /* 使文字内容位于背景之上 */
  z-index: 1;
}
</style>
