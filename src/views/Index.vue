<template>
  <div class="index">
    <router-view></router-view>
    <Tabbar :data="tabbarData" />
  </div>
</template>

<script setup lang="ts">
import Tabbar from "@/components/Tabbar.vue";
import { ref } from "vue";

const tabbarData = ref([
  {
    icon: "home",
    title: "首页",
    path: "/home",
  },
  {
    icon: "file-text-o",
    title: "订单",
    path: "/order",
  },
  {
    icon: "user",
    title: "我的",
    path: "/me",
  },
]);
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
