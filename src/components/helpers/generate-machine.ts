import { v4 as uuidv4 } from "uuid";
import { getRandomSoldierName } from "./random-machine";
import { getRandomValueFromRange as getRandVal } from "./random-machine";
import { SoldierJobs as Job } from "../types/enums";
import { SupportTeam, SoldierGeneratorConfig, Soldier } from "../types/unit-types";
import { SupportTeamList } from "../types/enums";
import { SUPPORT_TEAM_CONFIGS, SOLDIER_CONFIGS } from "./soldier-configs";

const ATTRIBUTE_LIMITS = {
  leadership: 10,
  morale: 10,
  hitChance: 95,
  combatPower: 25,
  evasion: 10,
};

/**
 * A Soldier is the base template for
 * any type of unit in the game
 *
 * A Soldier can have any Job
 * @param config Defines what
 * type of soldier we are creating
 * @returns Soldier
 */
export const generateSoldier = (config: SoldierGeneratorConfig): Soldier => {
  return {
    name: getRandomSoldierName(),
    id: uuidv4(),
    level: 1,
    veterancy: 0, // Soldiers start at 0
    experience: 0,
    numberOfBattlesFought: 0,
    evasion: getRandVal(1, 5, ATTRIBUTE_LIMITS.evasion),
    rank: {
      value: config.getRank(),
    },
    wounds: config.wounds,
    hitChance: config.getHitChance(ATTRIBUTE_LIMITS.hitChance),
    combatPower: config.getCombatPower(ATTRIBUTE_LIMITS.combatPower),
    morale: config.getMorale(ATTRIBUTE_LIMITS.morale),
    leadership: config.getLeadership(ATTRIBUTE_LIMITS.leadership),
    job: config.getJob(),
    icon: config.icon,
  };
};

export const generateSoldierGroup = (soldierType: Job, qty: number) => {
  const soldierGroup: Soldier[] = [];

  for (let i = 0; i < qty; i++) {
    soldierGroup.push(generateSoldier(SOLDIER_CONFIGS[soldierType]()));
  }

  return soldierGroup;
};

export const generateSupportTeam = (supportTeamType: SupportTeamList): SupportTeam => {
  const { crew, assistant, leader } = SUPPORT_TEAM_CONFIGS[SupportTeamList[supportTeamType]]();
  const crewMembers: string[] = Object.keys(crew);

  return {
    leader: generateSoldier(SOLDIER_CONFIGS[leader]() as SoldierGeneratorConfig),
    assistant: generateSoldier(SOLDIER_CONFIGS[assistant]() as SoldierGeneratorConfig),
    crew: crewMembers.map((member: string) =>
      generateSoldier(SOLDIER_CONFIGS[crew[member]]() as SoldierGeneratorConfig)
    ),
    teamType: supportTeamType,
  };
};
