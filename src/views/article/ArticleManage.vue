<script setup>
import everydayGift from '@/components/everydayGift.vue'
import foryou from '@/components/foryou.vue'
import explore from '@/components/explore.vue'
</script>

<style></style>

<template>
  <div class="container">
    <everydayGift />
    <foryou />
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
