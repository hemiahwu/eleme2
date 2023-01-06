<template>
  <div class="home-component">
    <div class="header">
      <div class="address-map" @click="$router.push('/address')">
        <i class="fa fa-map-marker"></i>
        <span>{{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <div class="search-wrap" :class="{ ceiling: true }">
      <div class="shop-search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>

    <!-- 轮播+分类 -->
    <div id="container">
      <!-- 轮播 -->
      <van-swipe class="recommend" :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in swipeImages" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>

      <!-- 分类 -->
      <van-swipe class="categories">
        <van-swipe-item v-for="(category, index) in categories" :key="index">
          <div class="entries" v-for="(item, i) in category" :key="i">
            <div class="img-wrap">
              <img :src="item.image" alt="" />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 推荐商家 -->
    <div class="recommend-seller">推荐商家</div>

    <Navbar :navTab="navTab" />

    <div id="container" style="height: 2000px"></div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { useStore } from "../store/index";
import { computed, onMounted, ref } from "vue";
import axios from "../api/index";
import { Categories, NavTab, ScreenBy, SortBy } from "../types";

// ref
const swipeImages = ref<string[]>([]);
const categories = ref<Array<Categories[]>>([]);
const navTab = ref<NavTab[]>([]);
const screenBy = ref<ScreenBy[]>([]);
const sortBy = ref<SortBy[]>([]);

const store = useStore();

const address = computed(() => store.address);

// 钩子
onMounted(async () => {
  const res = await axios("/api/profile/shopping");
  swipeImages.value = res.data.swipeImgs;
  categories.value = res.data.entries;

  const res2 = await axios("/api/profile/filter");
  navTab.value = res2.data.navTab;
  screenBy.value = res2.data.screenBy;
  sortBy.value = res2.data.sortBy;
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

/* 轮播样式 */
.home-component .recommend .van-swipe-item {
  height: 100px;
}
.home-component .recommend .van-swipe-item img {
  width: 100%;
  height: 100px;
}

/* 商品分类样式 */
.home-component .categories {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.home-component .categories .entries {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.home-component .categories .entries .img-wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.home-component .categories .entries .img-wrap img {
  width: 100%;
  height: 100%;
}
.home-component .categories .entries span {
  display: block;
  color: #666;
  font-size: 0.7rem;
}

/* 推荐商家 */
.home-component .recommend-seller {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.home-component .recommend-seller:after,
.home-component .recommend-seller:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.home-component .recommend-seller:before {
  margin-right: 3.466667vw;
}
.home-component .recommend-seller:after {
  margin-left: 3.466667vw;
}

.home-component .ceiling {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
}
</style>
