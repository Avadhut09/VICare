import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "../../assets/logo.svg";
import { navItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const location = useLocation();
    const [hoveredIdx, setHoveredIdx] = useState(null);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80"
        >
            <div className="container relative px-4 mx-auto text-sm">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center flex-shrink-0"
                    >
                        <motion.img
                            className="w-10 h-10 mr-2"
                            src={logo}
                            alt="VI"
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl font-bold tracking-tight"
                        >
                            VICARE
                        </motion.span>
                    </motion.div>
                    <ul className="hidden lg:flex space-x-2 relative ml-14">
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.href;
                            const isHovered = hoveredIdx === index;
                            return (
                                <li
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredIdx(index)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <Link
                                        to={item.href}
                                        className="flex items-center gap-1 px-4 py-2 rounded-lg relative text-white/80 hover:text-white transition-colors duration-200"
                                        style={{ zIndex: 1 }}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        {isHovered && !isActive && (
                                            <motion.div
                                                layoutId="nav-underline-bg"
                                                className="absolute inset-0 bg-white/10"
                                                style={{ borderRadius: 8, zIndex: 0 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline-line"
                                                className="absolute left-4 right-4 bottom-1 h-0.5 bg-white rounded-full"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center lg:hidden"
                    >
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleNavbar}
                            aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileDrawerOpen ? <X /> : <Menu size={24} />}
                        </motion.button>
                    </motion.div>
                </div>
                <AnimatePresence>
                    {mobileDrawerOpen && (
                        <motion.div
                            key="overlay-menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-lg lg:hidden overflow-y-auto"
                            style={{ minHeight: '100vh' }}
                        >
                            <button
                                className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
                                onClick={toggleNavbar}
                                aria-label="Close menu"
                            >
                                <X size={36} />
                            </button>
                            <motion.ul
                                className="flex flex-col items-center justify-center gap-8 w-full py-20"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.08 }
                                    }
                                }}
                            >
                                {navItems.map((item, index) => {
                                    const isActive = location.pathname === item.href;
                                    return (
                                        <motion.li
                                            key={item.href}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                        >
                                            <Link
                                                to={item.href}
                                                onClick={() => setMobileDrawerOpen(false)}
                                                className={`text-3xl md:text-4xl font-semibold transition-colors duration-200 px-6 py-2 rounded-lg relative flex items-center justify-center ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                                style={{ zIndex: 1 }}
                                            >
                                                <span className="relative z-10">{item.label}</span>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="nav-underline-line-mobile"
                                                        className="absolute left-0 right-0 bottom-0 h-1 bg-white rounded-full"
                                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                    />
                                                )}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
