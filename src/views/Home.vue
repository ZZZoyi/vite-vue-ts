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
    <el-button @click="handleShow(true)">显示组件</el-button>
    <el-button @click="handleShow(false)">隐藏组件</el-button>
    <Transition name="fade">
      <CustomDirectives v-show="show"></CustomDirectives>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect, inject, provide, h } from 'vue'
import { useFetch } from '../hooks/useFetch'
import CustomDirectives from '../components/CustomDirectives.vue'
import { messageInjectionKey } from '../symbols/homeKeys'

const count = ref(0)
const show = ref(false)
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
const handleShow = (boolean: boolean = false) => {
  show.value = boolean
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>