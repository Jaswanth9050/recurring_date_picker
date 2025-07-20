// components/YearlyPatternSelector.jsx
import React from "react";
import { useRecurrence } from "@/context/RecurrenceContext";

const YearlyPatternSelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    recurrence.type === "yearly" && (
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">
          Select Date (Day & Month Only)
        </label>
        <input
          type="date"
          className="border rounded px-3 py-2 w-full"
          onChange={(e) => {
            const selected = new Date(e.target.value);
            if (!isNaN(selected)) {
              setRecurrence((prev) => ({
                ...prev,
                yearly: {
                  day: selected.getDate(),
                  month: selected.getMonth(), // JS months are 0-based
                },
              }));
            }
          }}
        />
      </div>
    )
  );
};

export default YearlyPatternSelector;
