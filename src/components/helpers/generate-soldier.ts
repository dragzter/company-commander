import { Soldier, SoldierGeneratorConfig } from "../types/unit-types";
import { v4 as uuidv4 } from "uuid";
import { getRandomSoldierName } from "./random-name";
import { getRandomValueFromRange as getRandVal } from "./get-random-value";
import { SoldierJobs as Job } from "../types/enums";
import { SOLDIER_CONFIGS } from "./soldier-configs";

const ATTRIBUTE_LIMITS = {
  leadership: 10,
  morale: 10,
  hitChance: 95,
  combatPower: 25,
  evasion: 10,
};

/**
 * A Soldier is the base template for any type of unit in the game
 * A Soldier can have any Job
 * @param config Defines what type of soldier we are creating
 * @returns Soldier
 */
export const generateSoldier = (config: SoldierGeneratorConfig): Soldier => {
  return {
    name: getRandomSoldierName(),
    id: uuidv4(),
    level: 1,
    veterancy: 0,
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
  };
};

export const generateSoldierGroup = (soldierType: Job, qty: number) => {
  const soldierGroup: Soldier[] = [];

  for (let i = 0; i < qty; i++) {
    soldierGroup.push(generateSoldier(SOLDIER_CONFIGS[soldierType]()));
  }

  return soldierGroup;
};
