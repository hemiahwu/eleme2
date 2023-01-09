<template>
  <section class="restaurant-component">
    <div class="restaurant-info" v-for="(item, i) in restaurants" :key="i">
      <div class="restaurant-logo">
        <img
          src="https://fuss10.elemecdn.com/0/f7/26f44c0fef6afc5a5adf9b8b3f968jpeg.jpeg"
          alt=""
        />
      </div>
      <div class="restaurant-content">
        <!-- 1 品牌 -->
        <div class="restaurant-name">
          <i>品牌</i>
          <span>杨国福麻辣烫</span>
        </div>
        <!-- 2 星级 -->
        <div class="restaurant-items">
          <div>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <span class="rate">4.6</span>
            <span>月售4145单</span>
          </div>
          <div class="special-delivery" v-if="true">
            <span class="icon-hollow">蜂鸟专送</span>
          </div>
        </div>
        <!-- 3 配送 -->
        <div class="restaurant-delivery">
          <div>
            <span class="delivery-fee">¥ 20 起送</span>
            <span>配送费 ¥2.5</span>
          </div>
          <div class="distance">
            <span> 2.14 km</span>
            |
            <span>47分钟</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RestaurantType } from "../types/restaurantType";

defineProps<{
  restaurants: RestaurantType[];
}>();
</script>

<style scoped>
.restaurant-component .restaurant-info {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 4vw 2vw;
  background: #fff;
  color: #666;
  border-bottom: 0.133333vw solid #eee;
}
.restaurant-component .restaurant-info:last-child {
  padding-bottom: 45px;
}
.restaurant-component .restaurant-logo {
  width: 17.333333vw;
  height: 17.333333vw;
}
.restaurant-component .restaurant-logo img {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
  border-radius: 0.533333vw;
}
.restaurant-component .restaurant-content {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  flex-direction: column;
  padding-left: 2.666667vw;
  font-size: 0.66rem;
  flex-grow: 1;
}
.restaurant-component .restaurant-name {
  align-items: center;
  color: #333;
  font-weight: 700;
  font-size: 0.9rem;
}
.restaurant-component .restaurant-name i {
  background: #ffe800;
  margin-right: 1.333333vw;
  padding: 0.266667vw 0.666667vw;
  text-align: center;
  white-space: nowrap;
  font-size: 0.6rem;
}
.restaurant-component .restaurant-name span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.restaurant-component .restaurant-items {
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
}

.restaurant-component .restaurant-items .rate {
  margin-right: 1.066667vw;
}
.restaurant-component .restaurant-delivery {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.restaurant-component .restaurant-delivery .delivery-fee {
  margin-right: 4px;
}

.restaurant-component .restaurant-delivery .distance {
  color: #999;
}
.restaurant-component .special-delivery {
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-left: 1.066667vw;
}
.restaurant-component .special-delivery .icon-hollow {
  color: #fff;
  background-color: #2395ff;
  padding: 2px;
  box-sizing: border-box;
}

.restaurant-component .rating {
  margin-right: 1.066667vw;
  color: #ffbe00;
  display: inline-block;
}
</style>
