import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar5 } from "./components/navbar5";

function App() {
  return (
    <BrowserRouter>
      <Navbar5 />
      <Routes>
        <Route path="/" />
        <Route path="/dashboard" />
        <Route path="/projects" />
        <Route path="/tasks" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
