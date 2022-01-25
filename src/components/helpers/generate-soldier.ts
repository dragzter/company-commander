import { Soldier, SoldierGeneratorConfig } from "../types/unit-types";
import { v4 as uuidv4 } from "uuid";
import { getRandomSoldierName } from "./random-name";
import { getRandomValueFromRange as getRandVal } from "./random-ranges";

/**
 * A Soldier is the base template for any type of unit in the game
 * A Soldier can be an Officer, Rifleman, Support, Medic, Commander
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
    numberOfBattleFought: 0,
    evasion: getRandVal(1, 5),
    rank: {
      value: config.getRank(),
    },
    wounds: config.wounds,
    hitChance: config.getHitChance(),
    combatPower: config.getCombatPower(),
    morale: config.getMorale(),
    leadership: config.getLeadership(),
    job: config.getJob(),
  };
};
