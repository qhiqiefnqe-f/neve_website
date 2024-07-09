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
  flex-direction: column;
  height: 800px;
}

.main {
  flex-grow: 1;
  display: flex;

  background: white;
}
</style>
