<template>
  <div>
    <input v-focus />
    <div v-color.border="color">测试文字</div>
    <h1>{{ $translate('hello') }}</h1>
    <h1>greetings.hello</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, DirectiveBinding } from 'vue'
const vFocus = {
  mounted: (el: HTMLInputElement) => {
    el.focus()
  }
}


// 指令钩子函数
// const myDirective = {
//   created(el, binding, vnode, prevVnode) { },
//   beforeMounted(el, binding, vnode, prevVnode) { },
//   mounted(el, binding, vnode, prevVnode) { },
//   beforeUpdate(el, binding, vnode, prevVnode) { },
//   updated(el, binding, vnode, prevVnode) { },
//   beforeUnmounted(el, binding, vnode, prevVnode) { },
//   unmounted(el, binding, vnode, prevVnode) { }
// }

/**
 * el：指令绑定到的元素。这可以用于直接操作 DOM。
 * binding：一个对象，包含以下属性。
 *  value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
 *  oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
 *  arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
 *  modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
 *  instance：使用该指令的组件实例。
 *  dir：指令的定义对象。
 * vnode：代表绑定元素的底层 VNode。
 * prevNode：代表之前的渲染中指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。
 */
const vColor = {
  mounted: (el:HTMLElement, binding: DirectiveBinding) => {
    const { value, arg, modifiers } = binding
    const style: CSSStyleDeclaration = el.style 
    style.color = value
    console.log(arg, 'arg')
    console.log(modifiers, 'modifiers')
  }
}

const color = ref('red')
</script>

<style scoped>

</style>