import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingPfpCards } from "../ui/InfiniteMovingPfpCards";
import OurTeam from "../ui/OurTeam";
import Slider from "../ui/Slider";
import user1 from "../../assets/pfp/user1.png";
import user2 from "../../assets/pfp/user2.png";
import user3 from "../../assets/pfp/user3.png";
import user4 from "../../assets/pfp/user4.png";
import user5 from "../../assets/pfp/user5.png";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.main variants={itemVariants}>
                <Slider
                    images={images1}
                    width="150px"
                    height="150px"
                    quantity={7}
                />
            </motion.main>
            <div className="mt-20 tracking-wide">
                <motion.div variants={itemVariants} className="mb-32">
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
                    >
                        Meet Our Team
                    </motion.h2>
                    <OurTeam team={teamData} />
                    <div className="flex flex-wrap justify-center"></div>
                </motion.div>

                {/* Testimonials section with its own viewport trigger */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl lg:text-6xl text-center my-16 lg:my-20"
                    >
                        Hear from our clients
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center"
                    >
                        <InfiniteMovingPfpCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;

const images1 = [
    "brandlogo/brand1.svg",
    "brandlogo/brand2.svg",
    "brandlogo/brand3.svg",
    "brandlogo/brand4.svg",
    "brandlogo/brand5.svg",
    "brandlogo/brand6.svg",
    "brandlogo/brand7.svg",
];
const testimonials = [
    {
        quote: "If I must live in this nightmare, my enemies might as well join me.",
        pfp: user1,
        name: "Omen",
        title: "Wraith of Shadows",
    },
    {
        quote: "Sometimes you gotta get your hands dirty. What do you say, we get our hands dirty?",
        pfp: user2,
        name: "Yoru",
        title: "The Rift Walker",
    },
    {
        quote: "They have no idea how heartless I am. It is a shame they cannot see the beauty in the darkness, that they fear it.",
        pfp: user3,
        name: "Reyna",
        title: "The Vengeful Specter",
    },
    {
        quote: "Remember everyone, the fight may be temporary, but the scars, they last forever.",
        pfp: user4,
        name: "Brimstone",
        title: "Tactical Titan",
    },
    {
        quote: "Sometimes you have to throw caution to the wind. But I bring the storm.",
        pfp: user5,
        name: "Neon",
        title: "Thunderbolt Enforcer",
    },
];

const teamData = [
    {
        avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Martiana dialan",
        title: "Product designer",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Micheal colorand",
        title: "Software engineer",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Brown Luis",
        title: "Full stack engineer",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        name: "Lysa sandiago",
        title: "Head of designers",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Daniel martin",
        title: "Product designer",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
];
