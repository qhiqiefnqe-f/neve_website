<script setup>
import cardsPart from '@/components/cardsPart.vue'
</script>
<template>
  <div class="exploreContainer">
    <h1>For You</h1>
    <cardsPart />
  </div>
</template>

<style>
.exploreContainer {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 1000px;
  width: 100%;
  background-color: #171717;
}
.exploreContainer h1 {
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
