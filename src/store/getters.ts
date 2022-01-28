import { NavMenuItem } from "../components/types/unit-types";
import { GameState } from "./state";

export const getters = {
  getNavItems: (state: GameState) => {
    return state.navItems;
  },
  getCompanyRoster: (state: GameState) => {
    return state.company;
  },
  getPlayerCredits: (state: GameState) => {
    return state.playerCredits;
  },
};
