"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Mail } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative"
        >
          {/* Left side - Image with Shadow */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center relative"
          >
            <div className="relative w-54 h-54 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
              {/* Background Shadow Effect */}
              <div className="bg-shadow"></div>

              {/* Image */}
              <Image
                src="/images/userImage.png"
                alt="Ibrahim Memon"
                width={300}
                height={300}
                className="relative z-10 rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div>
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-purple-500 font-semibold text-lg mb-6"
            >
              {t("hero.greeting")}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              {t("hero.name")}
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6"
            >
              {t("hero.title")}
            </motion.h2>

            {/* Company Info */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg mb-6 font-semibold text-gray-300"
            >
              Currently, I'm a Software Engineer at{" "}
              <span className="text-purple-500">Felix IT Company</span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg max-w-2xl mb-12 text-gray-400"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                {t("hero.cta")}
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg flex items-center gap-2 transition-all hover:bg-purple-500 hover:text-white"
              >
                {t("hero.contact")}
                <Mail size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 mt-12">
              <motion.a
                href="https://github.com/DavronNabijonv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-3 rounded-full transition-all bg-gray-800 text-gray-400 hover:text-purple-500 hover:bg-gray-700"
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-20"
        >
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center p-2 text-gray-400">
            <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
