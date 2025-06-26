import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data, onLogout }) => {
  const tasks = Array.isArray(data?.tasks) ? data.tasks : [];

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen overflow-y-auto">
      {/* Header Section */}
      <Header data={data} onLogout={onLogout} />

      {/* Task Statistics Section */}
      <TaskListNumber data={data} />

      {/* Task Cards Section */}
      <TaskList data={{ tasks }} />
    </div>
  );
};

export default EmployeeDashboard;
