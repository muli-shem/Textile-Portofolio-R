"use client"; // 👈 Super important for this file

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect, useState } from "react";

function App() {
  const [isClient, setIsClient] = useState(false);

  // Initialize theme after component mounts (client side only)
  useEffect(() => {
    setIsClient(true); // Mark that we are on client

    const savedTheme = localStorage.getItem("theme") || "system";
    const root = window.document.documentElement;

    if (
      savedTheme === "dark" ||
      (savedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  // Don't render anything until we're sure we're on client
  if (!isClient) return null;

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
