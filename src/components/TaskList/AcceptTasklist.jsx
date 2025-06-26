import React from 'react';
import { MdCheckCircle, MdCancel, MdAccessTime, MdPerson, MdPriorityHigh } from 'react-icons/md';

const AcceptTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[320px] p-5 bg-red-400 rounded-xl shadow-md text-white'>
      {/* Task Header */}
      <div className='flex justify-between items-center mb-2'>
        <h3 className='bg-red-600 text-xs px-3 py-1 rounded-full uppercase'>{data.category}</h3>
        <span className='text-xs flex items-center gap-1'><MdAccessTime /> {data.taskDate}</span>
      </div>

      {/* Task Title */}
      <h2 className='text-xl font-bold mt-2'>{data.taskTitle}</h2>

      {/* Task Meta */}
      <div className='text-sm mt-2 space-y-1'>
        <p className='flex items-center gap-2'><MdPerson /> Assigned to: {data.assignedTo || "Unassigned"}</p>
        <p className='flex items-center gap-2'><MdPriorityHigh /> Priority: {data.priority || "Normal"}</p>
      </div>

      {/* Description */}
      <p className='text-sm mt-3'>{data.taskDescription}</p>

      {/* Actions */}
      <div className='flex justify-between gap-2 mt-4'>
        <button className='flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded flex items-center justify-center gap-1'>
          <MdCheckCircle /> Complete
        </button>
        <button className='flex-1 bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded flex items-center justify-center gap-1'>
          <MdCancel /> Fail
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
