import { Ranks, SoldierJobs } from "./enums";

/**
 * GAME NOTES about TYPES
 *
 * A company is composed of soldiers.
 * Soldiers can have their own qualities.
 * Because experience determines veterancy
 * and leadership abilities Commanders may
 * choose to promote soldiers to become officers.
 *
 * What the various attributes mean
 * --------------------------------
 * Morale: likelyness to break when under
 * heavy attack
 *
 * Leadership: likelyness to be promoted
 *
 * Combat Rating: Increases offensive and
 * defensive capability (hit, crit, evade)
 * Veterancy: Blanket increase to all stats
 * (3 levels)
 *
 * Experience: Increased with every engagement,
 * also by performing hits on enemies
 * Rank: Ability to be promoted to leadership
 * positions within the company
 *
 * Evasion: The ability to evade attacks
 * (max of 10%)
 */

export interface SoldierRank {
  value: Ranks;
}

/**
 * A single log entry for a Soldier
 * Meant to keep track of kills and battle names
 */
export interface BattleLogEntry {
  name: string;
  kills: Soldier[];
}

/**
 * Battles or engagements are called
 * BattleEvents We record some history
 * after every event.
 */
export interface BattleEvent {
  name: string;
  victor?: string;
  loser?: string;
  kiaVictor?: number;
  kiaLoser?: number;
  location?: string;
  date?: string;
  description?: string;
}

/**
 * All Units are Soldiers
 * This is the base template
 * from which to create any unit
 */
export interface Soldier {
  name: string;
  id?: string;
  hitChance?: number; // Min 40%, Max 95%
  evasion?: number; // Max 10
  level?: number; // Max 30
  wounds?: number; // How many hits Soldier can take
  veterancy?: number; // Max 3
  rank?: SoldierRank;
  morale?: number; //  MAX 10
  combatPower?: number; // Max 25
  leadership?: number; // Max 10
  experience?: number; // No max
  job?: SoldierJobs;
  numberOfBattlesFought?: number; // No max
  special?: object | string;
  battleLog?: BattleLogEntry[];
  icon?: string;
}
export interface SupportTeam {
  leader?: Soldier;
  assistant?: Soldier;
  crew: Soldier[];
  teamType: string;
  teamName?: string;
}

/**
 * Companies have optional support units
 * At minimum, a Company needs to have
 * Soldiers and a name
 *
 * A starting company has 80 Soldiers
 * A Company can have as many as 200
 */
export interface Company {
  infantry: Soldier[];
  companyName: string;
  dateOfCreation: string;
  commandTeam?: SupportTeam;
  mgCrew?: SupportTeam;
  mortarCrew?: SupportTeam;
  reconCrew?: SupportTeam;
  medCrew?: SupportTeam;
  sfTeam?: SupportTeam;
  sniper?: Soldier;
  headCount?: number;
}

/**
 * Soldiers can be Officers or Enlisted
 * or Support crew. Each Soldier type
 * has different starting values.
 *
 * This interface helps to define those
 * default values based on the Soldier
 * type i.e. officer/rifleman/support.
 */
export interface SoldierGeneratorConfig {
  getCombatPower: Function;
  getRank: Function;
  getMorale: Function;
  getHitChance: Function;
  getLeadership: Function;
  getJob: Function;
  icon: string;
  wounds: number;
}

export interface SupportTeamGeneratorConfig {
  leader: string;
  assistant: string;
  crew: { [key: string]: string };
}

export interface NavMenuItem {
  url: string;
  text: string;
  css_id: string;
}

export interface TableData {
  tableHeaders: string[];
  rowData: SoldierDataCells[];
}

export interface SoldierDataCells {
  name: string;
  rank?: string;
  job?: string;
  level?: number;
  veterancy?: number;
  morale?: number;
  combatPower?: number;
  leadership?: number;
  evasion?: number;
  hitChance?: number;
  experience?: number;
}

export interface Stats {
  count: number;
  commander?: Soldier;
  teams?: SupportTeam[];
  battles?: number;
  kia?: Soldier[];
}
