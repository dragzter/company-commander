import { createRouter, createWebHistory } from "vue-router";
import GameSettings from "./components/pages/GameSettings.vue";
import CompanyRoster from "./components/pages/CompanyRoster.vue";
import Home from "./components/pages/Home.vue";
import Missions from "./components/pages/Missions.vue";
import Provisions from "./components/pages/Provisions.vue";
import Recruitment from "./components/pages/RecruitmentForum.vue";
import GameMenu from "./components/pages/GameMenu.vue";
import CompanyDetailView from "./components/pages/CompanyDetailView.vue";
import { itemInStorage } from "./components/helpers/save-game";
import { SaveObjects } from "./components/types/enums";

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
    path: "/company",
    name: "CompanyView",
    component: CompanyDetailView,
  },
  {
    path: "/game-settings",
    name: "GameSettings",
    component: GameSettings,
    beforeEnter: (to: any, from: any, next: any) => {
      if (itemInStorage(SaveObjects.COMPANY)) {
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
