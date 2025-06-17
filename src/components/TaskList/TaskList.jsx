import React from 'react';
import { MdOutlineDateRange, MdOutlinePriorityHigh, MdOutlinePerson, MdCheckCircleOutline, MdAccessTime } from 'react-icons/md';

const TaskList = () => {
  const tasks = [
    {
      title: "Design the Landing Page",
      desc: "Revamp the main landing page for mobile responsiveness and modern UI.",
      priority: "High",
      date: "2024-02-20",
      status: "In Progress",
      assignedTo: "Nand Kumar",
      color: "from-yellow-400 to-yellow-300"
    },
    {
      title: "Fix User Login Bug",
      desc: "Resolve login redirect issue affecting some users.",
      priority: "Medium",
      date: "2024-02-22",
      status: "Pending",
      assignedTo: "Nand Kumar",
      color: "from-green-400 to-green-300"
    },
    {
      title: "Database Optimization",
      desc: "Improve query performance for dashboard analytics.",
      priority: "Low",
      date: "2024-02-18",
      status: "Completed",
      assignedTo: "Nand Kumar",
      color: "from-gray-400 to-gray-300"
    },
    {
      title: "UI/UX Review",
      desc: "Conduct a UI audit and document pain points in navigation.",
      priority: "High",
      date: "2024-02-25",
      status: "On Hold",
      assignedTo: "Nand Kumar",
      color: "from-orange-400 to-orange-300"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600';
      case 'In Progress':
        return 'text-blue-600';
      case 'Pending':
        return 'text-yellow-700';
      case 'On Hold':
        return 'text-pink-600';
      default:
        return 'text-gray-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-600';
      case 'Medium':
        return 'bg-yellow-600';
      case 'Low':
        return 'bg-green-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div
      id='TaskList'
      className='h-[55%] overflow-x-auto flex justify-start items-stretch gap-4 w-full py-6 mt-10 flex-nowrap scrollbar-thin scrollbar-thumb-gray-400'
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br ${task.color} text-white shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]`}
        >
          {/* Top Row: Priority + Date */}
          <div className="flex justify-between items-center text-sm mb-4">
            <span className={`flex items-center gap-1 px-2 py-0.5 rounded ${getPriorityColor(task.priority)}`}>
              <MdOutlinePriorityHigh size={16} /> {task.priority}
            </span>
            <span className="flex items-center gap-1 opacity-90">
              <MdOutlineDateRange size={16} /> {task.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold leading-snug mb-2">{task.title}</h2>

          {/* Description */}
          <p className="text-sm opacity-90 mb-4">{task.desc}</p>

          {/* Footer: Assigned To + Status */}
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <MdOutlinePerson size={18} /> {task.assignedTo}
            </div>
            <div className={`flex items-center gap-2 text-sm font-semibold ${getStatusColor(task.status)}`}>
              {task.status === 'Completed' ? <MdCheckCircleOutline size={18} /> : <MdAccessTime size={18} />}
              {task.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
