<script setup>
import everydayGift from '@/components/everydayGift.vue'
import explore from '@/components/explore.vue'
</script>

<style></style>

<template>
  <div class="container">
    <everydayGift />
    <explore />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #171717;
}
</style>
