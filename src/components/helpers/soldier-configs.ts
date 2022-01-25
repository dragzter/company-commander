import {
  SoldierJobs as Job,
  Ranks,
  SupportTeamList as Support,
} from "../types/enums";
import {
  SoldierGeneratorConfig as SldrCnfg,
  SupportTeamGeneratorConfig as SprtTeamCnfg,
} from "../types/unit-types";
import { getRandomValueFromRange as r } from "./random-ranges";

export const SOLDIER_CONFIGS = {
  [Job.RIFLEMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(2, 5),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(3, 5),
      getHitChance: () => r(55, 70),
      getJob: () => Job.RIFLEMAN,
      wounds: 1,
    };
  },
  [Job.RECON_RIFLEMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(3, 6),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(2, 4),
      getMorale: () => r(3, 6),
      getHitChance: () => r(60, 70),
      getJob: () => Job.RECON_RIFLEMAN,
      wounds: 1,
    };
  },
  [Job.MG_CREWMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(1, 4),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(3, 4),
      getHitChance: () => r(55, 65),
      getJob: () => Job.MG_CREWMAN,
      wounds: 1,
    };
  },
  [Job.MG_CREW_LOADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(1, 4),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(3, 4),
      getHitChance: () => r(50, 60),
      getJob: () => Job.MG_CREW_LOADER,
      wounds: 1,
    };
  },
  [Job.MG_CREW_GUNNER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(2, 4),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(2, 4),
      getMorale: () => r(3, 5),
      getHitChance: () => r(55, 70),
      getJob: () => Job.MG_CREW_GUNNER,
      wounds: 1,
    };
  },
  [Job.MORTAR_TEAM_LEADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(1, 4),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(3, 4),
      getHitChance: () => r(55, 60),
      getJob: () => Job.MORTAR_TEAM_LEADER,
      wounds: 1,
    };
  },
  [Job.MORTAR_CREWMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(1, 4),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(3, 4),
      getHitChance: () => r(55, 60),
      getJob: () => Job.MORTAR_CREWMAN,
      wounds: 1,
    };
  },
  [Job.SQUAD_LEADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(3, 6),
      getRank: () => Ranks.CORPORAL,
      getLeadership: () => r(3, 5),
      getMorale: () => r(3, 6),
      getHitChance: () => r(60, 70),
      getJob: () => Job.SQUAD_LEADER,
      wounds: 1,
    };
  },
  [Job.SQUAD_GUNNER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(2, 5),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(3, 5),
      getHitChance: () => r(55, 70),
      getJob: () => Job.SQUAD_GUNNER,
      wounds: 1,
    };
  },
  [Job.SNIPER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(4, 6),
      getRank: () => Ranks.LIUETENANT,
      getLeadership: () => r(2, 5),
      getMorale: () => r(4, 6),
      getHitChance: () => r(75, 80),
      getJob: () => Job.SNIPER,
      wounds: 2,
    };
  },
  [Job.MEDIC as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(1, 3),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 3),
      getMorale: () => r(4, 6),
      getHitChance: () => r(45, 55),
      getJob: () => Job.MEDIC,
      wounds: 2,
    };
  },
  [Job.SURGEON as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(1, 3),
      getRank: () => Ranks.CAPTAIN,
      getLeadership: () => r(3, 5),
      getMorale: () => r(4, 6),
      getHitChance: () => r(45, 55),
      getJob: () => Job.SURGEON,
      wounds: 2,
    };
  },
  [Job.OFFICER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(2, 4),
      getRank: () => Ranks.WARRANT_OFFICER,
      getLeadership: () => r(4, 6),
      getMorale: () => r(7, 8),
      getHitChance: () => r(60, 70),
      getJob: () => Job.OFFICER,
      wounds: 2,
    };
  },
  [Job.SENIOR_OFFICER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(2, 4),
      getRank: () => Ranks.MAJOR,
      getLeadership: () => r(5, 8),
      getMorale: () => r(7, 8),
      getHitChance: () => r(60, 70),
      getJob: () => Job.SENIOR_OFFICER,
      wounds: 2,
    };
  },
  [Job.FIRE_TEAM_GUNNER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(3, 6),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 4),
      getMorale: () => r(3, 6),
      getHitChance: () => r(60, 70),
      getJob: () => Job.FIRE_TEAM_GUNNER,
      wounds: 1,
    };
  },
  [Job.FIRE_TEAM_RIFLEMAN as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(3, 6),
      getRank: () => Ranks.PRIVATE,
      getLeadership: () => r(1, 4),
      getMorale: () => r(3, 6),
      getHitChance: () => r(60, 70),
      getJob: () => Job.FIRE_TEAM_RIFLEMAN,
      wounds: 1,
    };
  },
  [Job.FIRE_TEAM_LEADER as string]: (): SldrCnfg => {
    return {
      getCombatPower: () => r(3, 6),
      getRank: () => Ranks.SERGEANT,
      getLeadership: () => r(2, 5),
      getMorale: () => r(4, 6),
      getHitChance: () => r(60, 75),
      getJob: () => Job.FIRE_TEAM_LEADER,
      wounds: 2,
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
};
