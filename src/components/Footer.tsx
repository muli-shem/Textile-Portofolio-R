import { Instagram, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 px-6 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">© {currentYear} Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
