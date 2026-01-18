"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { useThemeStore } from "../../context/ThemeContext";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const { t } = useTranslation();
  const { isDark } = useThemeStore();

  const categories = [
    { key: "frontend", label: t("skills.frontend") },
    { key: "backend", label: t("skills.backend") },
    { key: "databases", label: t("skills.databases") },
    { key: "languages", label: t("skills.languages") },
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
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
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
            className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {t("skills.title")}
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <motion.div key={category.key} variants={itemVariants}>
                <div
                  className={`p-6 rounded-xl ${
                    isDark ? "bg-gray-800" : "bg-gray-50"
                  } hover:shadow-lg transition-shadow`}
                >
                  <h3 className="text-xl font-bold text-purple-500 mb-4">
                    {category.label}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {(Array.isArray(t(`skills.${category.key}Skills`)) ? t(`skills.${category.key}Skills`) : []).map((skill: string) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          isDark
                            ? "bg-purple-900/40 text-purple-300 hover:bg-purple-800/60"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
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
