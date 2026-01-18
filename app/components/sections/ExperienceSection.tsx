"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: "Limsa Company",
      position: "Internship",
      dates: "April 2025 to June 2025",
      icon: "/images/star.svg",
      gradient: "from-[#2C1250] to-purple-800",
    },
    {
      company: "Saidof Group",
      position: "Internship",
      dates: "June 2025 to October 2025",
      icon: "/images/lamp.svg",
      gradient: "from-[#2C1250] to-purple-800",
    },
    {
      company: "Felix IT Solution",
      position: "Software Engineer",
      dates: "October 2025 to Present",
      icon: "/images/cofee.svg",
      gradient: "from-[#2C1250] to-purple-800",
    },
    {
      company: "SerenMebel Furniture Store",
      position: "Junior Developer",
      dates: "September 2024 to December 2024",
      icon: "/images/lab.svg",
      gradient: "from-[#2C1250] to-purple-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-16 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`bg-linear-to-br ${exp.gradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-400/30`}
              >
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10 flex items-center gap-5 ">
                  {/* Icon */}
                  <div className="mb-6">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      width={60}
                      height={60}
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2" >
                    <h3 className="text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-gray-100">{exp.position}</p>
                    <p className="text-sm text-gray-200">{exp.dates}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
