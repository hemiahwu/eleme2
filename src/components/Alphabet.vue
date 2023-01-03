<template>
  <!-- 渲染城市列表 -->
  <div class="alphabet-component" v-if="cities">
    <div class="scroll-wrap">
      <!-- 热门城市 -->
      <div class="hot-wrap">
        <div class="title">热门城市</div>
        <ul class="hot-city cityList">
          <li
            @click="$emit('selectCity', item.name)"
            v-for="(item, index) in cities.hotCities"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- 所有城市(根据字母排序的城市) -->
      <div class="city-wrap">
        <div
          class="city-content cityList"
          v-for="(key, i) in cityNames"
          :key="i"
        >
          <div class="title">{{ key }}</div>
          <ul>
            <li
              @click="$emit('selectCity', city.name)"
              v-for="(city, index) in cities[key]"
              :key="index"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 字母表 -->
    <div class="area-keys">
      <ul>
        <li @click="selectKey(0)">#</li>
        <li
          @click="selectKey(index + 1)"
          v-for="(key, index) in cityNames"
          :key="index"
        >
          {{ key }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import BScroll from "better-scroll";
import { onMounted } from "vue";
import { Cities } from "../types";

onMounted(() => {
  new BScroll(".alphabet-component", {
    scrollY: true,
    click: true,
    probeType: 3,
    observeDOM: true,
  });
});

// 方法
const selectKey = (index: number) => {
  //   console.log(index);
  const cityList = document.getElementsByClassName("cityList");
  let element = cityList[index];

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

defineProps<{
  cities: Cities;
  cityNames: string[];
}>();
</script>

<style scoped>
.alphabet-component {
  box-sizing: border-box;
  padding: 0 16px;
  background: #fff;
  height: calc(100% - 65px);
  overflow: hidden;
}
.alphabet-component .scroll-wrap {
  background: #fff;
  overflow: auto;
}
.alphabet-component .title {
  color: #aaa;
  padding: 15px 0;
}
.alphabet-component .hot-city {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.alphabet-component .hot-city li {
  width: 30%;
  background: #f1f1f1;
  margin: 0 10px 10px 0;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

.alphabet-component .city-content li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.alphabet-component .area-keys {
  position: fixed;
  right: 0;
  top: 25%;
  color: #aaa;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  padding: 0 5px;
}
</style>
