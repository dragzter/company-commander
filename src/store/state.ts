import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Company } from "../components/types/unit-types";

export interface GameState {
  companyInfo: {
    name: string;
    type: string;
  };
  gameDifficulty: string;
  company: Company;
}

const store = createStore({
  state: {
    companyInfo: {
      name: "unknown",
      type: "unknown",
    },
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
