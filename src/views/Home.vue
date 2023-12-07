<template>
  <div>
    <el-button>这里是home页面</el-button>
    <el-button @click="handleCount">打印count</el-button>
    <div v-if="error">异常: {{ error }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
    <CustomDirectives></CustomDirectives>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect, inject, provide } from 'vue'
import { useFetch } from '../hooks/useFetch'
import CustomDirectives from '../components/CustomDirectives.vue'
import { messageInjectionKey } from '../symbols/homeKeys'

const count = ref(0)
const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1')

provide(messageInjectionKey, data)

const sysConfig = inject('sysConfig')
console.log(sysConfig, 'sysConfig')

watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

watchEffect(() => {
  console.log(count.value, 'count')
})

const handleCount = () => {
  count.value ++
}
</script>

<style scoped>

</style>