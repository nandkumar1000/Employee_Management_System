import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Pull latest data from localStorage or context
    const employeeData = localStorage.getItem('employees');
    const parsedEmployees = employeeData ? JSON.parse(employeeData) : [];
    setEmployees(parsedEmployees);
  }, [authData?.employees]); 
  // Function to calculate task counts per employee
  const getTaskCounts = (tasks = []) => {
    const counts = {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0,
    };

    tasks.forEach(task => {
      if (task.newTask) counts.newTask++;
      if (task.active) counts.active++;
      if (task.completed) counts.completed++;
      if (task.failed) counts.failed++;
    });

    return counts;
  };

  return (
    <div className="bg-[#121212] p-6 mt-6 rounded-2xl space-y-6 overflow-auto h-full shadow-xl border border-gray-700 text-white">
      <div className="flex font-bold bg-gray-700 text-white px-4 py-2 rounded">
        <div className="w-1/5">Employee Name</div>
        <div className="w-1/5">New</div>
        <div className="w-1/5">Active</div>
        <div className="w-1/5">Completed</div>
        <div className="w-1/5">Failed</div>
      </div>

      {Array.isArray(employees) && employees.map((emp, idx) => {
        const counts = getTaskCounts(emp.tasks);

        return (
          <div key={idx} className="flex bg-red-400 px-4 py-2 rounded text-black">
            <div className="w-1/5">{emp.firstname}</div>
            <div className="w-1/5">{counts.newTask}</div>
            <div className="w-1/5">{counts.active}</div>
            <div className="w-1/5">{counts.completed}</div>
            <div className="w-1/5">{counts.failed}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
