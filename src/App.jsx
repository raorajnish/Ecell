import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Newsletters from "./pages/Newsletters";
import NavBar from "./components/nav/NavBar";

import { ReactLenis } from "lenis/react";
import TargetCursor from "./components/TargetCursor";

const App = () => {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.5 }}>
      <div>
        <div className="fixed top-8 left-[0.5vw] w-[99vw] z-50 pointer-events-auto">
          <NavBar />
        </div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/newsletters" element={<Newsletters />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
