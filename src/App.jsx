import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Aboutus from "./AboutUS/Aboutus";
import Service from "./ServicePage/Service";
import Navigation1 from "./Components/Navigation1";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation1 />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
