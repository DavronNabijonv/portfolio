"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { useThemeStore } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
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
            {t("projects.title")}
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(Array.isArray(t('projects.portfolio')) ? t('projects.portfolio') : []).map((project: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                {/* Project Content */}
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-purple-500 mb-2">
                    {project.name}
                  </h3>

                  <p
                    className={`mb-6 flex-grow ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-purple-900/30 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
                    >
                      {t("projects.viewMore")}
                      <ExternalLink size={18} />
                    </motion.a>
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
