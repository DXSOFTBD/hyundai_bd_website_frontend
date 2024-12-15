"use client"
import { Button } from "@mui/material"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroBanner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-r from-blue-900 to-black py-12 md:py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/Banner/banner.jpg"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-white z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2 mb-4 md:mb-6"
                        >
                            <span className="w-12 h-1 bg-blue-400"></span>
                            <span className="text-blue-400 font-semibold">
                                Professional HVAC Services
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                        >
                            Best Industrial Air <br />
                            <span className="text-blue-400">Conditioning</span> Services
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300"
                        >
                            Trust us to deliver reliable solutions, exceptional service,
                            and peace of mind for all your HVAC needs.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    variant="contained"
                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-md transition-all"
                                >
                                    Discover Products
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    variant="outlined"
                                    className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-md transition-all"
                                >
                                    Contact Us
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl">
                            {[
                                { number: "25+", text: "Years Experience" },
                                { number: "500+", text: "Happy Clients" },
                                { number: "100%", text: "Satisfaction" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center lg:text-left"
                                >
                                    <h3 className="text-2xl md:text-4xl font-bold text-blue-400">
                                        {stat.number}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-300">{stat.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative order-first lg:order-last"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full">
                            {/* Main Image */}
                            <motion.div
                                className="relative z-10 h-full w-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/Products/ac1.png"
                                    alt="Modern AC Unit"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-40 md:w-72 h-40 md:h-72 bg-blue-400/10 rounded-full"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-32 md:w-60 h-32 md:h-60 bg-blue-600/10 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
