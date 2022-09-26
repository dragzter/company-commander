import { names } from "../data/names.json";
import { team_names } from "../data/team-names.json";
import { locations } from "../data/location-names.json";

export const getRandomSoldierName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const getRandomTeamName = () => {
  const randomIndex = Math.floor(Math.random() * team_names.length);
  return names[randomIndex];
};

export const getRandomLocationName = () => {
  const randomIndex = Math.floor(Math.random() * locations.length);
  return names[randomIndex];
};

export const getRandomValueFromRange = (low: number, high: number, max: number = 10): number => {
  const randomValue = Math.round(Math.random() * (high - low) + low);
  return randomValue <= max ? randomValue : max;
};
