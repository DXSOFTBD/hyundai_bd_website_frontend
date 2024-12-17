"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Add your newsletter subscription logic here
        setTimeout(() => {
            setIsSubmitting(false);
            setEmail('');
        }, 1500);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full translate-x-1/2 translate-y-1/2" />
            </motion.div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-black font-medium mb-4 block">
                            Newsletter
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Stay Updated With Us
                        </h2>
                        <motion.div 
                            className="w-24 h-1 bg-white mx-auto mb-8"
                            initial={{ width: 0 }}
                            whileInView={{ width: "6rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        />
                        <p className="text-black text-lg max-w-2xl mx-auto">
                            Subscribe to our newsletter and stay informed about our latest products, 
                            services, and special offers.
                        </p>
                    </motion.div>

                    {/* Newsletter Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative max-w-xl mx-auto"
                    >
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-8 py-6 rounded-full bg-white/10 border-2 border-black text-black placeholder-black focus:outline-none focus:border-black transition-colors"
                                required
                            />
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-colors disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >
                                        <FaPaperPlane className="text-lg" />
                                    </motion.div>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Subscribe
                                        <FaPaperPlane className="text-lg" />
                                    </span>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>

                    {/* Additional Info */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-black text-sm mt-6"
                    >
                        We respect your privacy. Unsubscribe at any time.
                    </motion.p>
                </div>
            </div>

            {/* Animated Background Particles */}
            {[...Array(3)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-4 h-4 bg-white/10 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </section>
    );
};

export default NewsletterSection;