import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Home, Navbar } from "./components";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
