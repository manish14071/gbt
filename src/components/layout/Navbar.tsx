"use client"

import type React from "react"
import Link from 'next/link'

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import GlobalBordersTravelsLogo from "../logo"
import { useRoute } from "../context/route-context"
import { cn } from "@/lib/utils"

// Define navigation items with their paths
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Experiences", path: "/experiences" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { currentRoute, navigateTo } = useRoute()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [currentRoute])

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Navigating to:', path)
    navigateTo(path)
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-primary/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center" 
            onClick={(e) => handleNavigation("/", e)}
          >
            <GlobalBordersTravelsLogo variant={isScrolled ? "default" : "light"} size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = currentRoute === item.path || (item.path !== "/" && currentRoute?.startsWith(item.path))

              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={cn("text-white relative group transition-colors", isActive && "text-amber-400")}
                  onClick={(e) => handleNavigation(item.path, e)}
                >
                  <span className="font-medium">{item.name}</span>
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  ></span>
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Updated Animation */}
        <AnimatePresence mode="sync">
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex flex-col p-4 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navigationItems.map((item, index) => {
                  const isActive =
                    currentRoute === item.path || (item.path !== "/" && currentRoute?.startsWith(item.path))

                  return (
                    <motion.a
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      href={item.path}
                      className={cn(
                        "py-2 px-4 rounded transition-colors",
                        isActive ? "bg-white/20 text-amber-400" : "text-white hover:bg-white/10",
                      )}
                      onClick={(e) => {
                        handleNavigation(item.path, e)
                        setIsMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

