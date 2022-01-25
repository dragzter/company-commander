import { createRouter, createWebHistory } from "vue-router";
import GameSettings from "./components/pages/GameSettings.vue";
import RosterSetup from "./components/pages/RosterSetup.vue";

const routes = [
  {
    path: "/",
    name: "GameSettings",
    component: GameSettings,
  },
  {
    path: "/roster",
    name: "Roster",
    component: RosterSetup,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
