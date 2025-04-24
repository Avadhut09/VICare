import "../../components/Underglow.css";
import { MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 flex flex-col items-center my-6 lg:mt-20 max-w-7xl m-auto"
        >
            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl font-bold"
            >
                Tailored Power
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-sky-500 to-sky-500">
                    {" "}
                    Solutions
                </span>
                , Delivered with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
                    {" "}
                    Precision
                </span>
                ⚡
            </motion.h1>
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl mt-10 text-lg text-center text-neutral-500"
            >
                VICare delivers tailored power solutions that fit your business
                perfectly. Our experts design solutions that are efficient,
                sustainable, and cost-effective. Experience the power of
                precision with VIcare.
            </motion.p>
            <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 text-4xl text-center text-neutral-300"
            >
                Need a custom UPS?
            </motion.h2>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center my-10"
            >
                <div className="relative group">
                    <div className="absolute inset-0.5 px-4 py-3 mx-3 bg-gradient-to-r from-green-200 via-green-300 to-blue-500 rounded-lg blur-lg group-hover:opacity-100 duration-1000 opacity-75 transition group-hover:duration-600 animate-tilt"></div>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center px-4 py-3 mx-3 duration-200 divide-x divide-gray-600 rounded-lg bg-[#121212]"
                        >
                            <span className="pr-2 text-gray-100">
                                Let's Chat!
                            </span>
                            <span className="pl-2 text-gray-100">
                                <MessageSquareText />
                            </span>
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
