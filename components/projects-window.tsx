"use client"

import { useState } from "react"
import { ChevronRight, ExternalLink, FolderGit2 } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { TerminalWindow } from "@/components/terminal-window"
import { cn } from "@/lib/utils"

export function ProjectsWindow() {
  const [open, setOpen] = useState<string | null>(projects[0]?.id ?? null)

  return (
    <TerminalWindow id="projects" title="~/projects" command="ls -la projects/">
      <ul className="flex flex-col divide-y divide-border">
        {projects.map((project) => {
          const isOpen = open === project.id
          return (
            <li key={project.id} className="py-2 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : project.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-2 text-left"
              >
                <ChevronRight
                  className={cn("size-4 shrink-0 text-terminal-green transition-transform", isOpen && "rotate-90")}
                  aria-hidden="true"
                />
                <FolderGit2 className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="shrink-0 whitespace-nowrap font-semibold text-foreground">{project.name}</span>
                <span className="ml-auto hidden text-wrap text-xs text-muted-foreground sm:block">
                  {project.description}
                </span>
              </button>

              {isOpen && (
                <div className="ml-6 mt-3 flex flex-col gap-3 border-l border-border pl-4">
                  <p className="text-xs text-terminal-amber">
                    $ <code className="font-mono">{project.command}</code>
                  </p>
                  <ul className="flex flex-col gap-1">
                    {project.details.map((point, i) => (
                      <li key={i} className="flex gap-2 text-pretty leading-relaxed text-foreground/90">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terminal-green" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 text-xs text-accent underline-offset-4 hover:underline"
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      view repository
                    </a>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </TerminalWindow>
  )
}
