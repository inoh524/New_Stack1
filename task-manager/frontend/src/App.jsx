import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/main_layout";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Users from "./pages/services";
import UserForm from "./pages/contact";
import LoginForm from "./pages/login";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<UserForm />} />
        <Route path="/services" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;