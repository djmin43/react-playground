import { describe, expect, it, test } from "vitest";
import { getCurrentStep, defaultRecipe } from "@/components/timer";

describe("coffee recipe test", () => {
  it.concurrent("#1: get bloom index", () => {
    // given
    const count = 4;
    const recipeList = defaultRecipe;

    // when
    const currentStep = getCurrentStep({
      count,
      recipeSteps: recipeList,
    });
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
    const overFirstPourStep = getCurrentStep({
      count: overFirstPourCount,
      recipeSteps: recipeList,
    });
    const atFirstPourStep = getCurrentStep({
      count: atFirstPourCount,
      recipeSteps: recipeList,
    });
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
    const overSecondPourStep = getCurrentStep({
      count: atSecondPourCount,
      recipeSteps: recipeList,
    });
    const atSecondPourStep = getCurrentStep({
      count: overSecondPourCount,
      recipeSteps: recipeList,
    });
    const expected = recipeList[2];

    // then
    expect(overSecondPourStep).toBe(expected);
    expect(atSecondPourStep).toBe(expected);
  });
});
