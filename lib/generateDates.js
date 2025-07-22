import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isBefore,
  isSameDay,
  parseISO,
  getDay,
} from "date-fns";

export function generateRecurringDates(config) {
  const { type, interval = 1, days = [], startDate, endDate } = config;

  if (!startDate) return [];

  const start = typeof startDate === "string" ? parseISO(startDate) : new Date(startDate);
  const end = endDate
    ? typeof endDate === "string"
      ? parseISO(endDate)
      : new Date(endDate)
    : addMonths(new Date(start), 3);

  const result = [];
  let current = new Date(start);

  while (isBefore(current, end) || isSameDay(current, end)) {
    if (type === "daily") {
      result.push(new Date(current));
      current = addDays(current, interval);
    }

    else if (type === "weekly") {
      for (let i = 0; i < 7; i++) {
        if (isBefore(current, end) || isSameDay(current, end)) {
          if (days.includes(getDay(current))) {
            result.push(new Date(current));
          }
          current = addDays(current, 1);
        }
      }
      current = addDays(current, (interval - 1) * 7); 
    }

    else if (type === "monthly") {
      result.push(new Date(current));
      current = addMonths(current, interval);
    }

    else if (type === "yearly") {
      result.push(new Date(current));
      current = addYears(current, interval);
    }

    else {
      break;
    }
  }

  return result;
}
