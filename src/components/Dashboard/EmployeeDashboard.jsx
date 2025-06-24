import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data, onLogout }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen overflow-y-auto">
      <Header data={data} onLogout={onLogout} />
      <TaskListNumber data={data} />
      <TaskList data={data?.tasks || []} />
    </div>
  );
};

export default EmployeeDashboard;
