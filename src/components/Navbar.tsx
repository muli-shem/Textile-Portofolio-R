"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold dark:text-white">
          Rose Kavinya
        </Link>

        <div className="flex items-center">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button className="md:hidden ml-4 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 ml-6">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
              } hover:text-black dark:hover:text-white transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`${
                isActive("/portfolio") ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
              } hover:text-black dark:hover:text-white transition-colors`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
              } hover:text-black dark:hover:text-white transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col space-y-4 px-2">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
              } py-2 hover:text-black dark:hover:text-white transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`${
                isActive("/portfolio") ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
              } py-2 hover:text-black dark:hover:text-white transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-black dark:text-white font-medium" : "text-gray-500 dark:text-gray-400"
              } py-2 hover:text-black dark:hover:text-white transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
