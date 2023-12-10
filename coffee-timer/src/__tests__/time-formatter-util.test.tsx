import { describe, expect, test } from "vitest";
import { TimeFormatterUtils } from "@/utils/time-formatter.utils";

describe("Time formatter utils", () => {
  test("test counter format to minute and seconds with single digit", () => {
    const expected = "00:09";
    const count = 9;

    expect(TimeFormatterUtils.secondsToMMSS(count)).toBe(expected);
  });

  test.concurrent("test counter format to minute and seconds with zero", () => {
    const expected = "00:00";
    const count = 0;

    expect(TimeFormatterUtils.secondsToMMSS(count)).toBe(expected);
  });
  test.concurrent(
    "test counter format to minute and seconds with double digit",
    () => {
      const expected = "01:02";
      const count = 62;

      expect(TimeFormatterUtils.secondsToMMSS(count)).toBe(expected);
    },
  );

  test.concurrent(
    "test counter format to minute and seconds with maximum value",
    () => {
      const expected = "59:59";
      const count = 3599;

      expect(TimeFormatterUtils.secondsToMMSS(count)).toBe(expected);
    },
  );
});
