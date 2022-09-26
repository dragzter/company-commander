import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Company, NavMenuItem } from "../components/types/unit-types";
import { Mission } from "../components/types/types";

export interface GameState {
  navItems: NavMenuItem[];
  gameDifficulty: string;
  playerCredits: number;
  company: Company;
  missions: Mission[];
  selectedMission: Mission;
  payoutBonus: number;
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
    missions: [] as Mission[],
    selectedMission: {} as Mission,
    payoutBonus: 200,
  },
  actions: { ...actions },
  getters: { ...getters },
  mutations: { ...mutations },
});

export default store;
