import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios";
import DashboardLayout from "../components/DashboardLayout";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log("Error fetching project", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (project) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${project.name}?`,
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/projects/${project.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects(project.filter((p) => p.id !== project.id));

      alert(`Project ${project.name} deleted succesfully`);
    } catch (error) {
      console.log("Error deleting project", error);
      alert("Something went wrong with deleting the project");
    }
  };

  // const handle;

  return (
    <DashboardLayout>
      <div class="overflow-x-auto bg-white border-2 border-solid border-slate-300 rounded-lg">
        {loading ? (
          <p className="text-gray-600">Loading projects.....</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-600">No project found</p>
        ) : (
          <table class="min-w-full text-left text-sm whitespace-nowrap">
            <thead class="uppercase bg-slate-300">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Index
                </th>
                <th scope="col" class="px-6 py-3">
                  Project
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Due date
                </th>
                <th scope="col" class="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project.id} class="hover:bg-neutral-100">
                  <td class="px-6 py-3">{project.id}</td>
                  <td class="px-6 py-3">{project.name}</td>
                  <td class="px-6 py-3">{project.description}</td>
                  <td class="px-6 py-3">{project.due_date}</td>
                  <td class="px-6 py-3 flex gap-2">
                    <button
                      // onClick={() => handleView(project)}
                      type="button"
                      class="inline-block rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    >
                      View
                    </button>
                    <Link
                      to={`/project/edit/${project.id}`}
                      class="inline-block rounded bg-amber-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-amber-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-amber-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-amber-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(project)}
                      type="button"
                      class="inline-block rounded bg-rose-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-rose-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-rose-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-rose-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Project;
