import { expect, test } from "vitest";
import { defaultRecipe, getCurrentStep } from "@/components/timer";

test("coffee recipe test #1: get bloom index", () => {
  // given
  const count = 4;
  const recipeList = defaultRecipe;

  // when
  const currentStep = getCurrentStep(count, recipeList);
  const expected = 0;

  // then
  expect(currentStep).toBe(expected);
});

// test("coffee recipe test #2: first pour index", () => {
//   // given
//   const overFirstPourCount = 40;
//   const atFirstPourCount = 30;
//   const recipeList = defaultRecipe;
//
//   // when
//   const overFirstPourStep = getCurrentStep(overFirstPourCount, recipeList);
//   const atFirstPourStep = getCurrentStep(atFirstPourCount, recipeList);
//   const expected = 1;
//
//   // then
//   expect(overFirstPourStep).toBe(expected);
//   expect(atFirstPourStep).toBe(expected);
// });

// test("coffee recipe test #3: second pour index", () => {
//   // given
//   const overSecondPourCount = 70;
//   const atSecondPourCount = 60;
//   const recipeList = defaultRecipe;
//
//   // when
//   const overSecondPourStep = getCurrentStep(overSecondPourCount, recipeList);
//   const atSecondPourStep = getCurrentStep(atSecondPourCount, recipeList);
//   const expected = 2;
//
//   // then
//   expect(overSecondPourStep).toBe(expected);
//   expect(atSecondPourStep).toBe(expected);
// });
