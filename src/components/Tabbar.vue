<template>
  <div class="tabbar-component">
    <router-link
      class="tab-item"
      v-for="(item, index) in data"
      :key="index"
      :to="item.path"
      active-class="is-selected"
    >
      <div class="tab-item-icon">
        <i :class="'fa fa-' + item.icon"></i>
      </div>
      <div class="tab-item-label">{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
interface tabbarDataProps {
  title: string;
  icon: string;
  path: string;
}

defineProps<{ data: tabbarDataProps[] }>();
</script>

<style scoped>
.tabbar-component {
  height: 45px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #fafafa;
  display: flex;
  text-align: center;
}
.tabbar-component .tab-item {
  display: block;
  padding: 3px 0;
  flex: 1;
}
.tabbar-component .tab-item-icon {
  width: 20px;
  height: 20px;
  margin: 0 auto 5px;
}
.tabbar-component .tab-item-icon i {
  font-size: 16px;
}
.tabbar-component .tab-item-label {
  color: inherit;
  font-size: 10px;
  line-height: 1;
}
.tabbar-component a {
  text-decoration: none;
  color: #999;
}
.tabbar-component .is-selected {
  color: #009eef;
}
</style>
