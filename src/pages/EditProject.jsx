import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import api from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditProject() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch project data from backend API
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get(`/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setName(response.data.name);
        setDescription(response.data.description);
        setDate(response.data.due_date);
      } catch (error) {
        console.log("Unable to view the project", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      await api.put(
        `/projects/${id}`,
        {
          name: name,
          description: description,
          due_date: date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success("Project updated succesfully !");
      navigate("/projects");
    } catch (error) {
      toast.error("Unable to update project", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Edit Projects
        </h1>
        <p className="text-gray-500 mt-1">
          Fill in the details to edit the current projects
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 max-w-3xl">
        <form className="space-y-6" onSubmit={handleUpdate}>
          {/* Project Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="title"
              placeholder="Enter project title"
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
              placeholder="Describe your project..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            ></textarea>
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="dueDate"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
            >
              {loading ? "Updating project..." : "Update project"}
            </button>
            <button
              type="button"
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

export default EditProject;
