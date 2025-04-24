import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn.js";
import { features } from "../../constants/index.jsx";

export default function FeatureSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 5000); // Change feature every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const activeFeature = features[activeIndex];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center font-semibold text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
            >
                We Are
                <span className="bg-gradient-to-tr from-white via-sky-300 to-sky-700 bg-clip-text text-transparent">
                    {" "}
                    VICare
                </span>
            </motion.h2>
            <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-[400px_1fr] lg:gap-12">
                {/* Feature Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-4"
                >
                    {features.map((feature, index) => (
                        <motion.button
                            key={feature.id}
                            onClick={() => setActiveIndex(index)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4 + index * 0.1,
                                type: "spring",
                                stiffness: 300,
                            }}
                            className={cn(
                                "group relative w-full overflow-hidden text-left transition-all duration-500 ease-in-out",
                                "hover:bg-zinc-800/50",
                                activeIndex === index
                                    ? "bg-zinc-800/50 border-4 border-slate-50"
                                    : "border-2 border-transparent",
                                "rounded-lg p-4"
                            )}
                        >
                            {/* Background Image Container */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg"
                                style={{
                                    backgroundImage: `url(${feature.image})`,
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10 p-6">
                                <h3 className="text-2xl font-bold text-white">
                                    {feature.title}
                                </h3>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Feature Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative overflow-hidden rounded-lg"
                >
                    {/* Full Background Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${activeFeature.image})`,
                            }}
                        />
                    </AnimatePresence>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/50" />

                    {/* Content */}
                    <div className="relative z-10 p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-2xl"
                            >
                                <h2 className="text-3xl font-bold text-white">
                                    {activeFeature.title}
                                </h2>
                                <div className="mt-2 h-1 w-24 bg-slate-50" />
                                <p className="mt-6 text-lg text-justify leading-relaxed text-zinc-200">
                                    {activeFeature.content}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
