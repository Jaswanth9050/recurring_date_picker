import { RecurrenceProvider } from "@/context/RecurrenceContext";
import RecurringDatePicker from "../components/RecurringDatePicker";

export default function Home() {
  return (
    <RecurrenceProvider>
      <main className="min-h-screen bg-gray-100 p-10 space-y-10">
        <h1 className="text-3xl font-bold text-center text-blue-600">Recurring Date Picker</h1>
        <RecurringDatePicker />
      </main>
    </RecurrenceProvider>
  );
}
