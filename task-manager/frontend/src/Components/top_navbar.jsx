
// import {useState} from 'react';
// import reactLogo from './assets/react.svg';
import { Routes, Route, Link } from "react-router-dom";

function Top_nav(){
      <Routes>
        <Route path="/Top_Navbar" element={<Top_nav />} />
      </Routes>

    return(
        <div>
            <nav className="bg-white text-black px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          My Portfolio
        </h1>

        <ul className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">
              Profile
          </Link>

          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-blue-400">
              Services
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
        </div>
    );
}
export default Top_nav;