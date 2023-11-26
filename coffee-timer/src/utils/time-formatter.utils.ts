import { intervalToDuration } from "date-fns/fp";

export class TimeFormatterUtils {
  /**
   *
   * @param seconds in seconds
   * ex: 60 -> 01:00; 5 -> 00:05
   */
  public static secondsToMMSS(seconds: number) {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
    return (
      this.formatTimeDigit(`${duration.minutes}`) +
      ":" +
      this.formatTimeDigit(`${duration.seconds}`)
    );
  }

  /**
   * @private
   * "0" -> "00"; "00" -> "00"
   */
  private static formatTimeDigit(time: string) {
    if (time.length < 2) {
      return `0${time}`;
    }
    return time;
  }
}
