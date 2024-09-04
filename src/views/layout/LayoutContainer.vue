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

    <router-view />
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
</style>
