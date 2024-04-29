<!--
 * @Author: Bug Router
 * @Date: 2024-04-26 14:41:51
 * @Description: Default
-->
<script setup>
import { menuRouter } from '@/router/routers'
defineOptions({
  name: "MenuBox"
})
const handleClick = ({ item, key, keyPath }) => {
  console.log(item, key, keyPath)
}
</script>

<template>
  <a-menu
    mode="inline"
    @click="handleClick"
    :inline-collapsed="collapsed"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <a-sub-menu key="sub1">
      <template #title>Excel</template>
      <a-menu-item-group key="g1">
        <a-menu-item
          v-for="r in menuRouter"
          :key="r.path"
        >
          <router-link :to="r.path">{{  r.name }}</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</template>
