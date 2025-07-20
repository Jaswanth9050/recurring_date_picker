import RecurrenceSelector from "./RecurrenceSelector";
import DaySelector from "./DaySelector";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";
import JsonPreview from "./JsonPreview";
import IntervalInput from "./IntervalInput";
import MonthlyPatternSelector from "./MonthlyPatternSelector";
import YearlyPatternSelector from "./YearlyPatternSelector";

const RecurringDatePicker = () => {
  return (
    <div className="max-w-xl mx-auto p-6 border rounded bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Recurring Date Picker</h2>
      <RecurrenceSelector />
      <DaySelector />
      <IntervalInput/>
      <MonthlyPatternSelector/>
      <YearlyPatternSelector/>
      <DateRangePicker />
      <CalendarPreview />
      <JsonPreview/>
    </div>
  );
};

export default RecurringDatePicker;
