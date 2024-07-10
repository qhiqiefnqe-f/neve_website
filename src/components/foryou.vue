<script setup>
import cardsPart from '@/components/cardsPart.vue'
</script>
<template>
  <div class="foryouContainer">
    <h1>For You</h1>
    <cardsPart />
  </div>
</template>

<style>
.foryouContainer {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 1000px;
  width: 100%;
  background-color: #171717;
}
.foryouContainer h1 {
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
}
</style>
