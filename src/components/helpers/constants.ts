import { NavMenuItem, Soldier } from "../types/unit-types";

// export const homeNav: NavMenuItem = {
//   url: "Home",
//   text: "Home",
//   css_id: "home-link",
// };

export const rosterNav: NavMenuItem = {
  url: "Roster",
  text: "Roster",
  css_id: "roster-link",
};

export const gameSettingsNav: NavMenuItem = {
  url: "GameSettings",
  text: "Game Setup",
  css_id: "game-setup-link",
};

export const missionsNav: NavMenuItem = {
  url: "Missions",
  text: "Missions",
  css_id: "missions-link",
};

export const provisionsNav: NavMenuItem = {
  url: "Provisions",
  text: "Provisions",
  css_id: "provisions-link",
};

export const recruitmentNav: NavMenuItem = {
  url: "Recruitment",
  text: "Recruitment",
  css_id: "recruitment-link",
};

export const tableHeaders = [
  "Name",
  "Rank",
  "Job",
  "Level",
  "Veterancy",
  "Morale",
  "Combat Power",
  "Leadership",
  "Evasion",
  "Hit Chance",
  "Experience",
];

export const companyTeams = [
  "commandTeam",
  "mgCrew",
  "mortarCrew",
  "reconCrew",
  "medCrew",
  "sniper",
  "sfTeam",
];

export const blankSoldier: Soldier = {
  name: "Unknown",
  icon: "&#10067;", // https://emojiguide.org/question-mark
};
