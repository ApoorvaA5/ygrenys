import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Settings, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'Manufacturing Expertise',
    description: 'Team of 100+ engineers with hands-on manufacturing process knowledge in castings, forgings, precision machining, and more.',
    color: 'bg-blue-500'
  },
  {
    icon: Settings,
    title: 'Sourcing Solutions',
    description: 'Comprehensive manufacturing feasibility analysis, onsite audits, and integrated quality control systems.',
    color: 'bg-green-500'
  },
  {
    icon: Globe,
    title: 'Global Manufacturing',
    description: 'Revolutionizing manufacturing across the U.S., Canada, Europe, Australia, and Asia with innovative solutions.',
    color: 'bg-purple-500'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Striking the perfect balance between best-in-class quality and competitiveness for true savings.',
    color: 'bg-red-500'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simplifying manufacturing complexities through innovative solutions and global expertise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                20+
              </motion.div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                100+
              </motion.div>
              <p className="text-gray-600">Expert Engineers</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                1000+
              </motion.div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}