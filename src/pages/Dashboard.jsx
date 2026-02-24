// src/pages/Dashboard.jsx
import DashboardLayout from "../components/DashboardLayout";
import { FiCheckSquare, FiFolder } from "react-icons/fi";
import { useEffect, useState } from "react";
import api from "../axios";

export default function Dashboard() {
  const [dashboards, setDashboards] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/dashboard-stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const stats = [
          {
            label: "Projects",
            value: response.data.projects_count || "0",
            icon: <FiFolder size={24} />,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
          },
          {
            label: "Tasks",
            value: response.data.task_count || "0",
            icon: <FiCheckSquare size={24} />,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
          },
        ];
        setDashboards(stats);
      } catch (error) {
        console.log("Unable to fetch dashboard status", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <p>Loading dashboard .....</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-500 mt-1">Here's what's happening today.</p>
      </div>

      {/* 3 Static Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {dashboards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            {/* Icon + Badge */}
            <div className="flex items-center justify-between mb-4">
              <div
                className={`${stat.iconBg} ${stat.iconColor} w-12 h-12 rounded-xl flex items-center justify-center`}
              >
                {stat.icon}
              </div>
            </div>

            {/* Value + Label */}
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
