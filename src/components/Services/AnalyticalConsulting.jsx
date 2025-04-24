import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FileText, BarChart2, Thermometer, Activity } from "lucide-react";

const analyticalServices = [
    {
        title: "Power Quality Analysis",
        icon: Activity,
        description: "Disturbances in your electrical power can lead to serious malfunctions in your business equipment. We carry out sophisticated power quality analyses to identify problems. The tests cover everything from grounding issues to harmonics, with the aim of detecting and identifying problems affecting the power supply voltage, current, harmonics and any other factors. Once our analyses are complete, we will recommend the necessary measures for rectifying any issues and preventing any problems.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-180844297.jpg"
    },
    {
        title: "Thermal Imaging",
        icon: Thermometer,
        description: "By identifying potential problems in your critical power systems before they cause downtime or damage, thermal imaging provides a vital extra level of protection. Our teams use infrared cameras to highlight heat patterns emitted from surfaces, so as to identify potentially damaging hotspots such as faulty connections, overloaded circuits and phase imbalances.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-1095734060.jpg"
    },
    {
        title: "Power Surveys",
        icon: FileText,
        description: "We carry out 24/7 onsite surveys of your sites to help you make informed choices about your critical power protection. Our experienced engineers use the latest equipment to record values such as load analysis, voltage, current kW and KVA, before producing a comprehensive report to reinforce the integrity of your power installation.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-946024888.jpg"
    },
    {
        title: "Load Bank Testing",
        icon: BarChart2,
        description: "Our specialized engineers will run full load bank tests to ensure your installation is capable of supporting your full load requirements when necessary. We stimulate maximum load conditions so as to test all the components of your power system, detect any potential system weaknesses and minimize possible risks for the real load. If you want to simulate a load test using the actual working load, we recommend carrying out a performance test.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-1471305121.jpg"
    }
];

const lifecyclePhases = [
    {
        title: "Analysis",
        items: [
            "Compling a complete list of devices (with nominal values)",
            "Logging the age of the systems",
            "Logging all measures implemented throughout their service life",
            "Logging the currently installed software versions",
            "Assessing risks and/or the need to implement additional measures"
        ]
    },
    {
        title: "Inspection",
        items: [
            "Joint plant inspection",
            "Comparing the archived operating data with the installed systems",
            "Improving the assessment of the risk and and/or the need to implement additional measures",
            "Identifying of other connected devices, such as batteries or non-VICare energy supply systems",
            "Listing obsolete system designs that may need upgrades or replacements"
        ]
    },
    {
        title: "Recommendation",
        items: [
            "How have the power requirements changed with respect to the previous inspection?",
            "What are the current loads power supply security demands, and what demands are expected in the future?",
            "Is the uninterruptible power supply currently overrated, or is it expected to be underrated after a few years?",
            "Which of the VICare ProCare maintenance contracts best suits your new requirements?"
        ]
    }
];

const AnalyticalConsulting = () => {
    return (
        <section id="analytical-consulting" className="mb-10">
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
                    Analytical Consulting & Advisory
                </motion.h2>
                
                <motion.div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <motion.h3 
                        variants={fadeIn("up", "tween", 0.2, 0.8)}
                        className="text-2xl font-semibold mb-3"
                    >
                        Minimize risks through professional asset management
                    </motion.h3>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 0.3, 0.8)}
                        className="text-neutral-300 mb-4"
                    >
                        The energy delivered by power supply systems is crucial for maintaining processes and data and guaranteeing the safety of operators and other personnel, therefore a qualified overview of such systems and their maintenance status is essential to ensuring they continue to operate smoothly, and that power is always available when needed. Professional asset management and risk-minimisation measures also represent important ISO certification and business insurance requirements.
                    </motion.p>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 0.4, 0.8)}
                        className="text-neutral-300 mb-6"
                    >
                        The VICare Technologies Lifecycle Consulting Program features a simple, cost-transparent risk minimization package and a detailed servicing schedule for your power supply systems.
                    </motion.p>
                    
                    <motion.h3 
                        variants={fadeIn("up", "tween", 0.5, 0.8)}
                        className="text-2xl font-semibold mb-3"
                    >
                        Plan safely and optimize costs
                    </motion.h3>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 0.6, 0.8)}
                        className="text-neutral-300 mb-5"
                    >
                        The program is divided into the following 3 phases:
                    </motion.p>
                    
                    {/* 3 Phases Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {lifecyclePhases.map((phase, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", "tween", 0.7 + index * 0.1, 0.8)}
                                className="bg-neutral-700/40 p-6 rounded-lg"
                            >
                                <h4 className="text-xl font-bold mb-4">{phase.title}</h4>
                                <ul className="space-y-2">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="flex items-start text-neutral-300">
                                            <span className="text-teal-400 mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.h3 
                        variants={fadeIn("up", "tween", 1.0, 0.8)}
                        className="text-2xl font-semibold mb-5"
                    >
                        We provide Analytical Services for:
                    </motion.h3>
                    
                    {/* Analytical Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {analyticalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", "tween", 1.1 + index * 0.1, 0.8)}
                                className="bg-neutral-700/30 rounded-lg overflow-hidden"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <service.icon className="w-6 h-6 text-teal-400 mr-2" />
                                        <h4 className="text-xl font-bold">{service.title}</h4>
                                    </div>
                                    <p className="text-neutral-300">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AnalyticalConsulting;
