import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Company, NavMenuItem } from "../components/types/unit-types";

export interface GameState {
  navItems: NavMenuItem[];
  gameDifficulty: string;
  playerCredits: number;
  company: Company;
}

const store = createStore({
  state: {
    navItems: [],
    playerCredits: 500,
    gameDifficulty: "easy",
    company: {
      infantry: [],
      companyName: "",
      dateOfCreation: "",
    },
  },
  actions: { ...actions },
  getters: { ...getters },
  mutations: { ...mutations },
});

export default store;
