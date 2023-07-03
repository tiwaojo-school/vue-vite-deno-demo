import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  //   {
  //     path: "/codemirror-easter-egg",
  //     name: "easter-egg",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/EasterEgg.vue"),
  //   },
  {
    path: "/:dinosaur",
    component: () => import("../components/Dinosaur.vue"),
    props:true,
    name: "Dinosaur",
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(/*process.env.BASE_URL*/),
  routes,
});

export default router;
