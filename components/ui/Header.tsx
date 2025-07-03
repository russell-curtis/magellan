'use client'

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
        <div />
        <div className="flex items-center gap-4">
          <div className="w-4 h-4" />
          <Avatar>
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
        </div>
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
      <div />
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="theme-toggle rounded-md p-2 transition-colors hover:bg-muted/50 focus:outline-none focus:ring-0 focus:ring-offset-0"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <Avatar>
          <AvatarFallback>MG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
} 