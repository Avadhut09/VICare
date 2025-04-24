import { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call with setTimeout
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setLoading(false);
            setFormStatus("success");

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormStatus(null);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            }, 3000);
        }, 1000);
    };

    return (
        <AnimatePresence mode="wait">
            {formStatus === "success" ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 rounded-xl p-6 md:p-8 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200,
                        }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900 bg-opacity-30 mb-4"
                    >
                        <Check className="h-8 w-8 text-green-400" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-white mb-2"
                    >
                        Message Sent!
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 mb-6"
                    >
                        Thank you for reaching out. Our team will get back to
                        you shortly.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => setFormStatus(null)}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Another Message
                    </motion.button>
                </motion.div>
            ) : (
                <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid gap-6 sm:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-300"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-500 transition-all duration-300"
                                placeholder="John Doe"
                                required
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-500 transition-all duration-300"
                                placeholder="john@example.com"
                                required
                            />
                        </motion.div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                        >
                            <label
                                htmlFor="phone"
                                className="text-sm font-medium text-gray-300"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-500 transition-all duration-300"
                                placeholder="+1 (555) 123-4567"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-2"
                        >
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-500 transition-all duration-300"
                                placeholder="How can we help you?"
                                required
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                    >
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-gray-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-500 transition-all duration-300"
                            placeholder="Tell us about your project or inquiry..."
                            required
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={loading}
                        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                            loading
                                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                : "bg-gray-700 hover:bg-gray-600 text-white hover:scale-105"
                        }`}
                        whileHover={{ scale: loading ? 1 : 1.05 }}
                        whileTap={{ scale: loading ? 1 : 0.95 }}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <Send className="h-5 w-5 mr-2" />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            )}
        </AnimatePresence>
    );
}
