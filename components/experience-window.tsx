"use client"

import { useState } from "react"
import { ChevronRight, ExternalLink } from "lucide-react"
import { experiences } from "@/lib/portfolio-data"
import { TerminalWindow } from "@/components/terminal-window"
import { cn } from "@/lib/utils"

export function ExperienceWindow() {
  const [open, setOpen] = useState<string | null>(experiences[0]?.id ?? null)

  return (
    <TerminalWindow id="experience" title="~/experience — git log" command="git log --oneline --career">
      <ol className="flex flex-col">
        {experiences.map((exp) => {
          const isOpen = open === exp.id
          return (
            <li key={exp.id} className="relative border-l border-border pb-5 pl-6 last:pb-0">
              <span
                className={cn(
                  "absolute -left-[5px] top-1.5 size-2.5 rounded-full border",
                  exp.current ? "border-terminal-green bg-terminal-green" : "border-muted-foreground bg-card",
                )}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : exp.id)}
                aria-expanded={isOpen}
                className="flex w-full flex-col gap-1 text-left"
              >
                <span className="flex items-center gap-2">
                  <ChevronRight
                    className={cn("size-4 shrink-0 text-terminal-green transition-transform", isOpen && "rotate-90")}
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-foreground">{exp.role}</span>
                  {exp.current && (
                    <span className="rounded-sm bg-terminal-green/15 px-1.5 py-0.5 text-[10px] text-terminal-green">
                      HEAD
                    </span>
                  )}
                </span>
                <span className="ml-6 flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground">
                  <span className="text-accent">{exp.company}</span>
                  <span>{exp.period}</span>
                </span>
              </button>

              {isOpen && (
                <div className="ml-6 mt-3 flex flex-col gap-2">
                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-xs leading-relaxed text-foreground/90">
                        <span className="text-terminal-green">+</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 text-xs text-accent underline-offset-4 hover:underline"
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      company site
                    </a>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </TerminalWindow>
  )
}
