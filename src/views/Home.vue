<template>
  <div class="home-component">
    <div class="header">
      <div class="address-map" @click="$router.push('/address')">
        <i class="fa fa-map-marker"></i>
        <span>{{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
      <div class="shop-search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store/index";
import { computed, onMounted, ref } from "vue";
import axios from "../api/index";

// ref
const swipeImages = ref<string[]>([]);
const categories = ref<any>([]);

const store = useStore();

const address = computed(() => store.address);

// 钩子
onMounted(async () => {
  const res = await axios("/api/profile/shopping");
  swipeImages.value = res.data.swipeImgs;
  categories.value = res.data.entries;

  console.log(swipeImages, categories);
});
</script>

<style scoped>
.home-component {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.home-component .header,
.home-component .search-wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.home-component .header .address-map {
  color: #fff;
  font-weight: bold;
}
.home-component .address-map i {
  margin: 0 3px;
  font-size: 18px;
}
.home-component .address-map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.home-component .shop-search {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.home-component .search-wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
}
</style>
