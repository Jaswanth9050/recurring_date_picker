// export default CalendarPreview;

import { useRecurrence } from '@/context/RecurrenceContext';
import React from 'react'

const JsonPreview = () => {
    const { recurrence } = useRecurrence();
  return (
    <div className="mt-6 border p-4">
      <h3 className="font-bold mb-2">Preview:</h3>
      <pre className="text-sm bg-gray-100 p-2 rounded">{JSON.stringify(recurrence, null, 2)}</pre>
    </div>
  )
}

export default JsonPreview