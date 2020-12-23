import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue"
import Home from "../views/Home.vue"
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  routes
});

export default router;
