import { useRecurrence } from "../context/RecurrenceContext";

const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleStartChange = (e) => {
    const newStart = e.target.value;
    setRecurrence({
      ...recurrence,
      startDate: newStart,
      endDate:
        recurrence.endDate && new Date(newStart) > new Date(recurrence.endDate)
          ? null
          : recurrence.endDate,
    });
  };

  const handleEndChange = (e) => {
    setRecurrence({ ...recurrence, endDate: e.target.value });
  };

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
        <input
          type="date"
          value={recurrence.startDate || ""}
          onChange={handleStartChange}
          className="border px-3 py-2 rounded w-full max-w-xs"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">End Date (optional)</label>
        <input
          type="date"
          value={recurrence.endDate || ""}
          min={recurrence.startDate || ""}
          onChange={handleEndChange}
          className="border px-3 py-2 rounded w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
