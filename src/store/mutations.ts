import { Company, NavMenuItem } from "../components/types/unit-types";
import { GameState } from "./state";

export enum Mutations {
  SET_GAME_DIFFICULTY = "SET_GAME_DIFFICULTY",
  SET_ROSTER = "SET_ROSTER",
  SET_COMPANY = "SET_COMPANY",
  SET_NAV_ITEMS = "SET_NAV_ITEMS",
}

export const mutations = {
  [Mutations.SET_GAME_DIFFICULTY]: (state: GameState, payload: string) => {
    state.gameDifficulty = payload;
  },
  [Mutations.SET_COMPANY]: (state: GameState, payload: Company) => {
    state.company = payload;
  },
  [Mutations.SET_NAV_ITEMS]: (state: GameState, payload: NavMenuItem[]) => {
    state.navItems = payload;
  },
};
