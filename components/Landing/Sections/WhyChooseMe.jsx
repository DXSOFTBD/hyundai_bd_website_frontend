"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUserTie, FaCertificate, FaTools, FaHeadset } from 'react-icons/fa';
import product5 from "@/public/Products/product-5.png"

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaUserTie className="text-4xl text-blue-600" />,
            title: "Expert Technicians",
            description: "Our certified technicians bring years of experience and expertise to every service call."
        },
        {
            icon: <FaCertificate className="text-4xl text-blue-600" />,
            title: "Certified Company",
            description: "We maintain the highest industry standards with professional certifications and training."
        },
        {
            icon: <FaTools className="text-4xl text-blue-600" />,
            title: "Quality Service",
            description: "Delivering exceptional service quality with attention to detail and customer satisfaction."
        },
        {
            icon: <FaHeadset className="text-4xl text-blue-600" />,
            title: "24/7 Support",
            description: "Round-the-clock customer support to address your HVAC needs anytime, anywhere."
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={product5}
                                alt="HVAC Professional"
                                // fill
                                // className="object-contain"
                                // priority
                            />
                            
                            {/* Experience Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-10 right-10 bg-white rounded-full p-6 shadow-xl"
                            >
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-blue-600">25+</span>
                                    <p className="text-sm text-gray-600">Years Experience</p>
                                </div>
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

                    {/* Right Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Section Header */}
                        <div className="mb-12">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-blue-600 font-semibold mb-4 block"
                            >
                                Why Choose Us
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl font-bold mb-6"
                            >
                                We Provide Quality HVAC <br />
                                Services For You
                            </motion.h2>
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="h-1 bg-blue-600"
                            />
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * (index + 1) }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="mt-8 text-gray-600"
                        >
                            Trust our experienced team to deliver exceptional HVAC solutions tailored to your needs.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;