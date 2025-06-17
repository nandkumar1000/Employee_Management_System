import React from 'react';
import {
  MdPlaylistAddCheck,
  MdPendingActions,
  MdOutlineTaskAlt,
  MdPauseCircleOutline
} from 'react-icons/md';

const TaskListNumber = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5 text-white">
      {/* In Progress */}
      <TaskCard
        count={5}
        title="In Progress"
        icon={<MdPlaylistAddCheck size={28} />}
        bgColor="bg-gradient-to-r from-purple-500 to-indigo-600"
      />

      {/* Pending */}
      <TaskCard
        count={2}
        title="Pending"
        icon={<MdPendingActions size={28} />}
        bgColor="bg-gradient-to-r from-yellow-500 to-yellow-600"
      />

      {/* Completed */}
      <TaskCard
        count={8}
        title="Completed"
        icon={<MdOutlineTaskAlt size={28} />}
        bgColor="bg-gradient-to-r from-green-500 to-emerald-600"
      />

      {/* On Hold */}
      <TaskCard
        count={1}
        title="On Hold"
        icon={<MdPauseCircleOutline size={28} />}
        bgColor="bg-gradient-to-r from-pink-500 to-rose-500"
      />
    </div>
  );
};

// Reusable card component
const TaskCard = ({ count, title, icon, bgColor }) => {
  return (
    <div className={`rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-6 shadow-md ${bgColor} transition-transform hover:scale-105 duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold">{count}</h2>
        {icon}
      </div>
      <h3 className="text-xl font-medium tracking-wide">{title}</h3>
    </div>
  );
};

export default TaskListNumber;
