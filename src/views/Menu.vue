<template>
  <div>
    <el-button type="primary" @click="toggleMenu" :icon="isCollapse ? ArrowRight : ArrowLeft">
    </el-button>
    <el-menu
      default-active="000"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <template v-for="(item, ind) in menuList">
        <el-sub-menu v-if="Array.isArray(item.children) && item.children.length" :key="item.id" :index="item.id">
          <template #title>
            <el-icon>
              <component :is="IconMenu"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.id" :index="child.id">
            {{ child.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="item.id + ind" :index="item.id">
          <el-icon>
            <component :is="IconMenu"></component>
          </el-icon>
          <template #title>
            {{ item.title }}
          </template>
        </el-menu-item>
      </template>
      
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowLeft,
  ArrowRight,
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const menuList = ref([
  {
    id: '000',
    title: 'Home'
  },
  {
    id: '100',
    title: '组合式函数'
  },
  {
    id: '200',
    title: '未更新功能',
    children: [{
      id: '201',
      title: '未知功能'
    }]
  }
])

const toggleMenu = () => {
  isCollapse.value = !isCollapse.value
}

</script>

<style scoped lang="sass">
.el-menu-vertical-demo:not(.el-menu--collapse)
  width: 200px
  height: 100%
</style>