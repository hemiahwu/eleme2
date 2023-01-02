<template>
  <div class="location-component">
    <div class="title">当前定位</div>
    <div class="des">
      <i class="fa fa-location-arrow"></i>
      <span>{{ address }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  address: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.location-component .title {
  margin: 10px 0;
  font-size: 12px;
}
.location-component .des i {
  color: #009eef;
}
.location-component .des span {
  color: #333;
  font-weight: bold;
  margin-left: 5px;
  display: inline-block;
  width: 90%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
