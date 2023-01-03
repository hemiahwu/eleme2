<template>
  <main class="navbar-component">
    <section v-if="navTab" class="content">
      <ul class="nav-items">
        <li class="nav-item" v-for="(nav, i) in navTab" :key="i">
          <span>{{ nav.name }}</span>
          <i v-if="nav.icon" :class="'fa fa-' + nav.icon"></i>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { NavTab } from "../types";

defineProps<{
  navTab: NavTab[];
}>();
</script>

<style scoped>
.navbar-component .content {
  background: #fff;
  position: sticky;
  top: 54px;
  z-index: 10;
}
.navbar-component .content .nav-items {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 101;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.navbar-component .content .nav-items .nav-item {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.navbar-component .content .nav-items .nav-item i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}
</style>
