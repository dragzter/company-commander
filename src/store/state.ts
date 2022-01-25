import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export interface GameState {
  companyInfo: {
    name: string;
    type: string;
  };
  gameDifficulty: string;
  roster: any[];
}

const store = createStore({
  state: {
    companyInfo: {
      name: "unknown",
      type: "unknown",
    },
    gameDifficulty: "easy",
    roster: [],
  },
  actions: { ...actions },
  getters: { ...getters },
  mutations: { ...mutations },
});

export default store;
