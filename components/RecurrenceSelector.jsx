import { useRecurrence } from "../context/RecurrenceContext";
import {
  CalendarDays,
  Repeat,
  CalendarCheck,
  CalendarClock,
} from "lucide-react";

const iconMap = {
  daily: <Repeat size={18} className="mr-2" />,
  weekly: <CalendarDays size={18} className="mr-2" />,
  monthly: <CalendarCheck size={18} className="mr-2" />,
  yearly: <CalendarClock size={18} className="mr-2" />,
};

const RecurrenceSelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();
  const options = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {options.map((option) => {
        const isSelected = recurrence.type === option;
        return (
          <button
            key={option}
            onClick={() =>
              setRecurrence({
                ...recurrence,
                type: option,
                ...(option !== "weekly" ? { days: [] } : {}),
              })
            }
            className={`flex items-center gap-1 px-4 py-2 rounded border transition-all duration-200 ${
              isSelected
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {iconMap[option]}
            <span className="capitalize">{option}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RecurrenceSelector;
