<script setup lang="ts">
import { ref, reactive, computed, nextTick, onMounted, provide, readonly, defineAsyncComponent } from 'vue'
import Child from './Child.vue'

defineProps<{ msg: string }>()
const info = ref('hello')
const asyncCom = defineAsyncComponent({
  loader: () => import('./AsyncChild.vue'),
  delay: 3000
})
provide('msg', readonly(info))
const count = ref(0)
const state = reactive({count: 1, list: [1, 2]})
// const count = ref(0)
const obj = ref({
  arr: ['a', 'b']
})
const firstName = ref('liu')
const lastName = ref('zoyi')
const inputValue = ref(0)
const refChild = ref(null)
const isList = computed(() => {
  return state.list.length ? 'yes' : 'no'
})
const fullName = computed({
  get() {
    return firstName.value + lastName.value
  },
  set(val) {
    [firstName.value, lastName.value] = val.split(',')
  }
})
const removeList = () => {
  state.list = []
}
const setFullName = () => {
  fullName.value = 'admin,test'
}
const getVal = () => {
  console.log(inputValue.value)
}
const getChild = () => {
  console.log(refChild, 'refChild')
  console.log(refChild.value)
}
const handleUpdate = () => {
  console.log('触发子组件更新')
}
onMounted(() => {
  console.log('加载完成')
})
// const internalMethod = async () => {
//   obj.value.arr[0] = '将a改为1'
//   await nextTick()
//   console.log('dom更新完成')
// }
</script>

<template>
  <h1>{{ obj.arr[0] }}</h1>
  <h2>{{ isList }}</h2>
  <h2>{{ firstName }}</h2>
  <h2>{{ lastName }}</h2>
  <input v-model.number="inputValue" @change="getVal"/>
  <div class="card">
    <button type="button" @click="state.count ++">count is {{ state.count }}</button>
    <button type="button" @click="removeList">remove list</button>
    <button type="button" @click="setFullName">fullName</button>
    <button type="button" @click="getChild">获取子组件数据</button>
  </div>
  <Child ref="refChild" :msg="'传递信息'" @update:msg="handleUpdate"></Child>
  <asyncCom></asyncCom>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
