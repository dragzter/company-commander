import { Mission } from "../components/types/types";
import { Company, NavMenuItem } from "../components/types/unit-types";

export const actions = {
  setCompany: (context: any, payload: Company) => {
    context.commit("SET_COMPANY", payload);
  },
  setNavItems: (context: any, payload: NavMenuItem[]) => {
    context.commit("SET_NAV_ITEMS", payload);
  },
  setMissions: (context: any, payload: Mission[]) => {
    context.commit("SET_MISSIONS", payload);
  },
  setSelectedMission: (context: any, payload: Mission) => {
    context.commit("SET_SELECTED_MISSIONS", payload);
  },
  setPayoutBonus: (context: any, payload: number) => {
    context.commit("SET_PAYOUT_BONUS", payload);
  },
};
