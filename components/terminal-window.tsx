import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TerminalWindowProps = {
  title: string
  command?: string
  children: ReactNode
  className?: string
  id?: string
}

export function TerminalWindow({ title, command, children, className, id }: TerminalWindowProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[0_0_30px_-12px_oklch(0.82_0.2_145_/_0.35)]",
        className,
      )}
    >
      <header className="flex items-center gap-2 border-b border-border bg-secondary px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-destructive" />
          <span className="size-3 rounded-full bg-terminal-amber" />
          <span className="size-3 rounded-full bg-terminal-green" />
        </div>
        <span className="ml-2 truncate text-xs text-muted-foreground">{title}</span>
      </header>
      <div className="flex flex-col gap-3 p-4 text-sm leading-relaxed">
        {command && (
          <p className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-terminal-green">visitor@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <code className="text-foreground">{command}</code>
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
