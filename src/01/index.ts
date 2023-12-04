export type Input = string[];

export function prepareInput(i: string): Input {
  return i.trim().split("\n");
}

export function partOne(i: Input): number {
  let acc = 0;
  for (const el of i) {
    const splitEl = el.split("");
    const numExp = /[0-9]/;
    acc += 10 * Number(splitEl.find((l) => numExp.test(l)));
    acc += Number(splitEl.findLast((l) => numExp.test(l)));
  }
  return acc;
}

const strToNum: Record<string, number> = {
  "1": 1,
  one: 1,
  "2": 2,
  two: 2,
  "3": 3,
  three: 3,
  "4": 4,
  four: 4,
  "5": 5,
  five: 5,
  "6": 6,
  six: 6,
  "7": 7,
  seven: 7,
  "8": 8,
  eight: 8,
  "9": 9,
  nine: 9,
};

export function partTwo(i: Input): number {
  let acc = 0;
  for (const el of i) {
    const firstRgx = /([0-9]|one|two|three|four|five|six|seven|eight|nine).*/g;
    const lastRgx = /.*([0-9]|one|two|three|four|five|six|seven|eight|nine)/g;
    const firstNum = strToNum[firstRgx.exec(el)?.[1] ?? ""];
    const lastNum = strToNum[lastRgx.exec(el)?.[1] ?? ""];
    acc += 10 * firstNum;
    acc += lastNum;
  }
  return acc;
}
