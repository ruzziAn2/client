import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import ExploreView from "../layouts/exploreView.vue";
import LandingView from "../layouts/LandingView.vue";
import HomeView from "../views/Explore/HomeView.vue";
import RegisterView from "../views/Landing/RegisterView.vue";
import LoginView from "../views/Landing/LoginView.vue";
import IndexView from "../views/Landing/IndexView.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingView,
    children: [
      {
        path: "",
        name: "Index",
        component: IndexView,
      },
      {
        // /home/register
        path: "register",
        name: "Register",
        component: RegisterView,
      },
      {
        // /home/register
        path: "login",
        name: "Login",
        component: LoginView,
      },
    ],
    BeforeEnter: (to, from, next) => {
      if (Cookies.get("token")) {
        window.location.href = "/explore";
      } else {
        next();
      }
    },
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
    children: [{ path: "", name: "Home", component: HomeView }],
    BeforeEnter: (to, from, next) => {
      if (!Cookies.get("token")) {
        window.location.href = "/";
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
