import { intervalToDuration } from "date-fns/fp";

export class TimeFormatterUtils {
  public static secondsToMMSS(seconds: number) {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
    return (
      this.formatTimeDigit(`${duration.minutes}`) +
      ":" +
      this.formatTimeDigit(`${duration.seconds}`)
    );
  }

  private static formatTimeDigit(time: string) {
    return time.length < 2 ? `0${time}` : time;
  }
}
