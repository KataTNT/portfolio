import { Mail, Code2, Globe } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { TerminalWindow } from "@/components/terminal-window"

const links = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "github", value: "github.com/alexmercer", href: profile.github, Icon: Code2 },
  { label: "linkedin", value: "in/alexmercer", href: profile.linkedin, Icon: Globe },
]

export function ContactWindow() {
  return (
    <TerminalWindow id="contact" title="~/contact — ssh connect" command="ping --establish-connection">
      <p className="text-pretty leading-relaxed text-foreground/90">
        Open to senior DevOps / SRE roles and consulting. Send a packet and I&apos;ll respond within one business day.
      </p>
      <div className="mt-2 flex flex-col gap-2">
        {links.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-sm border border-border bg-secondary/40 px-3 py-2 text-sm transition-colors hover:border-terminal-green"
          >
            <Icon className="size-4 shrink-0 text-terminal-green" aria-hidden="true" />
            <span className="w-20 text-xs text-terminal-amber">{label}</span>
            <span className="truncate text-foreground/90 group-hover:text-terminal-green">{value}</span>
          </a>
        ))}
      </div>
    </TerminalWindow>
  )
}
