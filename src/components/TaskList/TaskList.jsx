import React from 'react';
import AcceptTask from './AcceptTasklist';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  if (!data || !Array.isArray(data.tasks)) {
    console.error('Invalid data passed to TaskList:', data);
    return <p className="text-white">No tasks available.</p>;
  }

  return (
    <div className="h-[55%] overflow-x-auto flex justify-start items-stretch gap-4 w-full py-6 mt-10 flex-nowrap scrollbar-thin scrollbar-thumb-gray-400">
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
