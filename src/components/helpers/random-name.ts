import { names } from "./names.json";

export const getRandomSoldierName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};
