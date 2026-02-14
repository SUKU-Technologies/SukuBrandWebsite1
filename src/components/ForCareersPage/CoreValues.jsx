import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Shield } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Entrust full-cycle implementation of your software product to our experienced BAs, UI/UX designers, developers.",
    },
    {
      icon: Users,
      title: "Leadership",
      description:
        "In balancing our vision and execution, we treat our clients and others with respect. We are ethical and aim to influence positive change through our work.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Our word is everything, our past experience has taught us client trust is built on truth and consistency. We are true to ourselves and others even when no one is watching.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm text-blue-600 text-center capitalize font-bold mb-2">
            Our Core Values
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            An Environment That Inspires
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-lg p-6 shadow hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
