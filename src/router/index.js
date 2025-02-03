import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "../views/IndexPage.vue";
import SinglePage from "../views/SinglePage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: IndexPage,
    },
    {
      path: "/single",
      component: SinglePage,
    },
    {
      name: "travels",
      path: "/single/:id",
      component: SinglePage,
    },
  ],
});

export default router;
