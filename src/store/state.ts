import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Company, NavMenuItem } from "../components/types/unit-types";
import { homeNav, gameSettingsNav } from "../components/helpers/constants";

export interface GameState {
  navItems: NavMenuItem[];
  gameDifficulty: string;
  playerCredits: number;
  company: Company;
}

const store = createStore({
  state: {
    navItems: [homeNav, gameSettingsNav],
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
