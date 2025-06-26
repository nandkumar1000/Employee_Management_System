import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AuthContext } from '../context/AuthProvider';

const TaskCalendar = () => {
  const { user } = useContext(AuthContext);
  const taskDates = user?.tasks?.map(task => new Date(task.date));

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const matchedTask = user?.tasks?.find(task => new Date(task.date).toDateString() === date.toDateString());
      return matchedTask ? 'bg-blue-400 text-white font-semibold rounded' : null;
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const tasks = user?.tasks?.filter(task => new Date(task.date).toDateString() === date.toDateString());
      if (tasks?.length > 0) {
        return (
          <ul className="text-xs mt-1 text-green-200 list-disc list-inside">
            {tasks.slice(0, 2).map((task, idx) => (
              <li key={idx}>{task.title}</li>
            ))}
            {tasks.length > 2 && <li>+{tasks.length - 2} more</li>}
          </ul>
        );
      }
    }
    return null;
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">📅 Task Calendar</h2>
      <p className="mb-4 text-gray-300">Highlighted dates show your assigned tasks. Click any date to review brief titles.</p>
      <Calendar
        tileClassName={tileClassName}
        tileContent={tileContent}
        className="rounded border border-gray-600 bg-[#1e1e1e] text-white p-2 shadow-md"
      />
    </div>
  );
};

export default TaskCalendar;