<template>
  <main
    class="navbar-component"
    :class="{ 'open-mask': isOpen || isScreen }"
    @click.self="hideMask"
  >
    <!-- 导航 -->
    <section v-if="navTab" class="content">
      <ul class="nav-items">
        <li
          class="nav-item"
          :class="{ active: currentIndex === i }"
          v-for="(nav, i) in navTab"
          :key="i"
          @click="handleChange(i)"
        >
          <span>{{ nav.name }}</span>
          <i v-if="nav.icon" :class="'fa fa-' + nav.icon"></i>
        </li>
      </ul>
    </section>
    <!-- 排序列表 -->
    <section class="sort-list" v-if="isOpen">
      <ul>
        <li @click="handleSelect(i, item)" v-for="(item, i) in sortBy" :key="i">
          <span :class="{ selectName: sortIndex === i }">{{ item.name }}</span>
          <i v-show="sortIndex === i" class="fa fa-check"></i>
        </li>
      </ul>
    </section>

    <!-- 筛选列表 -->
    <section class="screen-list" v-if="isScreen">
      <div class="screen-info">
        <article
          class="screen-item"
          v-for="(screen, index) in screenBy"
          :key="index"
        >
          <p>{{ screen.title }}</p>
          <ul>
            <li
              @click="handleScreen(condition, screen)"
              :class="{ selected: condition.select }"
              v-for="(condition, i) in screen.data"
              :key="i"
            >
              <img v-if="condition.icon" :src="condition.icon" alt="" />
              <span>{{ condition.name }}</span>
            </li>
          </ul>
        </article>
      </div>
      <div class="button-container">
        <button class="clear">清空</button>
        <button class="ok">确定</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Data, NavTab, ScreenBy, SortBy } from "../types";

const currentIndex = ref<number>(0);
const isOpen = ref<boolean>(false);
const sortIndex = ref<number>(1);
const isScreen = ref<boolean>(false);

const handleChange = (index: number) => {
  currentIndex.value = index;
  if (index == 0) {
    isScreen.value = false;
    isOpen.value = true;
    emits("handleCeiling", true);
  } else if (index == 3) {
    isOpen.value = false;
    isScreen.value = true;
    emits("handleCeiling", true);
  } else {
    emits("updateSorting", props.navTab[index].condition);
    hideMask();
  }
};

const handleSelect = (index: number, item: SortBy) => {
  sortIndex.value = index;

  //  更改综合排序title
  props.navTab[0].name = props.sortBy[index].name;

  emits("updateSorting", item.code);

  hideMask();
};

const hideMask = () => {
  isOpen.value = false;
  isScreen.value = false;
  emits("handleCeiling", false);
};

const handleScreen = (condition: Data, screen: ScreenBy) => {
  if (screen.id !== "MPI") {
    screen.data.forEach((item: Data) => {
      item.select = false;
    });
  }
  condition.select = !condition.select;
};

const props = defineProps<{
  navTab: NavTab[];
  sortBy: SortBy[];
  screenBy: ScreenBy[];
}>();

const emits = defineEmits(["handleCeiling", "updateSorting"]);
</script>

<style scoped>
.navbar-component {
  background: #fff;
  position: sticky;
  top: 54px;
  z-index: 10;
}
.navbar-component .content .nav-items {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 101;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.navbar-component .content .nav-items .nav-item {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.navbar-component .content .nav-items .nav-item i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}

.navbar-component .content .nav-items .active {
  font-weight: 600;
  color: #333;
}

/* 蒙版样式效果 */
.navbar-component.open-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* transition: all 0.3s ease-in-out; */
  z-index: 3;
}

/* 排序列表 */
.navbar-component.open-mask .sort-list {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
}
.navbar-component.open-mask .sort-list li {
  position: relative;
  padding-left: 5.333333vw;
  line-height: 10.666667vw;
  overflow: hidden;
}
.navbar-component.open-mask .sort-list .fa-check {
  float: right;
  color: #009eef;
  margin-right: 3.733333vw;
  line-height: 10.666667vw;
}

.navbar-component.open-mask .sort-list .selectName {
  color: #009eef;
}

/* 筛选 */
.navbar-component .screen-list {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
}
.navbar-component .screen-list .screen-info {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.navbar-component .screen-list .screen-info .screen-item {
  margin: 2.666667vw 0;
  overflow: hidden;
}
.navbar-component .screen-list .screen-info .screen-item .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.navbar-component .screen-list .screen-info .screen-item ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.navbar-component .screen-list .screen-info .screen-item li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.navbar-component .screen-list .screen-info .screen-item li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.navbar-component .screen-list .screen-info .screen-item li span {
  margin-left: 2%;
  vertical-align: middle;
}

.navbar-component .screen-list .button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.navbar-component .screen-list .button-container button {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.navbar-component .screen-list .button-container .clear {
  color: #ddd;
  background: #fff;
}
.navbar-component .screen-list .button-container .ok {
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}

.navbar-component .screen-list .selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}
</style>
