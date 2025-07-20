import React from "react";
import { useRecurrence } from "@/context/RecurrenceContext";

const weekOptions = [
  { label: "First", value: "first" },
  { label: "Second", value: "second" },
  { label: "Third", value: "third" },
  { label: "Fourth", value: "fourth" },
  { label: "Last", value: "last" },
];

const dayOptions = [
  { label: "Sunday", value: 0 },
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
];

const MonthlyPatternSelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  if (recurrence.type !== "monthly") return null;

  const handleChange = (field, value) => {
    setRecurrence({
      ...recurrence,
      monthlyPattern: {
        ...recurrence.monthlyPattern,
        [field]: value,
      },
    });
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Monthly Pattern (e.g. Second Tuesday)
      </label>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-xs text-gray-500 mb-1">Week</label>
          <select
            value={recurrence.monthlyPattern?.week || ""}
            onChange={(e) => handleChange("week", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select week</option>
            {weekOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/2">
          <label className="block text-xs text-gray-500 mb-1">Day of the week</label>
          <select
            value={
              recurrence.monthlyPattern?.weekday !== undefined
                ? recurrence.monthlyPattern.weekday
                : ""
            }
            onChange={(e) => handleChange("weekday", parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select day</option>
            {dayOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {recurrence.monthlyPattern.week && recurrence.monthlyPattern.weekday !== "" && (
        <p className="mt-3 text-sm text-green-600 font-medium">
          Pattern selected:{" "}
          <span className="capitalize">{recurrence.monthlyPattern.week}</span>{" "}
          {dayOptions[recurrence.monthlyPattern.weekday].label}
        </p>
      )}
    </div>
  );
};

export default MonthlyPatternSelector;
