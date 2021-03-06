export const getRandomValueFromRange = (
  low: number,
  high: number,
  max: number = 10
): number => {
  const randomValue = Math.round(Math.random() * (high - low) + low);
  return randomValue <= max ? randomValue : max;
};
