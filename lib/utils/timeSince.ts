import { toLocalTime } from "@/lib/utils/toLocalTime";

export function timeSince(
  input: string | Date,
  forceDays = false,
  short: boolean = false
) {
  const date = toLocalTime(input);

  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges: { [key: string]: number } = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };

  const secondsElapsed = (date.getTime() - Date.now()) / 1000;

  if (forceDays) {
    const delta = Math.round(secondsElapsed / ranges["days"]);
    return delta === 0 ? "Today" : formatter.format(delta, "days");
  }
  for (let key in ranges) {
    if (ranges[key] <= Math.abs(secondsElapsed)) {
      const delta = Math.round(secondsElapsed / ranges[key]);
      const formatted = formatter.format(
        delta,
        key as Intl.RelativeTimeFormatUnit
      );

      if (short) {
        const parts = formatted.match(/(-?\d+)\s*(\w+)/);
        if (parts) {
          const [, number, unit] = parts;
          return `${number}${unit[0]}`;
        }
      }

      return formatted;
    }
  }

  return "Now";
}
