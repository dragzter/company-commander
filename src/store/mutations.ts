import { Company } from "../components/types/unit-types";
import { GameState } from "./state";

export enum Mutations {
  SET_COMPANY_INFO = "SET_COMPANY_INFO",
  SET_GAME_DIFFICULTY = "SET_GAME_DIFFICULTY",
  SET_ROSTER = "SET_ROSTER",
  SET_COMPANY = "SET_COMPANY",
}

export const mutations = {
  [Mutations.SET_COMPANY_INFO]: (
    state: GameState,
    payload: { type: string; name: string }
  ) => {
    state.companyInfo = payload;
  },
  [Mutations.SET_GAME_DIFFICULTY]: (state: GameState, payload: string) => {
    state.gameDifficulty = payload;
  },
  [Mutations.SET_COMPANY]: (state: GameState, payload: Company) => {
    state.company = payload;
  },
};
