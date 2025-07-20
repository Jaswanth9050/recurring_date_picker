import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    type: "daily",         
    interval: 1,           
    days: [],              
    startDate: new Date().toISOString().split("T")[0], 
    endDate: "",            
    monthlyPattern: {
    week: "",
    weekday: ""
    },
    yearly: {
        month: 0,
        day: 1   
    }
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
