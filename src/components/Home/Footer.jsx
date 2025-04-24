import Logo from "../../assets/logo.svg?react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 },
    };

    const location = useLocation();

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={footerVariants}
            className="w-full text-neutral-300"
        >
            <div className="container px-4 py-8 mx-auto mt-10 sm:px-6 lg:px-8">
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col-reverse md:flex-row justify-between items-center gap-6"
                >
                    {/* Logo and Company Name */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Logo
                                className="h-8 w-8"
                                aria-label="VICare Technology Logo"
                            />
                        </motion.div>
                        <motion.span
                            variants={itemVariants}
                            className="text-xl tracking-tight text-neutral-100"
                        >
                            VICare Technology
                        </motion.span>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.nav
                        variants={itemVariants}
                        aria-label="Footer navigation"
                        className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 w-full md:w-auto lg:gap-x-8"
                    >
                        {[
                            { label: "Home", href: "/" },
                            { label: "About", href: "/about" },
                            { label: "Services", href: "/services" },
                            { label: "Products", href: "/products" },
                            { label: "Contact", href: "/contact" },
                        ].map((item, index) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className="flex items-center gap-1 text-sm hover:text-white transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </motion.nav>
                </motion.div>

                {/* Divider Line */}
                <motion.div
                    variants={itemVariants}
                    className="h-px bg-neutral-700/80 my-6"
                />

                {/* Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="text-sm text-neutral-500 text-center"
                >
                    {new Date().getFullYear()} VICare Technology. All rights
                    reserved.
                </motion.div>
            </div>
        </motion.footer>
    );
}
