import React, { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Newsletters from "./pages/Newsletters";
import NavBar from "./components/nav/NavBar";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    // Hook Lenis into GSAP’s ticker for sync
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      options={{ autoRaf: false }}
    >
      <div>
        {/* Fixed Navbar */}
        <div className="fixed top-8 left-[0.5vw] w-[99vw] z-50 pointer-events-auto">
          <NavBar />
        </div>

        {/* Routes */}
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
