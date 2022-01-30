import { NavMenuItem } from "../components/types/unit-types";
import { Mutations } from "./mutations";
import { GameState } from "./state";

export enum Getters {
  GET_NAV_ITEMS = "GET_NAV_ITEMS",
  GET_COMPANY_ROSTER = "GET_COMPANY_ROSTER",
  GET_PLAYER_CREDITS = "GET_PLAYER_CREDITS",
}

export const getters = {
  [Getters.GET_NAV_ITEMS]: (state: GameState) => {
    return state.navItems;
  },
  [Getters.GET_COMPANY_ROSTER]: (state: GameState) => {
    return state.company;
  },
  [Getters.GET_PLAYER_CREDITS]: (state: GameState) => {
    return state.playerCredits;
  },
};
