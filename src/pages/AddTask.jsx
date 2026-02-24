import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import api from "../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddTask() {
  const [projectId, setProjectId] = useState("");
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const taskData = {
        project_id: projectId,
        title: title,
        description: description,
        due_date: date,
      };

      const response = await api.post("/tasks", taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Task created successfully:", response.data);

      navigate("/tasks");
    } catch (error) {
      toast.error("❌ Error adding task:", error.response?.data);

      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const errorList = Object.entries(errors)
          .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
          .join("\n");
        alert(`Validation errors:\n${errorList}`);
      } else {
        alert("Failed to add task!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Add Task
        </h1>
        <p className="text-gray-500 mt-1">
          Fill in the details to add new task to project
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 max-w-3xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Project Dropdown */}
          <div>
            <label
              htmlFor="project"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Project <span className="text-red-500">*</span>
            </label>
            <select
              id="project"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option value="">Select a project</option> {/* Default option */}
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          {/* Task Name */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Task Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your task..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            />
            <p className="text-xs text-gray-400 mt-1">Maximum 500 characters</p>
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Due Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dueDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg disabled:opacity-50"
            >
              {loading ? "Adding task..." : "Create Task"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default AddTask;
