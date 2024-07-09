<script setup>
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import Sitenav from '@/components/SiteNavigation.vue'
import HeaderPart from '@/components/headerPart.vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.getUser()
})
</script>

<template>
  <div class="container">
    <Sitenav />
    <HeaderPart />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;

  background-color: #171717;
  height: 100vh;
}
.body {
  display: flex;

  height: 100vh;
}

.main {
  flex-grow: 1;
  display: flex;
  margin-left: 100px;
  margin-top: 60px;
  overflow-y: auto; /* 允许内容垂直滚动 */
  height: 100vh;
  background: #212121;
  color: white;
}
</style>
