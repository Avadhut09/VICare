import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion"; // Add this import

export default function ContactInfo() {
    const locations = [
        {
            id: 1,
            name: "VICare Office",
            address:
                "A/201, Building No. 5 , Millenium Park, M.P. Road, Dombivali West 421202",
            phone: "+91 8048208850",
            email: "info@vicare-tech.com",
        },
        {
            id: 2,
            name: "West Coast Office",
            address: "456 Tech Boulevard, Innovation Valley, CA 94103",
            phone: "+1 (555) 987-6543",
            email: "westcoast@vicare-tech.com",
        },
        {
            id: 3,
            name: "European Office",
            address: "78 Power Street, Energy District, London, UK EC1A 1BB",
            phone: "+44 20 1234 5678",
            email: "europe@vicare-tech.com",
        },
        {
            id: 4,
            name: "Asia Pacific Office",
            address: "9 Energy Tower, Tech Park, Singapore 018956",
            phone: "+65 6123 4567",
            email: "apac@vicare-tech.com",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-6"
            >
                Contact Information
            </motion.h3>

            <motion.div
                variants={containerVariants}
                className="grid gap-8 md:grid-cols-2"
            >
                {locations.map((location, index) => (
                    <motion.div
                        key={location.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gray-750 p-6 rounded-xl"
                    >
                        <h4 className="text-lg font-medium text-white mb-4">
                            {location.name}
                        </h4>
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start"
                            >
                                <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-300">
                                    {location.address}
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start"
                            >
                                <Phone className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-300">
                                    {location.phone}
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start"
                            >
                                <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-300">
                                    {location.email}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-gray-700"
            >
                <h4 className="text-lg font-medium text-white mb-4">
                    Business Hours
                </h4>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-750 p-4 rounded-lg"
                    >
                        <h5 className="font-medium text-white mb-2">
                            Weekdays
                        </h5>
                        <p className="text-gray-300">Monday - Friday</p>
                        <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-750 p-4 rounded-lg"
                    >
                        <h5 className="font-medium text-white mb-2">
                            Saturday
                        </h5>
                        <p className="text-gray-300">10:00 AM - 2:00 PM</p>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-750 p-4 rounded-lg"
                    >
                        <h5 className="font-medium text-white mb-2">Sunday</h5>
                        <p className="text-gray-300">Closed</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
