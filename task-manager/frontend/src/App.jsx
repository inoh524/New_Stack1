import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/main_layout";
import Landing_page from "./pages/landing_page";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Users from "./pages/services";
import LoginForm from "./pages/login";
import UserForm from "./pages/signup";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing_page />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<UserForm />} /> */}
        <Route path="/services" element={<Users />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;