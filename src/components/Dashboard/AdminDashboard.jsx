import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import Navbar from '../Navbar';


const AdminDashboard = ({ data, onLogout }) => {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white overflow-y-auto px-4 sm:px-6 md:px-12 py-6 space-y-8">
      <Navbar user={data} onLogout={onLogout} />
      {/* Header */}
      <Header data={data} onLogout={onLogout} />

      {/* Task Creation Section */}
      <CreateTask />

      {/* Task List Section */}
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
