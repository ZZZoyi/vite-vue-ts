<template>
  <div>
    异步子组件
    <button @click="getPoint"></button>
    <div>当前鼠标位置为x：{{ point.x }}y：{{ point.y }}</div>
    <div>当前鼠标位置为x：{{ copyPoint.x }}y：{{ copyPoint.y }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue'
import { useMouse } from '../hooks/useMouse.ts'

const point = reactive({
  x: 0,
  y: 0
})

const copyPoint = useMouse()
const updatePoint = (e: MouseEvent) => {
  point.x = e && e.pageX
  point.y = e && e.pageY
}

const getPoint = () => {
  console.log(point, 'point')
}

onMounted(() => {
  window.addEventListener('mousemove', updatePoint)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePoint)
})

</script>

<style scoped>

</style>