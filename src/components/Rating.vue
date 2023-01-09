<template>
  <div class="rating">
    <i class="fa" v-for="(r, i) in ratings" :key="i" :class="r"></i>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const LENGTH = 5;
const ON = "fa-star";
const HALF = "fa-star-half-empty";
const OFF = "fa-star-o";

const ratings = computed(() => {
  let result = [];

  // 4.3  4.5
  let score = Math.floor(props.rating * 2) / 2;

  // 半星
  let hasDecimal = score % 1 !== 0;

  // 全星
  let integer = Math.floor(score);

  //  全星放入数组
  for (let i = 0; i < integer; i++) {
    result.push(ON);
  }

  // 半星放入数组
  if (hasDecimal) {
    result.push(HALF);
  }

  // 补齐
  while (result.length < LENGTH) {
    result.push(OFF);
  }

  return result;
});

const props = defineProps<{
  rating: number;
}>();
</script>

<style scoped>
.rating {
  margin-right: 1.066667vw;
  color: #ffbe00;
  display: inline-block;
}
</style>
