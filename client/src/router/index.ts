import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Dashboard.vue";
import Dashboard from "@/views/Dashboard.vue";
import Settings from "@/views/Settings.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
