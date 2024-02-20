type TGetNoun = (
  number: number,
  one: string,
  two: string,
  five: string,
) => string;

export const getNoun: TGetNoun = (
  number: number,
  one: string,
  two: string,
  five: string,
) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

export const getFourRandomNumbers = (max: number) => {
  const numSet = new Set();
  let i = 0;

  while (i < 4) {
    const newNum = Math.floor(Math.random() * max);
    if (numSet.has(newNum)) continue;
    numSet.add(newNum);
    i += 1;
  }

  return Array.from(numSet) as number[];
};

export const findCurrentNumber = (
  width: number,
  length: number,
  scrollX: number,
) => {
  let foundNum = 0;
  let currentNum = 1;

  const oneElementWidth = width / length;

  while (foundNum === 0) {
    if (scrollX < currentNum * oneElementWidth) {
      foundNum = currentNum;
    } else {
      currentNum += 1;
    }
  }

  return foundNum;
};
