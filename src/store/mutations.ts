import { Mission } from "../components/types/types";
import { Company, NavMenuItem } from "../components/types/unit-types";
import { GameState } from "./state";

export enum Mutations {
  SET_GAME_DIFFICULTY = "SET_GAME_DIFFICULTY",
  SET_ROSTER = "SET_ROSTER",
  SET_COMPANY = "SET_COMPANY",
  SET_NAV_ITEMS = "SET_NAV_ITEMS",
  ERASE_COMPANY = "ERASE_COMPANY",
  SET_MISSIONS = "SET_MISSIONS",
  SET_SELECTED_MISSIONS = "SET_SELECTED_MISSIONS",
  SET_PAYOUT_BONUS = "SET_PAYOUT_BONUS",
}

export const mutations = {
  [Mutations.SET_GAME_DIFFICULTY]: (state: GameState, payload: string) => {
    state.gameDifficulty = payload;
  },
  [Mutations.SET_COMPANY]: (state: GameState, payload: Company) => {
    state.company = payload;
  },
  [Mutations.SET_NAV_ITEMS]: (state: GameState, payload: NavMenuItem[]) => {
    const navItems = Array.from(new Set(payload));
    //const current = [...state.navItems, ...navItems];
    const current = [...state.navItems, ...navItems].filter(
      (value, index, self) => index === self.findIndex((t) => t.url === value.url)
    );
    console.log(current);

    state.navItems = current;
  },
  [Mutations.ERASE_COMPANY]: (state: GameState, payload: any) => {
    state.company = payload;
  },
  [Mutations.SET_MISSIONS]: (state: GameState, payload: Mission[]) => {
    state.missions = payload;
  },
  [Mutations.SET_SELECTED_MISSIONS]: (state: GameState, payload: Mission) => {
    state.selectedMission = payload;
  },
  [Mutations.SET_PAYOUT_BONUS]: (state: GameState, payload: number) => {
    state.payoutBonus = payload;
  },
};
