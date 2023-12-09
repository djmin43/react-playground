import { describe, expect, it } from "vitest";
import { coffeeTimerController, defaultRecipe } from "@/components/timer";

describe("coffee recipe test", () => {
  it.concurrent("#1: get bloom index", () => {
    // given
    const count = 4;
    const recipeList = defaultRecipe;

    // when
    const currentStep = coffeeTimerController(recipeList, count)
      .currentStep()
      .get();
    const expected = recipeList[0];

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
      recipeList,
      overFirstPourCount,
    )
      .currentStep()
      .get();
    const atFirstPourStep = coffeeTimerController(recipeList, atFirstPourCount)
      .currentStep()
      .get();
    const expected = recipeList[1];

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
      recipeList,
      overSecondPourCount,
    )
      .currentStep()
      .get();
    const atSecondPourStep = coffeeTimerController(
      recipeList,
      atSecondPourCount,
    )
      .currentStep()
      .get();
    const expected = recipeList[2];

    // then
    expect(overSecondPourStep).toBe(expected);
    expect(atSecondPourStep).toBe(expected);
  });
});
