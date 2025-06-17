import React from 'react';
import { FiUser, FiLayers } from 'react-icons/fi';

const tasks = [
  { name: 'Nand Kumar Sahu', role: 'UI/UX Designer', status: 'In Progress', color: 'bg-blue-500' },
  { name: 'Nand Kumar Sahu', role: 'UI/UX Designer', status: 'Pending', color: 'bg-yellow-400' },
  { name: 'Nand Kumar Sahu', role: 'UI/UX Designer', status: 'Completed', color: 'bg-green-500' },
  { name: 'Nand Kumar Sahu', role: 'UI/UX Designer', status: 'On Hold', color: 'bg-pink-500' },
];

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-700',
  'Pending': 'bg-yellow-100 text-yellow-800',
  'Completed': 'bg-green-100 text-green-800',
  'On Hold': 'bg-pink-100 text-pink-800',
};

const AllTask = () => {
  return (
    <div className="bg-[#121212] p-6 mt-6 rounded-2xl space-y-6 overflow-auto h-full shadow-xl border border-gray-700">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`relative ${task.color} py-5 px-6 rounded-xl text-white flex justify-between items-center shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/10`}
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <FiUser className="text-white text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{task.name}</h2>
              <div className="flex items-center gap-1 text-sm opacity-80">
                <FiLayers className="text-sm" />
                <span>{task.role}</span>
              </div>
            </div>
          </div>

          <span
            className={`text-xs font-semibold px-4 py-1 rounded-full ${statusColors[task.status]}`}
          >
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
