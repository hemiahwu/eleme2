<template>
  <div class="header-component">
    <div class="header-button is-left" v-show="isLeft">
      <i class="fa fa-chevron-left"></i>
      <button @click="$router.go(-1)">返回</button>
    </div>
    <div class="header-title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isLeft: boolean;
}>();
</script>

<style scoped>
.header-component {
  align-items: center;
  background-color: #009eef;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 45px;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  position: fixed;

  width: 100%;
  top: 0;
  z-index: 99;
}
.header-component .header-button button {
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  display: inline-block;
  padding: 0;
  font-size: inherit;
  outline: none;
}
.header-component .header-title {
  flex: 1;
}
.header-component .is-left {
  text-align: left;
}
</style>
