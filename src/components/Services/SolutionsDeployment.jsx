import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const processSteps = [
    {
        title: "Design & Engineering",
        description: "Our expert team analyzes your needs and creates a tailored power solution design that addresses your specific requirements and environment.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-508193478.jpg"
    },
    {
        title: "Installation & Commissioning",
        description: "Professional field engineers ensure your equipment is correctly installed, configured and commissioned to the latest standards and specifications.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/08/iStock-1421665434.jpg"
    },
    {
        title: "Testing & Validation",
        description: "Comprehensive testing procedures validate system performance under various conditions to ensure reliability, safety and operational excellence.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/08/GettyImages-1299443063.jpg"
    }
];

const SolutionsDeployment = () => {
    return (
        <section id="solutions-deployment" className="mb-10">
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-8"
            >
                <motion.h2 
                    variants={fadeIn("up", "tween", 0.1, 0.8)}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    Solutions Deployment & Implementation
                </motion.h2>
                
                <motion.div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <motion.h3 
                        variants={fadeIn("up", "tween", 0.2, 0.8)}
                        className="text-2xl font-semibold mb-3"
                    >
                        Safe, secure and reliable implementation
                    </motion.h3>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 0.3, 0.8)}
                        className="text-neutral-300 mb-5"
                    >
                        VICare Technologies has delivered over 100,000 power systems and commissioned products and complete power solutions for applications ranging from hospitals to nuclear power plants, from offshore rigs to photovoltaic power stations, VICare Technologies is an experienced partner for all you services and power solutions. Thanks to our global coverage, we are able to guarantee that your new equipment is installed correctly and commissioned to the latest standards by professionally trained field service engineers in your region.
                    </motion.p>
                    
                    <motion.h3 
                        variants={fadeIn("up", "tween", 0.4, 0.8)}
                        className="text-2xl font-semibold mb-4"
                    >
                        Our process includes:
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", "tween", 0.5 + index * 0.1, 0.8)}
                                className="bg-neutral-700/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300"
                            >
                                <div className="h-44 overflow-hidden">
                                    <img 
                                        src={step.image} 
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-neutral-300">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SolutionsDeployment;
