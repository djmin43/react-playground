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

test("coffee recipe test #2: first pour index", () => {
  // given
  const count = 40;
  const recipeList = defaultRecipe;

  // when
  const currentStep = getCurrentStep(count, recipeList);
  const expected = 1;

  // then
  expect(currentStep).toBe(expected);
});

test("coffee recipe test #3: second pour index", () => {
  // given
  const count = 70;
  const recipeList = defaultRecipe;

  // when
  const currentStep = getCurrentStep(count, recipeList);
  const expected = 2;

  // then
  expect(currentStep).toBe(expected);
});
