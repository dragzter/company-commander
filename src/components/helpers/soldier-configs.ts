import { SoldierJobs as Job, Ranks, SupportTeamList as Support } from "../types/enums";
import {
  SoldierGeneratorConfig as SldrCnfg,
  SupportTeamGeneratorConfig as SprtTeamCnfg,
} from "../types/unit-types";
import { getRandomValueFromRange as r } from "./random-machine";

export const SOLDIER_CONFIGS = {
  [Job.RIFLEMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(2, 5, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(3, 5, max),
      getHitChance: (max: number) => r(55, 70, max),
      getJob: () => Job.RIFLEMAN,
      wounds: 1,
      icon: "<i class='fa-sharp fa-solid fa-person-military-rifle'></i>",
    };
  },
  [Job.RECON_RIFLEMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(3, 6, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(2, 4, max),
      getMorale: (max: number) => r(3, 6, max),
      getHitChance: (max: number) => r(60, 70, max),
      getJob: () => Job.RECON_RIFLEMAN,
      wounds: 1,
      icon: "<i class='fa-duotone fa-person-military-rifle'></i>",
    };
  },
  [Job.MG_CREWMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(1, 4, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(3, 4, max),
      getHitChance: (max: number) => r(55, 65, max),
      getJob: () => Job.MG_CREWMAN,
      wounds: 1,
      icon: "<i class='fa-thin fa-person-military-rifle'></i>",
    };
  },
  [Job.MG_CREW_LOADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(1, 4, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(3, 4, max),
      getHitChance: (max: number) => r(50, 60, max),
      getJob: () => Job.MG_CREW_LOADER,
      wounds: 1,
      icon: "<i class='fa-thin fa-person-military-rifle'></i>",
    };
  },
  [Job.MG_CREW_GUNNER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(2, 4, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(2, 4, max),
      getMorale: (max: number) => r(3, 5, max),
      getHitChance: (max: number) => r(55, 70, max),
      getJob: () => Job.MG_CREW_GUNNER,
      wounds: 1,
      icon: "<i class='fa-thin fa-person-military-rifle'></i>",
    };
  },
  [Job.MORTAR_TEAM_LEADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(1, 4, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(3, 4, max),
      getHitChance: (max: number) => r(55, 60, max),
      getJob: () => Job.MORTAR_TEAM_LEADER,
      wounds: 1,
      icon: "<i class='fa-thin fa-person-military-rifle'></i>",
    };
  },
  [Job.MORTAR_CREWMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(1, 4, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(3, 4, max),
      getHitChance: (max: number) => r(55, 60, max),
      getJob: () => Job.MORTAR_CREWMAN,
      wounds: 1,
      icon: "<i class='fa-thin fa-person-military-rifle'></i>",
    };
  },
  [Job.SQUAD_LEADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(3, 6, max),
      getRank: () => Ranks.CORPORAL,
      getLeadership: (max: number) => r(3, 5, max),
      getMorale: (max: number) => r(3, 6, max),
      getHitChance: (max: number) => r(60, 70, max),
      getJob: () => Job.SQUAD_LEADER,
      wounds: 1,
      icon: "<i class='fa-thin fa-person-military-pointing'></i>",
    };
  },
  [Job.SQUAD_GUNNER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(2, 5, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(3, 5, max),
      getHitChance: (max: number) => r(55, 70, max),
      getJob: () => Job.SQUAD_GUNNER,
      wounds: 1,
      icon: "<i class='fa-duotone fa-person-military-rifle'></i>",
    };
  },
  [Job.SNIPER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(4, 6, max),
      getRank: () => Ranks.LIUETENANT,
      getLeadership: (max: number) => r(2, 5, max),
      getMorale: (max: number) => r(4, 6, max),
      getHitChance: (max: number) => r(75, 80, max),
      getJob: () => Job.SNIPER,
      wounds: 2,
      icon: "<i class='fa-sharp fa-solid fa-person-rifle'></i>",
    };
  },
  [Job.MEDIC as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(1, 3, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 3, max),
      getMorale: (max: number) => r(4, 6, max),
      getHitChance: (max: number) => r(45, 55, max),
      getJob: () => Job.MEDIC,
      wounds: 2,
      icon: "<i class='fa-solid fa-user-nurse'></i>",
    };
  },
  [Job.SURGEON as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(1, 3, max),
      getRank: () => Ranks.CAPTAIN,
      getLeadership: (max: number) => r(3, 5, max),
      getMorale: (max: number) => r(4, 6, max),
      getHitChance: (max: number) => r(45, 55, max),
      getJob: () => Job.SURGEON,
      wounds: 2,
      icon: "<i class='fa-solid fa-user-nurse'></i>",
    };
  },
  [Job.PLATOON_COMMANDER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(2, 4, max),
      getRank: () => Ranks.WARRANT_OFFICER,
      getLeadership: (max: number) => r(4, 6, max),
      getMorale: (max: number) => r(7, 8, max),
      getHitChance: (max: number) => r(60, 70, max),
      getJob: () => Job.PLATOON_COMMANDER,
      wounds: 2,
      icon: "<i class='fa-duotone fa-person-military-pointing'></i>",
    };
  },
  [Job.COMPANY_COMMANDER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(2, 4, max),
      getRank: () => Ranks.MAJOR,
      getLeadership: (max: number) => r(5, 8, max),
      getMorale: (max: number) => r(7, 8, max),
      getHitChance: (max: number) => r(60, 70, max),
      getJob: () => Job.COMPANY_COMMANDER,
      wounds: 2,
      icon: "<i class='fa-solid fa-person-military-pointing'></i>",
    };
  },
  [Job.FIRE_TEAM_GUNNER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(3, 6, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 4, max),
      getMorale: (max: number) => r(3, 6, max),
      getHitChance: (max: number) => r(60, 70, max),
      getJob: () => Job.FIRE_TEAM_GUNNER,
      wounds: 1,
      icon: "<i class='fa-duotone fa-person-military-rifle'></i>",
    };
  },
  [Job.FIRE_TEAM_RIFLEMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(3, 6, max),
      getRank: () => Ranks.PRIVATE,
      getLeadership: (max: number) => r(1, 4, max),
      getMorale: (max: number) => r(3, 6, max),
      getHitChance: (max: number) => r(60, 70, max),
      getJob: () => Job.FIRE_TEAM_RIFLEMAN,
      wounds: 1,
      icon: "<i class='fa-duotone fa-person-military-rifle'></i>",
    };
  },
  [Job.FIRE_TEAM_LEADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: (max: number) => r(3, 6, max),
      getRank: () => Ranks.SERGEANT,
      getLeadership: (max: number) => r(2, 5, max),
      getMorale: (max: number) => r(4, 6, max),
      getHitChance: (max: number) => r(60, 75, max),
      getJob: () => Job.FIRE_TEAM_LEADER,
      wounds: 2,
      icon: "<i class='fa-duotone fa-person-military-pointing'></i>",
    };
  },
};

export const SUPPORT_TEAM_CONFIGS = {
  [Support.MG_TEAM]: (): SprtTeamCnfg => {
    return {
      leader: Job.SQUAD_LEADER,
      assistant: Job.MG_CREW_LOADER,
      crew: {
        member1: Job.MG_CREW_GUNNER,
        member2: Job.MG_CREWMAN,
        member3: Job.MG_CREWMAN,
      },
    };
  },
  [Support.MED_TEAM]: (): SprtTeamCnfg => {
    return {
      leader: Job.SURGEON,
      assistant: Job.MEDIC,
      crew: {
        member1: Job.MEDIC,
      },
    };
  },
  [Support.MORTAR_TEAM]: (): SprtTeamCnfg => {
    return {
      leader: Job.MORTAR_TEAM_LEADER,
      assistant: Job.MORTAR_CREWMAN,
      crew: {
        member1: Job.MORTAR_CREWMAN,
        member2: Job.MORTAR_CREWMAN,
      },
    };
  },
  [Support.RECON_TEAM]: (): SprtTeamCnfg => {
    return {
      leader: Job.SQUAD_LEADER,
      assistant: Job.RECON_RIFLEMAN,
      crew: {
        member1: Job.RECON_RIFLEMAN,
        member2: Job.RECON_RIFLEMAN,
        member3: Job.RECON_RIFLEMAN,
      },
    };
  },
  [Support.FIRE_TEAM]: (): SprtTeamCnfg => {
    return {
      leader: Job.FIRE_TEAM_LEADER,
      assistant: Job.FIRE_TEAM_GUNNER,
      crew: {
        member1: Job.FIRE_TEAM_RIFLEMAN,
        member2: Job.FIRE_TEAM_RIFLEMAN,
        member3: Job.FIRE_TEAM_RIFLEMAN,
      },
    };
  },
  [Support.COMMAND_TEAM]: (): SprtTeamCnfg => {
    return {
      leader: Job.COMPANY_COMMANDER,
      assistant: Job.PLATOON_COMMANDER,
      crew: {
        member1: Job.PLATOON_COMMANDER,
        member2: Job.FIRE_TEAM_GUNNER,
        member3: Job.FIRE_TEAM_RIFLEMAN,
        member4: Job.FIRE_TEAM_RIFLEMAN,
      },
    };
  },
  [Support.ASSAULT_SQUAD]: (): SprtTeamCnfg => {
    return {
      leader: Job.SQUAD_LEADER,
      assistant: Job.RECON_RIFLEMAN,
      crew: {
        member1: Job.FIRE_TEAM_GUNNER,
        member2: Job.FIRE_TEAM_GUNNER,
        member3: Job.FIRE_TEAM_GUNNER,
        member4: Job.FIRE_TEAM_RIFLEMAN,
        member5: Job.FIRE_TEAM_RIFLEMAN,
        member6: Job.FIRE_TEAM_RIFLEMAN,
        member7: Job.FIRE_TEAM_RIFLEMAN,
        member8: Job.RECON_RIFLEMAN,
        member9: Job.RECON_RIFLEMAN,
      },
    };
  },
};
