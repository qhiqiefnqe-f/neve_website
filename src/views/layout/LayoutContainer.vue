<script setup>
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import Sitenav from '@/components/SiteNavigation.vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.getUser()
})
</script>

<template>
  <div class="container">
    <Sitenav />
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

  height: 800px;
}

.main {
  flex-grow: 1;
  display: flex;
  margin-left: 100px; /* 设置左边距等于导航栏的宽度 */
  overflow-y: auto; /* 允许内容垂直滚动 */
  height: 100vh;
  background: #212121;
  color: white;
}
</style>
