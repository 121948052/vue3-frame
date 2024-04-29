<!--
 * @Author: Bug Router
 * @Date: 2024-04-25 13:56:20
 * @Description: Default
-->
<script setup>
import Menu from '@/components/Menu.vue'
</script>

<template>
  <a-layout>
    <a-layout-sider
      width="240"
      style="background: #fff"
    >
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <router-view #="{ Component }">
          <component :is="Component" />
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>