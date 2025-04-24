import { useState } from "react";
import { MessageCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";

function ContactUs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen text-gray-50"
        >
            {/* Contact Form and Info Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full py-12 md:py-24"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none text-white mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Choose how you'd like to connect with us. We offer
                            multiple ways to get in touch.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="bg-[#131212d0] border border-gray-700 rounded-xl overflow-hidden shadow-xl">
                            <div className="flex flex-wrap border-b border-gray-700">
                                <motion.button
                                    whileHover={{
                                        backgroundColor:
                                            "rgba(75, 85, 99, 0.1)",
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex-1 px-4 py-4 font-medium text-sm focus:outline-none flex items-center justify-center ${
                                        activeTab === 0
                                            ? "text-white border-b-2 border-gray-300"
                                            : "text-gray-400 hover:text-gray-300"
                                    }`}
                                    onClick={() => setActiveTab(0)}
                                >
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    <span>Send Message</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{
                                        backgroundColor:
                                            "rgba(75, 85, 99, 0.1)",
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex-1 px-4 py-4 font-medium text-sm focus:outline-none flex items-center justify-center ${
                                        activeTab === 1
                                            ? "text-white border-b-2 border-gray-300"
                                            : "text-gray-400 hover:text-gray-300"
                                    }`}
                                    onClick={() => setActiveTab(1)}
                                >
                                    <Info className="h-5 w-5 mr-2" />
                                    <span>Contact Info</span>
                                </motion.button>
                            </div>

                            <div className="p-6 md:p-8">
                                <AnimatePresence mode="wait">
                                    {/* Tab 1: Contact Form */}
                                    {activeTab === 0 && (
                                        <motion.div
                                            key="form-tab"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className="text-2xl font-bold text-white mb-6">
                                                Send Us a Message
                                            </h3>
                                            <ContactForm />
                                        </motion.div>
                                    )}

                                    {/* Tab 2: Contact Information */}
                                    {activeTab === 1 && (
                                        <motion.div
                                            key="info-tab"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ContactInfo />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Office Locations Map Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full py-12 md:py-24"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                            Our Office Locations
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Visit one of our offices around the world. Our team
                            is ready to assist you with your power distribution
                            and energy management needs.
                        </p>
                    </motion.div>
                    <LocationMap />
                </div>
            </motion.section>
        </motion.div>
    );
}

export default ContactUs;
