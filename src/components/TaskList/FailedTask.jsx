import React from 'react';
import { MdAccessTime, MdCancel, MdReportProblem } from 'react-icons/md';

const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[320px] p-5 bg-blue-400 rounded-xl shadow-md text-white'>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='bg-yellow-600 text-xs px-3 py-1 rounded-full uppercase'>{data.category}</h3>
        <span className='text-xs flex items-center gap-1'><MdAccessTime /> {data.taskDate}</span>
      </div>

      <h2 className='text-xl font-bold mt-2'>{data.taskTitle}</h2>

      <div className='text-sm mt-2'>
        <p className='flex items-center gap-2'><MdReportProblem /> Reason: {data.failureReason || "Not provided"}</p>
      </div>

      <p className='text-sm mt-3'>{data.taskDescription}</p>

      <div className="mt-4">
        <button className='w-full bg-red-700 text-white py-2 rounded flex items-center justify-center gap-2'>
          <MdCancel /> Marked Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
