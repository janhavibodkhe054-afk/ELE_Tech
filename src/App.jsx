import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./componenets/ScrollToTop";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Industries from "./pages/Industries/Industries";
import Contact from "./pages/Contact/Contact";
import MechanicalUtilityPiping from "./pages/Services/MechanicalUtilityPiping";
import AssemblyLineInstallation from "./pages/Services/AssemblyLineInstallation";
import ElectricalITInfrastructure from "./pages/Services/ElectricalITInfrastructure";
import SpareParts from "./pages/Services/SpareParts";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animation runs only once
      easing: "ease-in-out",
      offset: 80, // start animation earlier
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services/mechanical-utility-piping"
          element={<MechanicalUtilityPiping />}
        />
        <Route
          path="/services/assembly-line-installation"
          element={<AssemblyLineInstallation />}
        />
        <Route
          path="/services/electrical-it-infrastructure"
          element={<ElectricalITInfrastructure />}
        />
        <Route
          path="/services/spare-parts-procurement"
          element={<SpareParts />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
