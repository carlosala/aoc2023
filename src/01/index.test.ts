import { file, resolveSync } from "bun";
import { expect, test } from "bun:test";
import { partOne, partTwo, prepareInput } from ".";

const iTest1 = await file(resolveSync("./input.test1.txt", import.meta.dir)).text();
const iTest2 = await file(resolveSync("./input.test2.txt", import.meta.dir)).text();

const input1 = prepareInput(iTest1);
const input2 = prepareInput(iTest2);

test("Part 1", () => {
  expect(partOne(input1)).toBe(142);
});
test("Part 2", () => {
  expect(partTwo(input2)).toBe(281);
});
