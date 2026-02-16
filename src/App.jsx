import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
