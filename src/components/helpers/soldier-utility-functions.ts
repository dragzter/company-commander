import { Soldier } from "../types/unit-types";
import { companyTeams } from "./constants";

/**
 * Extract soldiers form all teams and infantry sections
 */
export const consolidateSoldiers = (companyData: any): Soldier[] => {
  const consolidatedSoldierArray: Soldier[] = [];
  const companyProps = Object.keys(companyData);

  companyTeams
    .filter((team: string) => {
      return companyProps.includes(team);
    })
    .forEach((team: string) => {
      consolidatedSoldierArray.push(
        companyData[team].assistant,
        companyData[team].leader,
        ...companyData[team].crew
      );
    });
  consolidatedSoldierArray.push(...companyData.infantry);
  return consolidatedSoldierArray;
};
