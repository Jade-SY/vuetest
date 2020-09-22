import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import playground from "../views/playground.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/play",
  //   name: "play",
  //   component: playground
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/play",
    name: "play",
    component: () =>
      import("../views/playground.vue")
  },
  {
    path: "/for",
    name: "Forif",
    component: () =>
      import("../views/ForIf.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import("../views/list.vue")
  },
  {
    path: "/event",
    name: "Event",
    component: () =>
      import("../views/Event.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;