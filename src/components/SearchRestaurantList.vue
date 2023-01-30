<template>
  <ul class="restaurant-list">
    <li v-for="(restaurant, index) in searchRestaurants" :key="index">
      <img :src="restaurant.image_path" alt="" />
      <div class="restaurant-item">
        <span class="title">{{ restaurant.name }}</span>
        <span class="rating">{{ restaurant.rating }}</span>
      </div>
    </li>
    <li v-for="(word, index) in words" :key="index">
      <i class="fa fa-search"></i>
      <div class="restaurant-item">
        <span class="title">{{ word }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { SearchRestaurants } from "../types/restaurantType";

defineProps<{
  searchRestaurants: SearchRestaurants[];
  words: string[];
}>();
</script>

<style scoped>
.restaurant-list {
  background: #fff;
  width: 100%;
  height: calc(100% - 95px);
  overflow: auto;
}
.restaurant-list li {
  padding: 0 4.266667vw;
  display: flex;
  height: 13.933333vw;
  align-items: center;
}
.restaurant-list li img {
  width: 6.4vw;
  height: 6.4vw;
  margin-right: 4.266667vw;
  border-radius: 0.133333vw;
}
.restuarant-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 13.933333vw;
  border-bottom: 1px solid #e3e3e3;
}
.restuarant-item .title {
  display: inline-block;
  max-width: 56vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.888rem;
  color: #333;
  margin-right: 0.8vw;
}
.restuarant-item .rating {
  color: #999;
  font-size: 0.8rem;
}

.restaurant-list li i {
  margin-right: 4.266667vw;
  color: #888;
}
</style>
