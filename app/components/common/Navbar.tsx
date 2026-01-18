"use client";

import { useThemeStore } from "../../context/ThemeContext";
import { useLanguageStore } from "../../context/LanguageContext";
import { useTranslation } from "../../i18n/useTranslation";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { isDark, toggleTheme } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md ${
        isDark
          ? "bg-gray-900/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      } border-b transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className={`text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}
            >
              FD
            </Link>
          </motion.div>

          {/* Menu Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium transition-colors hover:text-purple-500 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </motion.div>

          {/* Right Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {/* Language Selector */}
            <div
              className={`flex gap-2 px-3 py-1 rounded-full ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  language === "en"
                    ? "bg-purple-500 text-white"
                    : isDark
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("uz")}
                className={`px-2 py-1 rounded transition-colors ${
                  language === "uz"
                    ? "bg-purple-500 text-white"
                    : isDark
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                UZ
              </button>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-700"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
