import { Outlet } from "react-router-dom";

import Top_nav from "../Components/top_navbar";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export default function MainLayout() {
  return (
    <section>
      <div className="min-h-screen flex flex-col">
      {/* <Top_nav /> */}
      <div className="relative z-30">
        <Navbar/>
      </div>

      <main className="relative flex-1 px-30 py-10 overflow-hidden">
        <Outlet />
         <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[50px_50px]" />
         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,251,0.12),transparent_45%)]"/>
         <div className="pointer-events-none absolute -left-60 top-1/3 h-112 w-md rounded-full bg-blue-500/10 blur-[130px]" />
         <div className="pointer-events-none absolute right-0 top-1/ h-112 w-md rounded-full bg-blue-500/10 blur-[130px]" />
      </main>

      <div className="relative z-10">
        <Footer/>
      </div>

    </div>
    </section>
    
  );
}