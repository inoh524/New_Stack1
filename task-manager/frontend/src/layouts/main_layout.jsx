import { Outlet } from "react-router-dom";

import Top_nav from "../Components/top_navbar";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Top_nav />
      <Navbar />

      <main className="flex-1 px-30 py-10">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}