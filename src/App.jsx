import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Home, Navbar } from "./components";
import { AboutUs, OurTeam, TimbuktuCity } from "./pages";

function App() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Listen to changes in location.pathname
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/timbuktu-City" element={<TimbuktuCity />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
