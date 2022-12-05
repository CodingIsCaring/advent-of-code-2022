import { readFileSync } from 'fs';


const sum = (meal1: string, meal2: string): string =>
  (parseInt(meal1) + parseInt(meal2)).toString();

const calculateElfTotalCalories = (elfLoad) =>
  elfLoad.split(/\n/).reduce(sum);

const getHighestCaloriesAmount = (elf1, elf2) => {
  let totalCaloriesElf1 = calculateElfTotalCalories(elf1);
  let totalCaloriesElf2 = calculateElfTotalCalories(elf2);
  return parseInt(totalCaloriesElf1) > parseInt(totalCaloriesElf2) ? totalCaloriesElf1 : totalCaloriesElf2;
};

export const calculateCalories = (filename: string): string => {
  let allContents = readFileSync(filename, 'utf-8');
  allContents = allContents.slice(0, allContents.length - 1);
  return allContents.split(/\n\n/).reduce(getHighestCaloriesAmount);
};
