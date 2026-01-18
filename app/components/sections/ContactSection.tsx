"use client";

import { useState } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import { useThemeStore } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  const { isDark } = useThemeStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      // Send to Telegram (requires a backend endpoint)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.contact_info.phone"),
      value: "+998 91 741 29 20",
      href: "tel:+998917412920",
    },
    {
      icon: Mail,
      label: t("contact.contact_info.email"),
      value: "nabijonovdavronbek619@gmail.com",
      href: "mailto:nabijonovdavronbek619@gmail.com",
    },
    {
      icon: MessageCircle,
      label: t("contact.contact_info.telegram"),
      value: "@ndx_09",
      href: "https://t.me/ndx_09",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="contact"
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
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {t("contact.title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-lg mb-12 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {t("contact.description")}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                      isDark
                        ? "bg-gray-700/50 hover:bg-gray-700"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-purple-500 font-medium">
                        {info.label}
                      </p>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder={t("contact.form.name")}
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500"
                } focus:outline-none`}
              />

              <input
                type="tel"
                name="phone"
                placeholder={t("contact.form.phone")}
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500"
                } focus:outline-none`}
              />

              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all resize-none ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500"
                } focus:outline-none`}
              />

              {/* Status Messages */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 text-green-500 rounded-lg text-center"
                >
                  {t("contact.form.success")}
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 text-red-500 rounded-lg text-center"
                >
                  {t("contact.form.error")}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {loading ? t("contact.form.sending") : t("contact.form.submit")}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
