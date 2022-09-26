import { Company } from "../types/unit-types";
import { generateSoldierGroup } from "./generate-machine";
import { SoldierJobs as Job, SupportTeamList } from "../types/enums";
import { generateSupportTeam } from "./generate-machine";

export const createCompany = (companyName: string): Company => {
  return {
    infantry: generateSoldierGroup(Job.RIFLEMAN, 74),
    dateOfCreation: new Date().toLocaleDateString(),
    commandTeam: generateSupportTeam(SupportTeamList.COMMAND_TEAM),
    mgCrew: generateSupportTeam(SupportTeamList.MG_TEAM),
    companyName,
  };
};
