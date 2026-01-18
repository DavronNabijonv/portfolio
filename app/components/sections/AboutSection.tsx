"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-12 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {t("about.title")}
          </motion.h2>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              {t("about.description")}
            </p>

            <motion.p
              variants={itemVariants}
              className="text-xl font-semibold text-purple-500"
            >
              {t("about.location")}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: "Projects", value: "20+" },
              { label: "Experience", value: "3+ Years" },
              { label: "Technologies", value: "15+" },
              { label: "Clients", value: "Global" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-gray-700/50 shadow-sm"
              >
                <div className="text-2xl font-bold text-purple-500 mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm text-gray-400`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
