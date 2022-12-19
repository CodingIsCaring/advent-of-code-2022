import { readFileSync } from 'fs';


const sum = (meal1: string, meal2: string): string =>
  (parseInt(meal1) + parseInt(meal2)).toString();

const calculateElfTotalCalories = (elfLoad): string =>
  elfLoad.split(/\n/).reduce(sum);

const getHighestCaloriesAmount = (elf1, elf2) => {
  let totalCaloriesElf1 = calculateElfTotalCalories(elf1);
  let totalCaloriesElf2 = calculateElfTotalCalories(elf2);
  return parseInt(totalCaloriesElf1) > parseInt(totalCaloriesElf2) ? totalCaloriesElf1 : totalCaloriesElf2;
};

const getFileContentFormatted = (filename: string) => {
  let allContents = readFileSync(filename, 'utf-8');
  return allContents.slice(0, allContents.length - 1);
};

export const calculateCalories = (filename: string): string => {
  const allContents = getFileContentFormatted(filename);
  return allContents.split(/\n\n/).reduce(getHighestCaloriesAmount);
};

const calculateTotalCaloriesByElf = (fileContent: string) => {
  let totalCaloriesByElf: number[] = [];
  fileContent.split(/\n\n/).forEach(elf => {
    const totalElf: number = parseInt(calculateElfTotalCalories(elf));
    totalCaloriesByElf.push(totalElf);
  });
  return totalCaloriesByElf;
};

const ascendantSort = (elf1, elf2) => {
  if (elf1 < elf2) {
    return 1;
  }

  if (elf1 > elf2) {
    return -1;
  }

  return 0;
};

const getTotalOfTopThree = (totalCaloriesByElfSorted: number[]): string => {
  return (totalCaloriesByElfSorted[0]
    + totalCaloriesByElfSorted[1]
    + totalCaloriesByElfSorted[2]).toString();
};

export const calculateTotalTopThreeCalories = (filename: string): string => {
  const fileContent = getFileContentFormatted(filename);
  let totalCaloriesByElf = calculateTotalCaloriesByElf(fileContent);
  const totalCaloriesByElfSorted = totalCaloriesByElf.sort(ascendantSort);
  return getTotalOfTopThree(totalCaloriesByElfSorted);
};
