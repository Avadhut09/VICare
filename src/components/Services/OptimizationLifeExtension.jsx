import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { Settings, Wrench, RefreshCw, RotateCw, Battery } from "lucide-react";

const serviceCategories = [
    {
        title: "Repair (in-house & on-site)",
        icon: Wrench,
        description: "Our equipment is designed to keep downtime to an absolute minimum during every phase of its life cycle. In the unlikely event of a system failure, rapid repairs are essential, and thanks to our worldwide spare parts network, we are able to guarantee fast, efficient support. Logging all repairs carried out on our products allows us to plot trends indicating the number and frequency of breakdown events. With almost no downtime or cost of repair, it is possible to extend equipment life time cycles even further, thanks to our refurbishment solutions."
    },
    {
        title: "Refurbishment",
        icon: RefreshCw,
        description: "When carrying out annual maintenance, our field service engineers will conduct a thorough inspection of the critical components of your equipment. When it becomes necessary, normally after the 10th operational year, VICare Technologies will provide a refurbishment package designed to extend system working life and eliminate high replacement costs. The package involves replacing fans, capacitors and critical PCBs, thereby providing an additional decade of reliable power."
    },
    {
        title: "Retrofits",
        icon: Settings,
        description: "In situations where your VICare Technologies equipment is part of a larger installation, replacing cabinets can be costly, either due to the location of the site or the need to maintain a certain aesthetic. VICare Technologies has developed a series of retrofit kits that can be used to replace either the control part or the entire control and power section of the DC charger seamlessly and in compliance with our quality standards. Thanks to the limited weight of the replacement parts, these kits represent a highly cost-effective solution, especially in the case of remote or offshore locations."
    },
    {
        title: "Replacement",
        icon: RotateCw,
        description: "When refurbishment is no longer an option, due to changes in system efficiency or load requirements, or for economic reasons, we also offer a full equipment replacement service, even providing a temporary solution to protect your valuable loads in the meantime, if required."
    }
];

const batteryServices = [
    {
        title: "Battery Testing",
        description: "Our battery testing procedure, which begins with a full battery installation survey to verify that your new systems conform to all procurement specifications, involves a comprehensive range of tests designed to ensure that batteries meet the required specifications and continue to deliver top performance, while also identifying any potential faulty cells. With VICare Technologies you can be certain your batteries will continue to deliver peak performance for as long as possible.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-968898242-e1693318276210.jpg"
    },
    {
        title: "Discharge Testing",
        description: "To comply with quality management systems, such as ISO9000, it is necessary to demonstrate that your UPS batteries are performing correctly. To facilitate this process, our engineers can perform discharge testing in order to produce the required documentation. Carrying out these tests enables them to determine the condition of each battery and its ability to perform to specification.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-1420149807.jpg"
    },
    {
        title: "Impedance Testing",
        description: "Internal battery impedance increases with age and discharge and may eventually lead to failure. Our engineers are trained to perform advanced impedance testing, measuring internal resistance and gathering data on corrosion levels or other defects. Our fast and reliable tests are invaluable in monitoring battery performance, helping to minimize the risk of failure and reinforce reliability.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-1372465208-e1691144875564.jpg"
    },
    {
        title: "Battery Replacement & Disposal",
        description: "Strict regulations apply when replacing and disposing of UPS batteries. We are fully licensed to remove and dispose of batteries in accordance with the applicable environmental legislation. Our personnel, who are trained in the proper handling of hazardous materials, we will collect and remove your old batteries in approved containers before ensuring they are disposed of safely and promptly.",
        image: "https://www.aegps.com/en/wp-content/uploads/2023/07/GettyImages-1328457092-1-e1695311541781.jpg"
    }
];

const OptimizationLifeExtension = () => {
    return (
        <section id="optimization-life-extension" className="mb-10">
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
                    Optimization & Life Extension
                </motion.h2>
                
                <motion.div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <motion.h3 
                        variants={fadeIn("up", "tween", 0.2, 0.8)}
                        className="text-2xl font-semibold mb-3"
                    >
                        Extending the lifetime of your power supply systems
                    </motion.h3>
                    
                    <motion.p 
                        variants={fadeIn("up", "tween", 0.3, 0.8)}
                        className="text-neutral-300 mb-8"
                    >
                        For more than 60 years, VICare Technologies has been providing a wide range of repair, refurbishment and replacement services all over the world. Thanks to our dedicated power solution experts and 24-hour emergency hotline, we can provide you with rapid quotations and recommendations for repairing or refurbishing your power systems, or any other services and solutions you may require.
                    </motion.p>
                    
                    {/* Service Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {serviceCategories.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", "tween", 0.4 + index * 0.1, 0.8)}
                                className="bg-neutral-700/30 rounded-lg p-6"
                            >
                                <div className="flex items-center mb-3">
                                    <service.icon className="w-8 h-8 text-teal-400 mr-3" />
                                    <h4 className="text-xl font-bold">{service.title}</h4>
                                </div>
                                <p className="text-neutral-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Battery Services Section */}
                    <motion.div
                        variants={fadeIn("up", "tween", 0.8, 0.8)}
                        className="mb-8"
                    >
                        <div className="flex items-center mb-3">
                            <Battery className="w-8 h-8 text-teal-400 mr-3" />
                            <h3 className="text-2xl font-semibold">Battery Services</h3>
                        </div>
                        
                        <p className="text-neutral-300 mb-8">
                            Protecting your standby power through rigorous battery maintenance. Batteries represent the weakest link in any modern critical power systems. As well as having a finite lifespan, poor maintenance and extreme operational conditions can result in premature failure, compromising your standby power and increasing the risk of expensive downtime. The high cost of batteries adds to the pressure, which means that proper maintenance is crucial to safeguarding your long-term investment. Thanks to our long experience in the field of critical power solutions, VICare Technologies was the first company to recognize the need for a rigorous, ongoing battery maintenance program, performed by trained specialists. From robust testing to safe battery disposal, our dedicated experts will ensure your batteries deliver the optimum performance and longevity to maximize your uptime.
                        </p>
                    </motion.div>
                    
                    {/* Battery Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {batteryServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", "tween", 0.9 + index * 0.1, 0.8)}
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
                                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
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

export default OptimizationLifeExtension;
