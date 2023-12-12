import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Download from "@/views/DownloadView.vue";
import Unscramble from "@/views/Unscramble.vue";
import DLUnscrambled from "@/views/downloadUnscrambled.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loading",
    name: "loading",
    component: () => import("../views/LoadingView.vue"),
  },
  {
    path: "/download/:data",
    name: "download",
    component: Download,
    props: true
  },
  {
    path: "/unscramble",
    name: "unscramble",
    component: Unscramble
  },
  {
    path: "/dl-unscrambled/:data",
    name: "dl-unscrambled",
    props: true,
    component: DLUnscrambled
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
