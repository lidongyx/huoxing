import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import Contact from "./views/Contact.vue"
import Sort from "./views/Sort.vue"
import Special from "./views/Special.vue"
import Subsort from "./views/Subsort.vue"
const routes = [
  { path: '/', name: "首页", component: Home },
  { path: '/contact', name: "联系", component: Contact },
  { path: '/sort',  name: "分类",component: Sort },
  { path: '/special',  name: "特约",component: Special },
  { path: '/detail',  name: "详情",component: Subsort },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;