"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
