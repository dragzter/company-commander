import { createRouter, createWebHistory } from "vue-router";
import GameSettings from "./components/pages/GameSettings.vue";
import CompanyRoster from "./components/pages/CompanyRoster.vue";
import Home from "./components/pages/Home.vue";
import Missions from "./components/pages/Missions.vue";
import Provisions from "./components/pages/Provisions.vue";
import Recruitment from "./components/pages/RecruitmentForum.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/roster",
    name: "Roster",
    component: CompanyRoster,
  },
  {
    path: "/game-settings",
    name: "GameSettings",
    component: GameSettings,
  },
  {
    path: "/missions",
    name: "Missions",
    component: Missions,
  },
  {
    path: "/recruitment",
    name: "Recruitment",
    component: Recruitment,
  },
  {
    path: "/provisions",
    name: "Provisions",
    component: Provisions,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
