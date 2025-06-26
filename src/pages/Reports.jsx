import React, { useContext } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { AuthContext } from '../context/AuthProvider';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Reports = () => {
  const { employees } = useContext(AuthContext);

  const labels = employees.map(emp => emp.firstname);

  const completedTasks = employees.map(emp => emp.taskNumber?.completed || 0);
  const activeTasks = employees.map(emp => emp.taskNumber?.active || 0);
  const failedTasks = employees.map(emp => emp.taskNumber?.failed || 0);

  const barData = {
    labels,
    datasets: [
      {
        label: 'Completed Tasks',
        data: completedTasks,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      },
      {
        label: 'Active Tasks',
        data: activeTasks,
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
      },
      {
        label: 'Failed Tasks',
        data: failedTasks,
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      }
    ]
  };

  const totalStats = [
    completedTasks.reduce((a, b) => a + b, 0),
    activeTasks.reduce((a, b) => a + b, 0),
    failedTasks.reduce((a, b) => a + b, 0)
  ];

  const pieData = {
    labels: ['Completed', 'Active', 'Failed'],
    datasets: [
      {
        data: totalStats,
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="p-6 text-white max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📊 Reports</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Task Distribution Per Employee</h3>
        <Bar data={barData} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Overall Task Summary</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Reports;