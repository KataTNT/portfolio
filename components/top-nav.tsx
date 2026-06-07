"use client"

import { Terminal } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const navItems = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "certificates", href: "#certificates" },
  { label: "contact", href: "#contact" },
]

export function TopNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
        <a href="#about" className="flex items-center gap-2 text-terminal-green">
          <Terminal className="size-4" aria-hidden="true" />
          <span className="text-sm font-bold">{profile.handle}</span>
        </a>
        <ul className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-terminal-green"
              >
                <span className="text-terminal-green">./</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
