"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { useThemeStore } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const { t } = useTranslation();
  const { isDark } = useThemeStore();

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-800/50" : "bg-gray-50"
      } transition-colors duration-300`}
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
            className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {t("experience.title")}
          </motion.h2>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {(Array.isArray(t('experience.projects')) ? t('experience.projects') : []).map((exp: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full -translate-x-5"></div>

                <div
                  className={`p-6 rounded-lg border-l-4 border-purple-500 ${
                    isDark ? "bg-gray-700/50" : "bg-white"
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-4">
                    <Briefcase className="text-purple-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-500 mb-1">
                        {exp.company}
                      </h3>
                      <p
                        className={`text-lg font-semibold mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.position}
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>
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
