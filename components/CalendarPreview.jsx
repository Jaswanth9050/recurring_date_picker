import React, { useMemo, useState } from "react";
import { useRecurrence } from "@/context/RecurrenceContext";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isBefore,
  startOfMonth,
  startOfWeek,
} from "date-fns";

const getNextDate = (date, interval, type) => {
  const newDate = new Date(date);
  switch (type) {
    case "daily":
      newDate.setDate(newDate.getDate() + interval);
      break;
    case "weekly":
      newDate.setDate(newDate.getDate() + 7 * interval);
      break;
    case "monthly":
      newDate.setMonth(newDate.getMonth() + interval);
      break;
    case "yearly":
      newDate.setFullYear(newDate.getFullYear() + interval);
      break;
    default:
      break;
  }
  return newDate;
};

const getNthWeekdayOfMonth = (date, n, weekday) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let count = 0;
  for (let i = 0; i < 31; i++) {
    const d = new Date(firstDay.getFullYear(), firstDay.getMonth(), i + 1);
    if (d.getMonth() !== firstDay.getMonth()) break;
    if (d.getDay() === weekday) {
      count++;
      if (count === n) return d;
    }
  }
  return null;
};

const getLastWeekdayOfMonth = (date, weekday) => {
  const lastDay = endOfMonth(date);
  for (let i = 0; i < 7; i++) {
    const d = new Date(
      lastDay.getFullYear(),
      lastDay.getMonth(),
      lastDay.getDate() - i
    );
    if (d.getDay() === weekday) return d;
  }
  return null;
};

const generateMonthDates = (monthDate) => {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dates = [];

  let current = new Date(startDate);
  while (!isBefore(endDate, current)) {
    dates.push(new Date(current));
    current = addDays(current, 1);
  }
  return dates;
};

const CalendarPreview = () => {
  const { recurrence } = useRecurrence();
  const {
    type,
    interval,
    startDate,
    endDate,
    days = [],
    monthlyPattern,
    yearly = {},
  } = recurrence;

  const [currentMonth, setCurrentMonth] = useState(
    startDate ? new Date(startDate) : new Date()
  );

  const recurringDates = useMemo(() => {
    if (!startDate || interval < 1) return [];

    const result = [];
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : addMonths(start, 12);
    let current = new Date(start);

    if (type === "daily") {
      while (current <= end) {
        result.push(new Date(current));
        current = getNextDate(current, interval, "daily");
      }
    } else if (type === "weekly") {
      while (current <= end) {
        for (let i = 0; i < 7; i++) {
          const day = new Date(current);
          day.setDate(day.getDate() + i);
          if (days.includes(day.getDay()) && day <= end) {
            result.push(new Date(day));
          }
        }
        current = getNextDate(current, interval, "weekly");
      }
    } else if (type === "monthly") {
      while (current <= end) {
        const monthDate = new Date(current);

        if (monthlyPattern?.week && monthlyPattern?.weekday !== "") {
          const weekMap = {
            first: 1,
            second: 2,
            third: 3,
            fourth: 4,
            last: "last",
          };
          const weekNum = weekMap[monthlyPattern.week];
          const weekday = parseInt(monthlyPattern.weekday);

          let targetDate = null;
          if (weekNum === "last") {
            targetDate = getLastWeekdayOfMonth(monthDate, weekday);
          } else {
            targetDate = getNthWeekdayOfMonth(monthDate, weekNum, weekday);
          }

          if (targetDate && targetDate >= start && targetDate <= end) {
            result.push(targetDate);
          }
        } else if (days.length > 0) {
          days.forEach((day) => {
            const d = new Date(
              monthDate.getFullYear(),
              monthDate.getMonth(),
              day
            );
            if (d >= start && d <= end) {
              result.push(d);
            }
          });
        }

        current = getNextDate(current, interval, "monthly");
      }
    } else if (type === "yearly") {
      const { month, day } = recurrence.yearly || {};
      let year = start.getFullYear();

      while (true) {
        // Create a tentative date
        const date = new Date(year, month, day);

        // Skip if it's an invalid date (e.g., Feb 30 or Feb 29 in non-leap years)
        if (date.getMonth() !== month || date.getDate() !== day) {
          year += interval;
          continue;
        }

        // Stop if it’s beyond the range
        if (date > end) break;

        // Add only if in range
        if (date >= start) {
          result.push(date);
        }

        year += interval;
      }
    }

    return result;
  }, [recurrence]);

  const monthDates = useMemo(
    () => generateMonthDates(currentMonth),
    [currentMonth]
  );

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setCurrentMonth((prev) => addMonths(prev, -1))}
        >
          ← Previous
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setCurrentMonth((prev) => addMonths(prev, 1))}
        >
          Next →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-600 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {monthDates.map((day) => {
          const isHighlighted = recurringDates.some((d) => isSameDay(d, day));
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();

          return (
            <div
              key={day}
              title={isHighlighted ? "Recurring" : ""}
              className={`w-10 h-10 flex items-center justify-center rounded text-sm border
                ${
                  isHighlighted
                    ? "bg-blue-500 text-white"
                    : isCurrentMonth
                    ? "bg-white"
                    : "bg-gray-100 text-gray-400"
                }`}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPreview;
