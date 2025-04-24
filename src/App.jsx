import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Home/Navbar";
import Footer from "../src/components/Home/Footer";
import Homepage from "../src/components/Home/Homepage";
import AboutPage from "../src/components/About/Aboutpage";
import ContactUs from "../src/components/ContactPage/ContactUs";
import ProductCatalogue from "../src/components/Products/ProductCatalogue";
import ServicesPage from "../src/components/Services/ServicesPage";
import ScrollToTop from "../src/constants/ScrollToTop";

export default function App() {
    return (
        <Router>
            <ScrollToTop /> {/* Add this component */}
            <Navbar />
            <div className="px-6 mx-auto">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/products" element={<ProductCatalogue />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}
