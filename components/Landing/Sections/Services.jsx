"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaSnowflake, FaTools, FaFan, FaWrench } from 'react-icons/fa'

import certification1 from "@/public/Services/1-1.jpg"
import certification2 from "@/public/Services/2-1.jpg"
import certification3 from "@/public/Services/3.jpg"
import certification4 from "@/public/Services/4.jpg"
import certification5 from "@/public/Services/5.jpg"
import certification6 from "@/public/Services/6.jpg"

const Services = () => {
  const services = [
    {
      icon: <FaSnowflake className="text-4xl text-blue-500" />,
      title: "AC Installation",
      description: "Professional installation of all types of air conditioning systems for your home or business.",
      image: "/Services/services-1.jpg"
    },
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: "AC Maintenance",
      description: "Regular maintenance services to keep your AC running efficiently all year round.",
      image: "/Services/services-3.jpg"
    },
    {
      icon: <FaFan className="text-4xl text-blue-500" />,
      title: "AC Repair",
      description: "Quick and reliable repair services for all AC brands and models.",
        image: "/Services/ac_repair.jpg"
    },
    {
      icon: <FaWrench className="text-4xl text-blue-500" />,
      title: "Emergency Service",
      description: "24/7 emergency AC repair services when you need them most.",
        image: "/Services/emser.png"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Professional Air Conditioning Services
          </h2>
          <p className="text-gray-600">
            We provide comprehensive HVAC solutions to meet all your cooling needs with expert service and dedication to quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <motion.a
                  href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-blue-600 font-semibold mt-4 group"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule a Service
          </a>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-6 gap-20 py-10 md:py-20'>
            <Image src={certification1} alt=''/>
            <Image src={certification2} alt=''/>
            <Image src={certification3} alt=''/>
            <Image src={certification4} alt=''/>
            <Image src={certification5} alt=''/>
            <Image src={certification6} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Services