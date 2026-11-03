import React from "react";
import "./Sidebar.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Aksiya from "../Aksiya/Aksiya";
import Settings from "../Settings/Settings";
import About from "../About/About";
import Menyu from "../Menyu/Menyu";

function Sidebar() {
  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-logo">
          <img src="/8d6eaf7e-084b-4ce3-aa68-d5e0de6e0771_removalai_preview.png" alt="Fazenda" />
        </div>

        <NavLink className="Link" to="/" end>
          <span className="icon">☷</span>
          <span>Menyu</span>
        </NavLink>

        <NavLink className="Link" to="/About">
          <span className="icon">⌂</span>
          <span>About</span>
        </NavLink>

        <NavLink className="Link" to="/Aksiya">
          <span className="icon">♧</span>
          <span>Promous</span>
        </NavLink>

        <NavLink className="Link" to="/Settings">
          <span className="icon">⚙</span>
          <span>Settings</span>
        </NavLink>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Menyu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Aksiya" element={<Aksiya />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default Sidebar;