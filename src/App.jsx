import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

import Service from "./ServicePage/Service";
// import Navigation1 from "./Components/Navbar1";

import "./App.css";
import Aboutus from "./About/Aboutus";
import BlogPage from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";
import Contact from "./ContactUS/Contact";
import Bookchef from "./BookChef/Bookchef";
import Occasion from "./BookChef/components/Occasion";
import Location from "./BookChef/components/Location";
import Place from "./BookChef/components/Place";
import DateSelector from "./BookChef/components/DateSelector";
import ServicesSchedule from "./BookChef/components/ServicesSchedule";
import ServicesPeople from "./BookChef/components/ServicesPeople";
import ServicesBudget from "./BookChef/components/ServicesBudget";
import ServicesRestriction from "./BookChef/components/ServicesRestriction";
import ServicesSelectRestriction from "./BookChef/components/ServicesSelectRestriction";
import ServicesSummary from "./BookChef/components/ServicesSummary";
import Footer from "./FooterComponents/Footer";
import Navigation from "./Components/Navigation";
import Thanks from "./ContactUS/Thanks/Thanks";

function App() {
  return (
    <Router>
      <Navigation />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-chef" element={<Bookchef />} />
        <Route path="/occasion" element={<Occasion />} />
        <Route path="/location" element={<Location />} />
        <Route path="/place" element={<Place />} />
        <Route path="/date" element={<DateSelector />} />
        <Route path="/schedule/service" element={<ServicesSchedule />} />
        <Route path="/people" element={<ServicesPeople />} />
        <Route path="/budget" element={<ServicesBudget />} />
        <Route path="/restriction" element={<ServicesRestriction />} />
        <Route
          path="/select/restriction"
          element={<ServicesSelectRestriction />}
        />
        <Route path="/summary" element={<ServicesSummary />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
