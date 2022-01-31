import { Ranks, SaveObjects, SoldierJobs } from "../types/enums";
import { Soldier, Stats, SupportTeam } from "../types/unit-types";
import { loadGameObject, itemInStorage } from "./memory-management";
import { blankSoldier, companyTeams } from "../helpers/constants";

export const getCompanyStats = (): Stats => {
  const soldiers = getCompanySoldiers();

  return {
    count: soldiers.length, // number
    commander: getCompanyCommander(), // string
    teams: getCompanyTeams(), // SupportTeam[],
    battles: itemInStorage(SaveObjects.BATTLES)
      ? loadGameObject(SaveObjects.BATTLES)
      : 0, // number
    kia: itemInStorage(SaveObjects.KIA) ? loadGameObject(SaveObjects.KIA) : [], // Soldier[]
  };
};

export const getCompanyCommander = (): Soldier => {
  return loadGameObject(SaveObjects.SOLDIERS)
    ? loadGameObject(SaveObjects.SOLDIERS).filter(
        (soldier: Soldier): boolean => {
          return soldier.job === SoldierJobs.COMPANY_COMMANDER;
        }
      )
    : blankSoldier;
};

export const getCompanyTeams = (): SupportTeam[] => {
  const company = loadGameObject(SaveObjects.COMPANY);

  return companyTeams
    .filter((team) => {
      return Object.keys(company).includes(team);
    })
    .map((team) => {
      return company[team];
    });
};

export const getCompanySoldiers = (): Soldier[] => {
  return itemInStorage(SaveObjects.SOLDIERS)
    ? loadGameObject(SaveObjects.SOLDIERS)
    : [];
};
