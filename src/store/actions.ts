import { Company, NavMenuItem } from "../components/types/unit-types";

export const actions = {
  setCompany: (context: any, payload: Company) => {
    context.commit("SET_COMPANY", payload);
  },
  setNavItems: (context: any, payload: NavMenuItem[]) => {
    context.commit("SET_NAV_ITEMS", payload);
  },
};
