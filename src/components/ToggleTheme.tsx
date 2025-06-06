"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div
      className={`
        fixed bottom-2 right-4 p-2 z-10
      `}
    >
      <Button
        variant="outline"
        className="mx-auto rounded-full"
        size="sm"
        onClick={() => {
          setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"))
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  )
}
