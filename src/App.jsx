import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Values from "./pages/Values";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div>
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
