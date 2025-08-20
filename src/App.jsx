import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

import Service from "./ServicePage/Service";
import Navigation1 from "./Components/Navigation1";

import "./App.css";
import Aboutus from "./About/Aboutus";
import BlogPage from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";
import Contact from "./ContactUS/Contact";

function App() {
  return (
    <Router>
      <Navigation1 />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
