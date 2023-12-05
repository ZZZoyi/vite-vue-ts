<script setup lang="ts">
import Menu from './views/Menu.vue'
</script>

<template>
  <div class="content">
    <div class="menu">
      <Menu></Menu>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="sass">
.content
  display: flex
  width: 100%
  height: 100%
.menu
  height: 100%
.view
  flex: 1
  height: 100%
</style>
