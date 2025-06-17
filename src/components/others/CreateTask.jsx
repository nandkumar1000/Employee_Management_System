import React from 'react';
import {
  MdTitle,
  MdDateRange,
  MdPerson,
  MdCategory,
  MdDescription,
  MdAddTask,
  MdPriorityHigh,
  MdOutlineCheckCircle,
  MdAttachFile,
  MdLabel,
} from 'react-icons/md';

const CreateTask = () => {
  return (
    <div className="p-8 mt-8 rounded-2xl shadow-2xl bg-[#1a1a1a] border border-white/10 text-white">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 flex items-center gap-2">
        <MdAddTask size={24} /> Create New Task
      </h2>

      <form className="flex flex-col gap-10">
        {/* Form Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {/* Task Title */}
            <InputWithLabel
              icon={<MdTitle size={18} />}
              label="Task Title"
              placeholder="Design dashboard layout"
            />

            {/* Due Date */}
            <InputWithLabel
              icon={<MdDateRange size={18} />}
              label="Due Date"
              type="date"
            />

            {/* Assign To */}
            <InputWithLabel
              icon={<MdPerson size={18} />}
              label="Assign To"
              placeholder="John Doe"
            />

            {/* Category */}
            <InputWithLabel
              icon={<MdCategory size={18} />}
              label="Category"
              placeholder="Frontend / Backend / Design"
            />

            {/* Priority */}
            <InputWithLabel
              icon={<MdPriorityHigh size={18} />}
              label="Priority"
              placeholder="High / Medium / Low"
            />

            {/* Status */}
            <InputWithLabel
              icon={<MdOutlineCheckCircle size={18} />}
              label="Status"
              placeholder="Pending / In Progress / Completed"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Description */}
            <label className="block text-sm text-gray-400 flex items-center gap-2">
              <MdDescription size={18} /> Description
            </label>
            <textarea
              rows={10}
              placeholder="Write detailed task description here..."
              className="w-full p-4 rounded-md bg-[#2a2a2a] text-sm text-white placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-blue-500 transition"
            />

            {/* Tags (static UI) */}
            <div>
              <label className="block text-sm mb-1 text-gray-400 flex items-center gap-2">
                <MdLabel size={18} /> Tags
              </label>
              <div className="flex gap-2 flex-wrap bg-[#2a2a2a] p-2 rounded-md">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">UI</span>
                <span className="text-xs bg-green-600 px-3 py-1 rounded-full">Urgent</span>
                <span className="text-xs bg-yellow-500 px-3 py-1 rounded-full">Admin</span>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className='block text-sm mb-1 text-gray-400 flex items-center gap-2'>
                <MdAttachFile size={18} /> Attachment
              </label>
              <input
                type="file"
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 bg-[#2a2a2a] p-2 rounded-md text-sm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
          >
            <MdAddTask size={20} /> Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable input with icon and label
const InputWithLabel = ({ icon, label, placeholder = '', type = 'text' }) => (
  <div>
    <label className="block text-sm mb-1 text-gray-400 flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-md bg-[#2a2a2a] text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  </div>
);

export default CreateTask;
