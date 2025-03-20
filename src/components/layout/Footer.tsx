"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import GlobalBordersTravelsLogo from "../logo"
import { useRoute } from "../context/route-context"

export default function Footer() {
  const { navigateTo } = useRoute()

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo(path)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="mb-6">
              <GlobalBordersTravelsLogo variant="light" size="lg" />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Discover the rich heritage, diverse cultures, and breathtaking landscapes of India. Let us guide you
              through an unforgettable journey across this magnificent country.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Visit our ${social.icon.name} page`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Destinations", path: "/destinations" },
                { name: "Experiences", path: "/experiences" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 inline-block"
                    onClick={(e) => handleNavigation(item.path, e)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-white/80">123 Tourism Street, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@globalborders.travel"
                  className="text-white/80 hover:text-amber-400 transition-colors"
                >
                  info@globalborders.travel
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/80 hover:text-amber-400 transition-colors">
                  +91 9050743742
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="w-4/5 mx-auto h-px bg-white/20 my-12"></div>

        <div className="text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Global Borders Travels. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

