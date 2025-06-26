import React, { useState, useEffect } from 'react';

const Attendance = () => {
  const [status, setStatus] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('attendanceHistory');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const markAttendance = () => {
    const today = new Date().toISOString().split('T')[0];
    const record = { date: today, status: 'Present' };
    const updatedHistory = [...history, record];

    setStatus('Present');
    setHistory(updatedHistory);
    localStorage.setItem('attendanceHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Attendance</h2>
      <button onClick={markAttendance} className="bg-green-500 px-4 py-2 rounded">Mark Present</button>
      {status && <p className="mt-4 text-green-300">Today's Status: {status}</p>}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Attendance History</h3>
        <ul className="list-disc list-inside">
          {history.map((entry, idx) => (
            <li key={idx}>{entry.date} - {entry.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attendance;