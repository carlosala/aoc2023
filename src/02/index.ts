interface Extraction {
  red: number;
  green: number;
  blue: number;
}

export type Input = Extraction[][];

export function prepareInput(i: string): Input {
  const inputProcessed: Input = [];
  i.trim()
    .split("\n")
    .map((game) => game.replace(/Game [0-9]*: /, ""))
    .forEach((game) => {
      const gameProcessed: Extraction[] = [];
      game.split("; ").forEach((ext) => {
        const extraction: Extraction = { red: 0, green: 0, blue: 0 };
        ext.split(", ").forEach((numColor) => {
          // @ts-expect-error we're sure it's fine
          extraction[numColor.split(" ")[1]] = Number(numColor.split(" ")[0]);
        });
        gameProcessed.push(extraction);
      });
      inputProcessed.push(gameProcessed);
    });
  return inputProcessed;
}

export function partOne(i: Input): number {
  let acc = 0;
  for (let j = 0; j < i.length; j++) {
    let isValid = true;
    for (const extraction of i[j]) {
      if (extraction.red > 12 || extraction.green > 13 || extraction.blue > 14) {
        isValid = false;
        break;
      }
    }
    if (isValid) acc += j + 1; // game is index + 1
  }
  return acc;
}

export function partTwo(i: Input): number {
  let acc = 0;
  for (let j = 0; j < i.length; j++) {
    let minRed = i[j][0].red;
    let minGreen = i[j][0].green;
    let minBlue = i[j][0].blue;
    for (const extraction of i[j]) {
      if (extraction.red > minRed) minRed = extraction.red;
      if (extraction.green > minGreen) minGreen = extraction.green;
      if (extraction.blue > minBlue) minBlue = extraction.blue;
    }
    acc += minRed * minGreen * minBlue;
  }
  return acc;
}
