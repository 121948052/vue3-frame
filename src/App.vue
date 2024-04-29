<script setup>
import { useIsLoginStoreHook } from "@/store/modules/global";
import MainFrameView from '@/views/MainFrame/MainFrameView.vue'
</script>
<template>
  <MainFrameView v-if="useIsLoginStoreHook().isLogin" />
  <router-view
    v-if="!useIsLoginStoreHook().isLogin"
    #="{ Component }"
  >
    <component :is="Component" />
  </router-view>
</template>