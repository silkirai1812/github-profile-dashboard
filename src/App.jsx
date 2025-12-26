import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

