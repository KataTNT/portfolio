"use client"

import { useEffect, useState } from "react"
import { profile } from "@/lib/portfolio-data"

const bootLines = [
  "[ OK ] Mounting infrastructure volumes...",
  "[ OK ] Starting kubelet.service...",
  "[ OK ] Reached target Multi-User System.",
  "[ OK ] Initializing pipelines and observability stack...",
  "[ OK ] Profile loaded.",
]

type HeroBootProps = {
  onComplete?: () => void
}

export function HeroBoot({ onComplete }: HeroBootProps) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines((n) => n + 1), 280)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setShowProfile(true), 350)
    return () => clearTimeout(t)
  }, [visibleLines])

  useEffect(() => {
    if (!showProfile) return
    const t = setTimeout(() => onComplete?.(), 600)
    return () => clearTimeout(t)
  }, [showProfile, onComplete])

  return (
    <div className="flex flex-col gap-1 font-mono text-xs sm:text-sm">
      {bootLines.slice(0, visibleLines).map((line) => (
        <p key={line} className="text-muted-foreground">
          <span className="text-terminal-green">{line.slice(0, 6)}</span>
          {line.slice(6)}
        </p>
      ))}

      {showProfile && (
        <div className="mt-4 flex flex-col gap-3">
          <p className="text-xs text-muted-foreground">
            <span className="text-terminal-green">{profile.handle}:~$</span> whoami
          </p>
          <h1 className="text-balance text-3xl font-bold text-terminal-green text-glow sm:text-4xl">
            {profile.name} ({profile.nickname})
          </h1>
          <p className="text-pretty text-base text-accent sm:text-lg">{profile.role}</p>
          <p className="max-w-2xl text-pretty leading-relaxed text-foreground/90">{profile.summary}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>
              <span className="text-terminal-amber">loc:</span> {profile.location}
            </span>
            <span>
              <span className="text-terminal-amber">uptime:</span> {profile.uptime}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-terminal-amber">status:</span>
              <span className="inline-flex items-center gap-1.5 text-terminal-green">
                <span className="size-2 animate-pulse rounded-full bg-terminal-green" />
                {profile.status}
              </span>
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground cursor-blink">
            <span className="text-terminal-green">{profile.handle}:~$</span>./explore&nbsp;--sections
          </p>
        </div>
      )}
    </div>
  )
}
