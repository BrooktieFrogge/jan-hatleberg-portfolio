import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Portfolio from "../pages/Portfolio.vue";
import StudentWork from "../pages/Contact.vue"; // (rename later if you actually have StudentWork.vue)

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/student-work", name: "student-work", component: StudentWork },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

