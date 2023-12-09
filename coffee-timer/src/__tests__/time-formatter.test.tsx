import { describe, expect, test } from "vitest";
import { TimeFormatterUtils } from "@/utils/time-formatter.utils";

describe("Time formatter utils", () => {
  test.concurrent("test time formatter utils", () => {
    // given
    const expected = "00:09";

    // when
    const count = 9;

    // then
    expect(TimeFormatterUtils.secondsToMMSS(count)).not.toBe("9");
    expect(TimeFormatterUtils.secondsToMMSS(count)).toBe(expected);
  });
});
