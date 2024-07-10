<script setup>
import exploreClass from '@/components/exploreClass.vue'
import exploreCard from '@/components/exploreCard.vue'
</script>

<template>
  <div class="exploreContainer">
    <div class="exploreHeader">
      <h1>发现</h1>
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
      <exploreClass />
    </div>
    <div class="exploreMain">
      <exploreCard />
      <exploreCard />
      <exploreCard />
    </div>
  </div>
</template>

<style>
.exploreMain {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  background-color: #171717;
}
.exploreHeader {
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #171717;
}
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
  font-size: 40px;
}
</style>
