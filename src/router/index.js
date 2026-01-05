import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Portfolio from "../pages/Portfolio.vue";
import StudentWork from "../pages/Contact.vue";


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/portfolio", name: "portfolio", component: Portfolio },
    { path: "/student-work", name: "student-work", component: StudentWork },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
