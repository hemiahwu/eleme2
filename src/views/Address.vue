<template>
  <div class="address-component">
    <Header :isLeft="true" title="选择地址" />
    <div class="city-search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
          {{ city }}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input
          type="text"
          v-model="searchValue"
          placeholder="小区/写字楼/学校等"
        />
      </div>
      <!-- 当前定位 -->
      <Location :address="address" @click="selectAddress(null)" />
    </div>
    <!-- 渲染搜索列表 -->
    <ul class="area" v-if="areaList">
      <li
        v-for="(item, index) in areaList"
        :key="index"
        @click="selectAddress(item)"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.district }} {{ item.address }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Header from "@/components/Header.vue";
import { useStore } from "../store/index";
import { useRouter } from "vue-router";
import _ from "lodash";
import Location from "@/components/Location.vue";
import { AreaList } from "../types";

// 属性
const searchValue = ref<string>("");
const store = useStore();
const router = useRouter();
const areaList = ref<AreaList[] | []>([]);

// 计算属性
const city = computed(() => store.city);
const address = computed(() => store.address);

// 方法
const selectAddress = (item: AreaList | null) => {
  item && store.handleAddress(item.district + item.address + item.name);
  !item && store.handleAddress(address.value);
  router.push("/home");
};

// 防抖优化
const debounced = _.debounce(() => {
  if (searchValue.value === "") {
    areaList.value = [];
    return;
  }
  const AMap = (window as any).AMap;
  // POI搜索
  AMap.plugin("AMap.AutoComplete", function () {
    var autoOptions = {
      //city 限定城市，默认全国
      city: city.value,
    };
    // 实例化AutoComplete
    var autoComplete = new AMap.AutoComplete(autoOptions);
    // 根据关键字进行搜索
    autoComplete.search(searchValue.value, (status: string, result: any) => {
      // 搜索成功时，result即是对应的匹配数据
      areaList.value = result.tips;
    });
  });
}, 500);
// 监听
watch(searchValue, debounced);
</script>

<style scoped>
.address-component {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}

.address-component .city-search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
  margin-top: 45px;
}
.address-component .search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.address-component .search .city {
  padding: 0 10px;
}
.address-component .city i {
  margin-right: 10px;
}
.address-component .search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.address-component .area {
  margin-top: 16px;
  background: #fff;
}
.address-component .area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.address-component .area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>
