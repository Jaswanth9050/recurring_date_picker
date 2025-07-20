// components/IntervalInput.jsx
import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const IntervalInput = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleIntervalChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setRecurrence({ ...recurrence, interval: value });
    } else {
      setRecurrence({ ...recurrence, interval: "" }); // reset on invalid
    }
  };

  const getUnitLabel = () => {
    switch (recurrence.type) {
      case "daily":
        return "day(s)";
      case "weekly":
        return "week(s)";
      case "monthly":
        return "month(s)";
      case "yearly":
        return "year(s)";
      default:
        return "unit(s)";
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Repeat every
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={recurrence.interval}
          onChange={handleIntervalChange}
          className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="text-gray-600">{getUnitLabel()}</span>
      </div>
    </div>
  );
};

export default IntervalInput;
