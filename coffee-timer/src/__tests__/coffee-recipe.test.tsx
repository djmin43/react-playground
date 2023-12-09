import { describe, expect, it, test } from "vitest";
import { coffeeTimerController, defaultRecipe } from "@/components/timer";

describe("coffee recipe test", () => {
  it.concurrent("#1: get bloom index", () => {
    // given
    const count = 4;
    const recipeList = defaultRecipe;

    // when
    const currentStep = coffeeTimerController(count, recipeList).currentStep();
    const expected = 0;

    // then
    expect(currentStep).toBe(expected);
  });

  it.concurrent("#2: first pour index", () => {
    // given
    const overFirstPourCount = 40;
    const atFirstPourCount = 30;
    const recipeList = defaultRecipe;

    // when
    const overFirstPourStep = coffeeTimerController(
      overFirstPourCount,
      recipeList,
    ).currentStep();
    const atFirstPourStep = coffeeTimerController(
      atFirstPourCount,
      recipeList,
    ).currentStep();
    const expected = 1;

    // then
    expect(overFirstPourStep).toBe(expected);
    expect(atFirstPourStep).toBe(expected);
  });

  it.concurrent("#3: second pour index", () => {
    // given
    const overSecondPourCount = 70;
    const atSecondPourCount = 60;
    const recipeList = defaultRecipe;

    // when
    const overSecondPourStep = coffeeTimerController(
      atSecondPourCount,
      recipeList,
    ).currentStep();
    const atSecondPourStep = coffeeTimerController(
      overSecondPourCount,
      recipeList,
    ).currentStep();
    const expected = 2;

    // then
    expect(overSecondPourStep).toBe(expected);
    expect(atSecondPourStep).toBe(expected);
  });
});
