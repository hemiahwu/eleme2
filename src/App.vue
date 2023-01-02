<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "./store/index";

// 属性实例化
const AMap = (window as any).AMap;
const store = useStore();

// http://localhost:5173/home
// https://localhost:5173/login
// 初始定位
onMounted(() => {
  getLocation();
});

const getLocation = () => {
  AMap.plugin("AMap.Geolocation", function () {
    var geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 2000,
    });

    geolocation.getCurrentPosition(function (status: string, result: any) {
      if (status == "complete") {
        // 精准定位成功
        onComplete(result);
      } else {
        // 定位失败
        onError(result);
      }
    });

    function onComplete(data: any) {
      // 火狐可以正常精准定位
      getLngLatLocation([data.position.lng, data.position.lat]);
    }

    function onError(data: any) {
      // 定位出错
      getIPLocation();
    }
  });
};

const getIPLocation = () => {
  AMap.plugin("AMap.CitySearch", function () {
    var citySearch = new AMap.CitySearch();
    citySearch.getLocalCity(function (status: string, result: any) {
      if (status === "complete" && result.info === "OK") {
        // 查询成功，result即为当前所在城市信息
        getLngLatLocation(result.rectangle.split(";")[0].split(","));
      }
    });
  });
};

const getLngLatLocation = (lnglat: string[]) => {
  AMap.plugin("AMap.Geocoder", function () {
    var geocoder = new AMap.Geocoder({
      // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
      city: "全国",
    });

    geocoder.getAddress(lnglat, function (status: string, result: any) {
      if (status === "complete" && result.info === "OK") {
        // result为对应的地理位置详细信息
        // console.log(result);
        // console.log(result.regeocode.formattedAddress);
        // console.log(result.regeocode.addressComponent.city);

        store.handleCity(result.regeocode.addressComponent.city);
        store.handleAddress(result.regeocode.formattedAddress);
      }
    });
  });
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>
