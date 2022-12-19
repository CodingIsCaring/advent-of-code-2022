import { readFileSync } from 'fs';

const getFileContentFormatted = (filename: string) => {
  let fileContent = readFileSync(filename, 'utf-8');
  return fileContent.slice(0, fileContent.length - 1);
};

const calculateHandScore = (playerHand: string): number => {
  switch (playerHand) {
    case 'X':
      return 1;
    case 'Y':
      return 2;
    case 'Z':
      return 3;
    default:
      return 0;
  }
};

const isRock = (value: string): boolean => value === 'A' ||
  value === 'X';

const isPaper = (value: string): boolean => value === 'B' ||
  value === 'Y';

const isScissors = (value: string): boolean => value === 'C' ||
  value === 'Z';

const isADraw = (opponent: string, player: string): boolean => {
  return ((isRock(opponent) && isRock(player)) ||
    (isPaper(opponent) && isPaper(player)) ||
    (isScissors(opponent) && isScissors(player)));
};

const doesPlayerWin = (opponent: string, player: string): boolean => {
  if (isRock(player) && isScissors(opponent)) {
    return true;
  }

  if (isScissors(player) && isPaper(opponent)) {
    return true;
  }

  return isPaper(player) && isRock(opponent);

};

const calculateRoundScore1 = (roundByPlayers: string[]): number => {
  if (isADraw(roundByPlayers[0], roundByPlayers[1])) {
    return 3;
  }
  if (doesPlayerWin(roundByPlayers[0], roundByPlayers[1])) {
    return 6;
  }
  return 0;
};

const calculateRoundScore = (round: string): number => {
  const roundByPlayers = round.split(' ');
  const handScore = calculateHandScore(roundByPlayers[1]);
  const roundScore = calculateRoundScore1(roundByPlayers);
  return handScore + roundScore;
};

export const rockPaperScissors = (filename: string): number => {
  const allRounds = getFileContentFormatted(filename);
  let totalScore = 0;
  allRounds.split(/\n/).forEach(round => {
    totalScore = totalScore + calculateRoundScore(round);
  });
  return totalScore;
};
