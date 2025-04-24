import { motion } from "framer-motion";
import SolutionsDeployment from "./SolutionsDeployment";
import SystemPerformance from "./SystemPerformance";
import AnalyticalConsulting from "./AnalyticalConsulting";
import OptimizationLifeExtension from "./OptimizationLifeExtension";
import { fadeIn } from "../../utils/motion";

const ServicesPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto py-6 px-4 max-w-7xl"
        >
            <motion.h1 
                variants={fadeIn("up", "tween", 0.1, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-4 mt-10 text-center"
            >
                Our Services
            </motion.h1>
            
            <motion.p
                variants={fadeIn("up", "tween", 0.2, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-lg text-center mb-8 max-w-3xl mx-auto"
            >
                Comprehensive power solutions tailored to your specific requirements, 
                ensuring reliability, efficiency, and longevity for your critical systems.
            </motion.p>
            
            <div className="space-y-12">
                <SolutionsDeployment />
                <SystemPerformance />
                <AnalyticalConsulting />
                <OptimizationLifeExtension />
            </div>
        </motion.div>
    );
};

export default ServicesPage;
