"use client"

import { useState, useCallback } from "react"
import { HeroBoot } from "@/components/hero-boot"
import { TopNav } from "@/components/top-nav"
import { TerminalWindow } from "@/components/terminal-window"
import { SkillsWindow } from "@/components/skills-window"
import { ProjectsWindow } from "@/components/projects-window"
import { ExperienceWindow } from "@/components/experience-window"
import { CertificatesWindow } from "@/components/certificates-window"
import { ContactWindow } from "@/components/contact-window"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/portfolio-data"

const WINDOWS = ["projects", "experience", "skills", "contact"] as const
const STAGGER_MS = 200

function FadeIn({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "transition-all duration-500",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(0)

  const handleBootComplete = useCallback(() => {
    WINDOWS.forEach((_, i) => {
      setTimeout(() => setVisibleCount((n) => Math.max(n, i + 1)), i * STAGGER_MS)
    })
  }, [])

  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
        <TerminalWindow id="about" title="{profile.nickname}@portfolio:~ — boot.log" className="min-h-[20rem]">
          <HeroBoot onComplete={handleBootComplete} />
        </TerminalWindow>

        <FadeIn show={visibleCount >= 1}><ProjectsWindow /></FadeIn>
        <FadeIn show={visibleCount >= 2}><ExperienceWindow /></FadeIn>
        <FadeIn show={visibleCount >= 3}>
          <div className="grid gap-6 lg:grid-cols-2">
            <SkillsWindow />
            <CertificatesWindow />
          </div>
        </FadeIn>
        <FadeIn show={visibleCount >= 4}><ContactWindow /></FadeIn>

        {visibleCount >= 4 && (
          <footer className="py-4 text-center text-xs text-muted-foreground">
            <span className="text-terminal-green">$</span> echo &quot;&copy; {new Date().getFullYear()} {profile.nickname}. All rights reserved.&quot;
          </footer>
        )}
      </main>
    </div>
  )
}
