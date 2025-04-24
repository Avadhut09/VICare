import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Features from "./Features";
import About from "./About";
import ProductShowcase from "../Products/ProductShowcase";

const Homepage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <HeroSection />
            <Features />
            <ProductShowcase />
            <About />
        </motion.div>
    );
};

export default Homepage;
