import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/main_layout";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import UserForm from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<UserForm />} />
      </Route>
    </Routes>
  );
}

export default App;