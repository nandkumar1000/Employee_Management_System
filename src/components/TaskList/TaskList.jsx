import React from 'react';
import {
  MdOutlineDateRange,
  MdOutlinePriorityHigh,
  MdCheckCircleOutline,
  MdAccessTime
} from 'react-icons/md';

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return 'text-green-300';
    case 'Pending': return 'text-yellow-300';
    case 'Failed': return 'text-red-300';
    default: return 'text-gray-200';
  }
};

const TaskList = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error("TaskList expects an array, but got:", data);
    return <div className="text-red-600 p-4">No tasks to display.</div>;
  }

  return (
    <div className="h-[55%] overflow-x-auto flex justify-start items-stretch gap-4 w-full py-6 mt-10 flex-nowrap scrollbar-thin scrollbar-thumb-gray-400">
      {data.map((task, index) => {
        const status = task.completed
          ? 'Completed'
          : task.failed
            ? 'Failed'
            : 'Pending';

        return (
          <div
            key={index}
            className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
          >
            <div className="flex justify-between items-center text-sm mb-4">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-white bg-opacity-20">
                <MdOutlinePriorityHigh size={16} /> {task.category}
              </span>
              <span className="flex items-center gap-1 opacity-90">
                <MdOutlineDateRange size={16} /> {task.date}
              </span>
            </div>

            <h2 className="text-lg font-semibold leading-snug mb-2">{task.title}</h2>
            <p className="text-sm opacity-90 mb-4">{task.description}</p>

            <div className="mt-auto flex flex-col gap-2">
              <div className={`flex items-center gap-2 text-sm font-semibold ${getStatusColor(status)}`}>
                {status === 'Completed' ? <MdCheckCircleOutline size={18} /> : <MdAccessTime size={18} />}
                {status}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
