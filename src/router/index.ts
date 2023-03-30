import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "/home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/order",
        component: () => import("@/views/Order.vue"),
      },
      {
        path: "/me",
        component: () => import("@/views/Me.vue"),
      },
      {
        path: "/address",
        component: () => import("@/views/Address.vue"),
      },
      {
        path: "/city",
        component: () => import("@/views/City.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/goods",
    component: () => import("@/views/Goods.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.token ? true : false;

  if (to.path === "/login") {
    next();
  } else {
    token ? next() : next("/login");
  }
});

export default router;
