import { useRecurrence } from "../context/RecurrenceContext";

const DaySelector = () => {
  const { recurrence, setRecurrence } = useRecurrence();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const toggleDay = (dayIndex) => {
    const updated = recurrence.days.includes(dayIndex)
      ? recurrence.days.filter((d) => d !== dayIndex)
      : [...recurrence.days, dayIndex].sort((a, b) => a - b); // keep sorted
    setRecurrence({ ...recurrence, days: updated });
  };

  if (recurrence.type !== "weekly") return null; // Only show for weekly recurrence

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {days.map((day, i) => {
        const isSelected = recurrence.days.includes(i);
        return (
          <button
            key={day}
            onClick={() => toggleDay(i)}
            className={`w-10 h-10 rounded-full text-sm font-medium transition-colors duration-200 ${
              isSelected
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            aria-pressed={isSelected}
          >
            {day[0]}
            <span className="sr-only">{day}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DaySelector;
