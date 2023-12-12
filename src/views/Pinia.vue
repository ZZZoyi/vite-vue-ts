<template>
  <div>
    <el-input v-model="counter.count"></el-input>
    <el-input v-model="counter.double"></el-input>
    <el-button @click="counter.increment()">加加</el-button>
    <el-input v-model="count"></el-input>
    <el-button @click="handleReset">重置countStore</el-button>
  </div>
</template>

<script setup lang="ts">
  import useCountStore from '@/store/modules/count'
  import { storeToRefs } from 'pinia'
  const counter = useCountStore()
  // 直接解构破坏响应性
  // const { count } = useCountStore()

  const { count } = storeToRefs(useCountStore())
  const handleReset = () => {
    counter.$reset()
  }
</script>

<style scoped></style>
