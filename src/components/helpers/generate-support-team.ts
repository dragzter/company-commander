import { SupportTeam, SoldierGeneratorConfig } from "../types/unit-types";
import { SupportTeamList } from "../types/enums";
import { SUPPORT_TEAM_CONFIGS, SOLDIER_CONFIGS } from "./soldier-configs";
import { generateSoldier } from "./generate-soldier";

export const generateSupportTeam = (
  supportTeamType: SupportTeamList
): SupportTeam => {
  const { crew, assistant, leader } =
    SUPPORT_TEAM_CONFIGS[SupportTeamList[supportTeamType]]();
  const crewMembers: string[] = Object.keys(crew);

  return {
    leader: generateSoldier(
      SOLDIER_CONFIGS[leader]() as SoldierGeneratorConfig
    ),
    assistant: generateSoldier(
      SOLDIER_CONFIGS[assistant]() as SoldierGeneratorConfig
    ),
    crew: crewMembers.map((member: string) =>
      generateSoldier(SOLDIER_CONFIGS[crew[member]]() as SoldierGeneratorConfig)
    ),
    teamType: supportTeamType,
  };
};
