import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Project from "./pages/Project";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import EditTask from "./pages/EditTask";
import Task from "./pages/Task";
import AddTask from "./pages/AddTask";
import ProjectDetails from "./pages/ProjectDetails";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  // Protected Routes!
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/projects",
    element: (
      <ProtectedRoute>
        <Project />
      </ProtectedRoute>
    ),
  },

  {
    path: "/project/add",
    element: (
      <ProtectedRoute>
        <AddProject />
      </ProtectedRoute>
    ),
  },

  {
    path: "/project/edit/:id",
    element: (
      <ProtectedRoute>
        <EditProject />
      </ProtectedRoute>
    ),
  },

  {
    path: "/tasks",
    element: (
      <ProtectedRoute>
        <Task />
      </ProtectedRoute>
    ),
  },

  {
    path: "/task/add",
    element: (
      <ProtectedRoute>
        <AddTask />
      </ProtectedRoute>
    ),
  },

  {
    path: "/task/edit/:id",
    element: (
      <ProtectedRoute>
        <EditTask />
      </ProtectedRoute>
    ),
  },

  {
    path: "/project/details/:id",
    element: (
      <ProtectedRoute>
        <ProjectDetails />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
