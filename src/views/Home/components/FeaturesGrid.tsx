import { motion } from 'framer-motion';
import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "bg-cyan-500"
  },
  {
    icon: <FaUserSecret />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "bg-purple-500"
  },
  {
    icon: <BiMessageSquare />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "bg-green-500"
  },
  {
    icon: <FiFileText />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "bg-orange-500"
  },
  {
    icon: <BiTrendingUp />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "bg-pink-500"
  },
  {
    icon: <BsDatabase />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "bg-indigo-500"
  },
  {
    icon: <LuLanguages />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "bg-red-500"
  },
  {
    icon: <BiCreditCard />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "bg-teal-500"
  },
  {
    icon: <BiSearch />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "bg-cyan-500"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Key Features to Power Your Growth
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to scale your practice and reach more patients, powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-cyan-400 duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }} // Stagger animations slightly for each card
              viewport={{ once: true }} // Only animate once when entering the viewport
            >
              {/* Feature Icon */}
              <div className={`text-xl mb-4 text-${feature.color.split('-')[0]}-700`}>
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
