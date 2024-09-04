<script setup>
import everydayGift from '@/components/everydayGift.vue'
import foryou from '@/components/foryou.vue'
import explore from '@/components/explore.vue'
import theFooter from '@/components/theFooter.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'

const bgColor = ref('#171717') // 初始背景色
const scrollContainer = ref(null)

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop
  // 假设页面滚动范围为0到1000px，可以根据实际情况调整
  const maxScroll = 1000
  const scrollFraction = scrollTop / maxScroll
  // 计算渐变色，这里以黑到白的渐变为例
  const r = Math.min(255, Math.round(23 + 232 * scrollFraction))
  const g = Math.min(255, Math.round(23 + 232 * scrollFraction))
  const b = Math.min(255, Math.round(23 + 232 * scrollFraction))
  bgColor.value = `rgb(${r}, ${g}, ${b})`
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style></style>

<template>
  <div
    class="container"
    :style="{ backgroundColor: bgColor }"
    ref="scrollContainer"
  >
    <everydayGift />
    <foryou />
    <explore />
    <theFooter />
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 100px);

  margin-left: 100px;
  margin-top: 60px;
  /* 允许内容垂直滚动 */
  height: 2000px;
  background: #171717;
  color: white;
  display: flex;
  flex-direction: column;
}
</style>
