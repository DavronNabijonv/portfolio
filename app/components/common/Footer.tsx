"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { useThemeStore } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const { isDark } = useThemeStore();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DavronNabijonv",
      label: "GitHub",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:nabijonovdavronbek619@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      className={`${
        isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              FD
            </h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Fullstack Developer | Web Engineer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h4
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Navigation
            </h4>
            <div className="space-y-2">
              {["home", "about", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`block text-sm transition-colors hover:text-purple-500 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t("footer.followMe")}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full transition-colors ${
                    isDark
                      ? "bg-gray-800 text-gray-400 hover:text-purple-500"
                      : "bg-gray-200 text-gray-600 hover:text-purple-500"
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          } pt-8`}
        >
          <p
            className={`text-center text-sm ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            © 2026 Davronbek Nabijonov. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
