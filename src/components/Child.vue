<template>
  <div @click.self="handleClick">
    这里是子组件
    <button @click="handleFetch">调用接口</button>
    <div>{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useFetch } from '../hooks/useFetch.ts'

const props = defineProps({
  msg: String
})

const url = ref('https://jsonplaceholder.typicode.com/todos/1')

const { data, error } = useFetch(url.value)
console.log(data.value, 'data')
const emit = defineEmits(['update:msg'])
const a = 'a'
// console.log(a)
// console.log(props.msg)
const message = inject('msg', ref(''))
// console.log(message?.value, 'message')
const handleClick = () => {
  message.value = '更改数据'
  console.log(message.value, 'message')
  emit('update:msg')
}

const handleFetch = () => {
  console.log(data.value, error.value)
}

defineExpose({
  a
})
</script>

<style scoped>

</style>