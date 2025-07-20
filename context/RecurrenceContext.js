import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    type: "daily",          // daily | weekly | monthly | yearly
    interval: 1,            // number of units to repeat
    days: [],               // [0-6] for weekly recurrence (Sun to Sat)
    startDate: new Date().toISOString().split("T")[0], // default today
    endDate: "",            // "" means no end
    monthlyPattern: {
    week: "",
    weekday: ""
    },
    yearly: {
        month: 0,// 0 = January, 11 = December
        day: 1   // 1–31 (must validate in UI)
    }
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
