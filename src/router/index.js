import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{ // 칠드런은 네임 생략가능
        path: "/",
        component: () =>
          import('../views/main/Main.vue')
      },
      {
        path: "/gallery",
        component: () =>
          import('../views/Gallery.vue')
      },
      {
        path: "/service",
        component: () =>
          import('../views/Services.vue')
      },

    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;