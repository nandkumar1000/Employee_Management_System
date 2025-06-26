import React from 'react';

const Profile = ({ user }) => {
  const activeTasks = user?.tasks?.filter(task => task.active).length || 0;
  const completedTasks = user?.tasks?.filter(task => task.completed).length || 0;
  const failedTasks = user?.tasks?.filter(task => task.failed).length || 0;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user?.firstname || 'N/A'}</p>
        <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
        <p><strong>Total Tasks:</strong> {user?.tasks?.length || 0}</p>
        <p><strong>Active Tasks:</strong> {activeTasks}</p>
        <p><strong>Completed Tasks:</strong> {completedTasks}</p>
        <p><strong>Failed Tasks:</strong> {failedTasks}</p>
        <p><strong>Category-wise Summary:</strong></p>
        <ul className="list-disc list-inside ml-4">
          {Array.from(new Set(user?.tasks?.map(task => task.category))).map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;