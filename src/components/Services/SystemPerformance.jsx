import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { Shield, Wrench, Zap } from "lucide-react";

const carePackages = [
    {
        title: "Pro Care Safe",
        icon: Shield,
        features: ["Basic coverage", "Annual maintenance", "Technical support"]
    },
    {
        title: "Pro Care Excel",
        icon: Wrench,
        features: ["Enhanced coverage", "Bi-annual maintenance", "Priority support", "Parts discount"]
    },
    {
        title: "Pro Care Premium",
        icon: Zap,
        features: ["Comprehensive coverage", "Quarterly maintenance", "24/7 emergency support", "Free parts replacement", "System optimization"]
    }
];

const SystemPerformance = () => {
    return (
        <section id="system-performance" className="mb-10">
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
                    System Performance Continuity
                </motion.h2>
                
                <motion.div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
                    {/* First section */}
                    <motion.h3 
                        variants={fadeIn("up", "tween", 0.2, 0.8)}
                        className="text-2xl font-semibold mb-3"
                    >
                        Regular, programmed preventive maintenance performed by accredited service engineers
                    </motion.h3>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 0.3, 0.8)}
                        className="text-neutral-300 mb-6"
                    >
                        VICare Technologies leverages its unique expertise in the field of power electronics to offer a full range of services, covering every phase of the product life cycle. Regular, programmed preventive maintenance procedures, performed by accredited service engineers maximize the performance of your equipment, while keeping costs to a minimum. Rapid corrective measures and repairs are essential to increasing the availability of clean power and ensuring business continuity.
                    </motion.p>
                    
                    {/* Maintenance section with diagram - Restructured as requested */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                        <motion.div
                            variants={fadeIn("right", "tween", 0.4, 0.8)}
                            className="flex flex-col justify-center md:col-span-6"
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                                Why is Maintenance Crucial?
                            </h3>
                            
                            <p className="text-neutral-300 text-lg leading-relaxed">
                                Regular, programmed preventive maintenance procedures, performed by accredited service engineers, represent the most cost-effective way of ensuring your power solutions provides the maximum performance.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            variants={fadeIn("left", "tween", 0.5, 0.8)}
                            className="flex items-center justify-center md:col-span-6"
                        >
                            <img 
                                src="https://www.aegps.com/en/wp-content/uploads/2023/07/Bathtub-curve_EN2-1.png" 
                                alt="Bathtub curve diagram showing failure rate over time" 
                                className="rounded-lg w-full max-w-md"
                            />
                        </motion.div>
                    </div>
                    
                    {/* Optimize section and Pro Care packages grouped together */}
                    <motion.div variants={fadeIn("up", "tween", 0.6, 0.8)} className="mb-6">
                        <h3 className="text-2xl font-semibold mb-3">
                            Optimize your power supply system throughout its lifecycle and maximize your investment
                        </h3>
                        
                        <p className="text-neutral-300 mb-3">
                            Pro Care service contracts offer comprehensive maintenance solutions by combining preventative and corrective maintenance with management services.
                        </p>
                        
                        <p className="text-neutral-300 mb-3">
                            Regular, programmed preventive maintenance procedures, performed by accredited service engineers, represent the most cost-effective way of ensuring your power solution provides the maximum performance, while rapid corrective measures and repairs are essential to increasing the availability of clean power and ensuring business continuity.
                        </p>
                        
                        <p className="text-neutral-300 mb-4">
                            Choose the option that best suits your service requirement from the available care packages, for total control of your operating costs.
                        </p>
                        
                        <p className="text-neutral-300 mb-5 text-lg font-medium">
                            There are three level of Pro Care packages:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 px-4 md:px-12">
                            {carePackages.map((pkg, index) => {
                                const IconComponent = pkg.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn("up", "tween", 0.7 + index * 0.1, 0.8)}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center mb-3">
                                            <IconComponent className="w-8 h-8 text-teal-400 mr-3" />
                                            <h4 className="text-xl font-bold">{pkg.title}</h4>
                                        </div>
                                        <ul className="space-y-1 text-neutral-300">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-teal-400 mr-2">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 1.0, 0.8)}
                        className="text-neutral-300"
                    >
                        VICare Technologies service teams carry out a scheduled annual on-site preventive maintenance program, designed to ensure your system operates correctly all times – the program includes physical inspections, functional testing, and performance assessments and on-site numerical diagnostics.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SystemPerformance;
