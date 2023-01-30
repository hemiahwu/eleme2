<template>
  <div class="search">
    <Header :isLeft="true" title="搜索" />
    <div class="search-header">
      <form class="search-wrap">
        <i class="fa fa-search"></i>
        <input type="text" v-model="keyword" placeholder="输入商家,商品信息" />
        <button>搜索</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
const keyword = ref<string>("");
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.search .search-header {
  margin-top: 45px;
  background: #fff;
  padding: 0 4.266667vw;
}
.search .search-header .search-wrap {
  padding: 2.933333vw 2.933333vw 2.933333vw 0;
  display: flex;
  align-items: center;
  position: relative;
}
.search .search-header .search-wrap .fa-search {
  width: 2.933333vw;
  height: 2.933333vw;
  color: #888;
  position: absolute;
  top: 4.6666666vw;
  left: 2.933333vw;
}
.search .search-header .search-wrap input {
  flex-grow: 1;
  border-radius: 0.266667vw;
  background-color: #f8f8f8;
  padding: 1.733333vw 4vw 1.733333vw 8.8vw;
  color: #666;
  outline: none;
  border: none;
}
.search .search-header .search-wrap button {
  outline: none;
  border: none;
  color: #333;
  font-size: 0.426667rem;
  background: #fff;
  font-weight: 700;
  margin-left: 2.933333vw;
  font-size: 14px;
}
</style>
