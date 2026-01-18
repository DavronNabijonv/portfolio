"use client";

import { useTranslation } from "../../i18n/useTranslation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

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
    <footer className="bg-gray-900 border-gray-800 border-t transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              FD
            </h3>
            <p className="text-sm text-gray-400">
              Fullstack Developer | Web Engineer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <div className="space-y-2">
              {["home", "about", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="block text-sm transition-colors hover:text-purple-500 text-gray-400"
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
            <h4 className="font-semibold mb-4 text-white">
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
                  className="p-2 rounded-full transition-colors bg-gray-800 text-gray-400 hover:text-purple-500"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 Davronbek Nabijonov. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
