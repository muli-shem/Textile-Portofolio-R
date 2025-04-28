"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real app, you would send the form data to your backend or a form service
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitError("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-white fade-in">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="slide-up">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Get in Touch</h2>

          {submitSuccess ? (
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 p-4 rounded-md mb-6">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              {submitError && <div className="text-red-500 text-sm">{submitError}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md disabled:bg-gray-400 dark:disabled:bg-gray-600"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Info */}
        <div className="slide-in-right">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="text-gray-500 dark:text-gray-400 mt-1" size={20} />
              <div>
                <h3 className="font-medium dark:text-white">Email</h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  rosekavinyamwathi@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-gray-500 dark:text-gray-400 mt-1" size={20} />
              <div>
                <h3 className="font-medium dark:text-white">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  +254 111415514
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <h3 className="font-medium mb-4 dark:text-white">Connect on Social Media</h3>
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  <Instagram size={20} className="mr-2" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  <Linkedin size={20} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
