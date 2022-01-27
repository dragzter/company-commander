import { Company } from "../components/types/unit-types";

export const actions = {
  setCompany: (context: any, payload: Company) => {
    context.commit("SET_COMPANY", payload);
  },
};
