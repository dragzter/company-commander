import { createRouter, createWebHistory } from "vue-router";
import GameSettings from "./components/pages/GameSettings.vue";
import CompanyRoster from "./components/pages/CompanyRoster.vue";
import Home from "./components/pages/Home.vue";
import Missions from "./components/pages/Missions.vue";
import Provisions from "./components/pages/Provisions.vue";
import Recruitment from "./components/pages/RecruitmentForum.vue";
import GameMenu from "./components/pages/GameMenu.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import CompanyDetailView from "./components/pages/CompanyDetailView.vue";
import { SaveObjects } from "./components/types/enums";
import MissionScene from "./components/pages/MissionScene.vue";

import { MemoryLoader } from "./components/helpers/CompanyController";

const MEM_LOADER = new MemoryLoader();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/roster",
    name: "Roster",
    component: CompanyRoster,
  },
  {
    path: "/company",
    name: "CompanyView",
    component: CompanyDetailView,
  },
  {
    path: "/game-settings",
    name: "GameSettings",
    component: GameSettings,
    beforeEnter: (to: any, from: any, next: any) => {
      if (MEM_LOADER.itemInStorage(SaveObjects.COMPANY)) {
        next({ name: "Roster" });
      } else {
        next();
      }
    },
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
  {
    path: "/game-menu",
    name: "GameMenu",
    component: GameMenu,
  },
  {
    path: "/mission-scene",
    name: "MissionScene",
    component: MissionScene,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
