<template>
  <div class="city-component">
    <div class="search-wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="输入城市名" v-model="cityValue" />
      </div>
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div v-if="searchList.length === 0">
      <div class="location">
        <Location :address="city" />
      </div>
      <Alphabet
        @selectCity="handleSelectCity"
        :cities="cities"
        :cityNames="cityNames"
      />
    </div>
    <ul class="search-list" v-else>
      <li
        @click="handleSelectCity(item.name)"
        v-for="(item, index) in searchList"
        :key="index"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";
import Location from "@/components/Location.vue";
import Alphabet from "@/components/Alphabet.vue";
import { useStore } from "../store/index";
import axios from "../api/index";
import { useRouter } from "vue-router";
import _ from "lodash";

// 属性
const cityValue = ref<string>("");
const store = useStore();
const router = useRouter();
const cities = ref({});
const cityNames = ref<string[]>([]);
const searchList = ref<cityType[]>([]);
const allCities = ref<cityType[]>([]);

// 计算属性
const city = computed(() => store.city);

// 钩子函数
onMounted(() => {
  getCityData();
});

// 方法
const handleSelectCity = (name: string) => {
  store.handleCity(name);
  // 跳转
  router.push("/address");
};
const getCityData = async () => {
  const res = await axios("/api/posts/cities");
  cities.value = res.data;

  // key和value进行拆分
  cityNames.value = Object.keys(res.data);
  cityNames.value.pop();
  cityNames.value.sort();

  // 整合城市名字
  cityNames.value.forEach((key) => {
    (cities.value as citiesType)[key].forEach((city: cityType) => {
      allCities.value.push(city);
    });
  });
};

// 监听
const debounced = _.debounce(() => {
  if (!cityValue.value) {
    searchList.value = [];
  } else {
    // 如果不为空,那就将包含对应值的内容过滤出来
    searchList.value = allCities.value.filter((city: cityType) => {
      return city.name.indexOf(cityValue.value) != -1;
    });
  }
}, 500);
watch(cityValue, debounced);

interface citiesType {
  [_: string]: Array<cityType>;
}

interface cityType {
  abbr: string;
  area_code: string;
  id: number;
  is_map: boolean;
  latitude: number;
  longitude: number;
  name: string;
  pinyin: string;
  sort: number;
}
</script>
<style scoped>
.city-component {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.city-component .search-wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
}
.city-component .search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.city-component .search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search-wrap button {
  outline: none;
  color: #009eef;
}
.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.city-component .search-list {
  background: #fff;
  padding: 5px 16px;
}
.city-component .search-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
