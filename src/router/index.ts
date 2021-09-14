import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/message",
    name: "Message",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "message" */ "@VIE/Message.vue"),
  },
  {
    path: "/service",
    name: "Service",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ "@VIE/Service.vue"),
  },
  {
    path: "/person",
    name: "Person",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "person" */ "@VIE/Person.vue"),
  },
];

// const router = new VueRouter({
//   routes,
// });

//将来每次用户请求都需要一个router 实例
export default function createRouter() {
  return new VueRouter({
    base: "/hcn-home-mobile/",
    mode: "history",
    routes,
  });
}
