<template>
  <button class="classButton">wuhu</button>
</template>

<script setup></script>

<style>
.classButton {
  margin-top: 15px;
  margin-left: 10px;
  padding: 0 10px;
  height: 30px;
  background-color: #323232;
  border-radius: 5px;
  border: none;
  color: #7a7a7b;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.classButton:hover {
  background-color: #7a7a7b;
  color: #323232;
}
</style>
