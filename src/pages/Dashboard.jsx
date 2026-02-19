// src/pages/Dashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { FiUsers, FiCheckSquare, FiFolder, FiArrowUp } from "react-icons/fi";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Projects",
      value: "24",
      change: "+12%",
      icon: <FiFolder size={24} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      progressColor: "bg-blue-600",
      progress: 75,
    },
    {
      label: "Tasks Completed",
      value: "142",
      change: "+8%",
      icon: <FiCheckSquare size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      progressColor: "bg-green-600",
      progress: 65,
    },
    {
      label: "Team Members",
      value: "18",
      change: "+3 new",
      icon: <FiUsers size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      progressColor: "bg-purple-600",
      progress: 50,
    },
  ];

  const recentActivity = [
    { color: "bg-blue-500", text: "New project 'Website Redesign' was created", time: "2 hours ago" },
    { color: "bg-green-500", text: "Task 'Update API endpoints' was completed", time: "5 hours ago" },
    { color: "bg-purple-500", text: "John invited 3 new team members", time: "Yesterday" },
  ];

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Welcome back, John! 👋
        </h1>
        <p className="text-gray-500 mt-1">Here's what's happening today.</p>
      </div>

      {/* 3 Static Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            {/* Icon + Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.iconBg} ${stat.iconColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                <FiArrowUp size={11} />
                {stat.change}
              </span>
            </div>

            {/* Value + Label */}
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>

            {/* Progress Bar */}
            <div className="mt-4 w-full bg-gray-100 rounded-full h-1.5">
              <div
                className={`${stat.progressColor} h-1.5 rounded-full transition-all duration-500`}
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${item.color}`}></span>
              <div className="flex-1 flex items-center justify-between">
                <p className="text-sm text-gray-700">{item.text}</p>
                <span className="text-xs text-gray-400 ml-4 flex-shrink-0">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
