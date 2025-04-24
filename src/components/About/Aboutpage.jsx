import {
    Award,
    Battery,
    Cpu,
    Globe,
    Lightbulb,
    Shield,
    Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Note: You'll need to install lucide-react or replace with your preferred icon library

function AboutPage() {
    const [activeStoryPoint, setActiveStoryPoint] = useState(0);
    const storyPointsRef = useRef(null);
    const timerRef = useRef(null);

    const storyPoints = [
        {
            title: "Who we are",
            content:
                "We are a dynamic, independent business that's leveraging years of expertise and knowledge to shape a new future and drive progress in renewable power integration, energy transition and efficiency maximization.",
        },
        {
            title: "What we do",
            content:
                "We combine reliability with innovation to provide a secure and comprehensive portfolio of products, solutions and services that deliver optimal performance that you can rely on for decades.",
        },
        {
            title: "Why this matters",
            content:
                "We are committed to delivering resilient, future-ready power conversion solutions that ensure reliability, efficiency, and long-term sustainability.",
        },
    ];

    // Timer-based rotation
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActiveStoryPoint((prev) => (prev + 1) % storyPoints.length);
        }, 3000); // every 5 seconds

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [storyPoints.length]);

    return (
        <motion.div
            className="flex flex-col min-h-screen text-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.section
                className="relative w-full my-10 py-20 md:py-32 lg:py-40 overflow-hidden rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src="https://online.njit.edu/sites/online/files/iStock-601015838.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-700 bg-opacity-75"></div>{" "}
                    {/* This is the mask/overlay */}
                </div>

                {/* Content */}
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h1
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            About VICare Technologies
                        </motion.h1>
                        <motion.p
                            className="max-w-[600px] text-gray-200 md:text-xl mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Powering the future with reliable energy solutions
                            and innovative power distribution systems. We're
                            committed to delivering excellence in power
                            management and sustainable energy practices.
                        </motion.p>
                        <motion.div
                            className="flex flex-col gap-2 min-[400px]:flex-row"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Our Services
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Contact Us
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Story Section with Scrolling Animation */}
            <motion.section
                ref={storyPointsRef}
                className="w-full py-8 md:py-16 lg:py-24 justify-center min-h-fit relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <motion.div
                            className="flex justify-center lg:justify-start order-last lg:order-first"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            <motion.img
                                initial={{ scale: 0.95, opacity: 0.8 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                whileHover={{ scale: 1.02 }}
                                src="https://www.globalpwr.com/wp-content/uploads/2023/07/ups-battery-service-maintenance.jpg"
                                alt="VICare Technologies Team"
                                className="rounded-lg object-cover shadow-lg sticky top-24"
                            />
                        </motion.div>
                        <motion.div
                            className="space-y-4 min-h-[40dvh]"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            <motion.h2
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                Get to know us better
                            </motion.h2>

                            {/* Progress Indicator */}
                            <motion.div
                                className="w-full h-1 bg-gray-700 rounded-full my-8 relative"
                                initial={{ opacity: 0, width: "0%" }}
                                animate={{ opacity: 1, width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                <motion.div
                                    className="absolute h-1 bg-gray-300 rounded-full"
                                    initial={{
                                        width: `${(1 / storyPoints.length) * 100}%`,
                                    }}
                                    animate={{
                                        width: `${((activeStoryPoint + 1) / storyPoints.length) * 100}%`,
                                    }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            </motion.div>

                            {/* Story Points Content */}
                            <div className="relative h-fit">
                                {storyPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity:
                                                activeStoryPoint === index
                                                    ? 1
                                                    : 0,
                                            y:
                                                activeStoryPoint === index
                                                    ? 0
                                                    : 20,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                        className={`absolute top-0 left-0 w-full ${
                                            activeStoryPoint === index
                                                ? "pointer-events-auto"
                                                : "pointer-events-none"
                                        }`}
                                    >
                                        <motion.h3
                                            className="text-2xl font-bold text-white mb-4"
                                            animate={{
                                                opacity:
                                                    activeStoryPoint === index
                                                        ? 1
                                                        : 0,
                                                y:
                                                    activeStoryPoint === index
                                                        ? 0
                                                        : 10,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.1,
                                            }}
                                        >
                                            {point.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                            animate={{
                                                opacity:
                                                    activeStoryPoint === index
                                                        ? 1
                                                        : 0,
                                                y:
                                                    activeStoryPoint === index
                                                        ? 0
                                                        : 10,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.2,
                                            }}
                                        >
                                            {point.content}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Mission & Vision Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full py-8 md:py-16 lg:py-24"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                    >
                        <div className="space-y-2">
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl text-white"
                            >
                                Mission & Vision
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg"
                            >
                                Guiding principles that drive our innovation and
                                service excellence
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                                className="rounded-lg border border-gray-300 p-6 shadow-md"
                            >
                                <div className="mb-4">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6,
                                        }}
                                        className="flex items-center gap-2 text-xl font-bold text-white"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.6,
                                            }}
                                        >
                                            <Lightbulb className="w-6 h-6 text-gray-300" />
                                        </motion.div>
                                        Our mission
                                    </motion.h3>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    className="text-gray-300"
                                >
                                    We are a dynamic, independent business
                                    that's leveraging years of expertise and
                                    knowledge to shape a new future and drive
                                    progress in renewable power integration,
                                    energy transition and efficiency
                                    maximization.
                                </motion.p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                                className="rounded-lg border border-gray-300 p-6 shadow-md"
                            >
                                <div className="mb-4">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6,
                                        }}
                                        className="flex items-center gap-2 text-xl font-bold text-white"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.6,
                                            }}
                                        >
                                            <Shield className="w-6 h-6 text-gray-300" />
                                        </motion.div>
                                        What we do
                                    </motion.h3>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    className="text-gray-300"
                                >
                                    We combine reliability with innovation to
                                    provide a secure comprehensive portfolio of
                                    products, solutions and services deliver
                                    optimal performance that you can rely on for
                                    decades.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Core Values Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full py-8 md:py-16 lg:py-24"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                    >
                        <div className="space-y-2">
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl text-white"
                            >
                                Core Values
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            >
                                The principles that guide our decisions and
                                define our company culture
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="pb-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <Shield className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Reliability
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    We deliver dependable solutions that our
                                    clients can count on, 24/7/365.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="pb-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <Zap className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Innovation
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    We continuously push the boundaries of
                                    technology to create better energy
                                    solutions.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="pb-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <Award className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Excellence
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    We strive for the highest standards in
                                    everything we do, from engineering to
                                    customer service.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="pb-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                >
                                    <Battery className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Sustainability
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    We are committed to developing energy
                                    solutions that minimize environmental
                                    impact.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Services Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full py-8 md:py-16 lg:py-24"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                    >
                        <div className="space-y-2">
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl text-white"
                            >
                                Our Services
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            >
                                Comprehensive energy solutions tailored to your
                                needs
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="mb-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <Cpu className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    UPS Modules
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Uninterrupted Power Supply Solutions
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    Our state-of-the-art UPS modules provide
                                    reliable backup power for critical
                                    applications, ensuring business continuity
                                    and protecting sensitive equipment from
                                    power disruptions.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="mb-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <Zap className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Power Distribution
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Efficient Energy Management
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    We design and implement advanced power
                                    distribution systems that optimize energy
                                    flow, reduce waste, and ensure consistent
                                    power quality across your facility or
                                    infrastructure.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="rounded-lg border border-gray-300 p-6 shadow-md"
                        >
                            <div className="mb-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <Battery className="h-10 w-10 mb-2 text-gray-100" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white">
                                    Energy Solutions
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Sustainable Power Technologies
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-300">
                                    Our comprehensive energy solutions integrate
                                    renewable sources, storage systems, and
                                    smart grid technologies to create resilient,
                                    sustainable, and cost-effective power
                                    infrastructures.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
}

export default AboutPage;
