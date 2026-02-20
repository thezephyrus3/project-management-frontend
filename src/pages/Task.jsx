import { useState, useEffect } from "react";
import api from "../axios";
import DashboardLayout from "../components/DashboardLayout";

function Task() {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/task", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTask(response.data);
      } catch (error) {
        console.log("Error fetching task", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  });

  return <DashboardLayout></DashboardLayout>;
}

export default Task;
