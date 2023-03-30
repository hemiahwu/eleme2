<template>
  <div class="shop">商家信息</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "../../api/index";

const rst = ref({});

onMounted(async () => {
  const res = await axios.get("/api/profile/batch_shop");
  rst.value = res.data.rst;
  console.log(rst.value);
});
</script>

<style></style>
