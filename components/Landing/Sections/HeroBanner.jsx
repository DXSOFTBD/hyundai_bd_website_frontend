"use client"
import { Button } from "@mui/material"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroBanner = () => {

    // Animation variants
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

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 1,
                staggerChildren: 0.1
            }
        }
    }
    
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
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
        <section className="relative min-h-screen bg-gradient-to-r from-blue-900 to-black py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/Banner/banner.jpg" // Add a subtle pattern background
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="w-12 h-1 bg-blue-400"></span>
                            <span className="text-blue-400 font-semibold">
                                Professional HVAC Services
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Best Industrial Air <br />
                            <span className="text-blue-400">Conditioning</span> Services
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl mb-8 text-gray-300"
                        >
                            Trust us to deliver reliable solutions, exceptional service,
                            and peace of mind for all your HVAC needs.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4 mb-12"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href="/products"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md transition-all"
                                >
                                    Discover Products
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href="/contact"
                                    className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-md transition-all"
                                >
                                    Contact Us
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-8 max-w-xl">
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
                                    <h3 className="text-4xl font-bold text-blue-400">
                                        {stat.number}
                                    </h3>
                                    <p className="text-gray-300">{stat.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative h-[600px] w-full">
                            {/* Main Image */}
                            <motion.div
                                className="relative z-10 h-full w-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/Products/ac1.png" // Add your AC unit image
                                    alt="Modern AC Unit"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/10 rounded-full"
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
                                className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 rounded-full"
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

