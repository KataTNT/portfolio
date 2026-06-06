import { BadgeCheck, ExternalLink } from "lucide-react"
import { certificates } from "@/lib/portfolio-data"
import { TerminalWindow } from "@/components/terminal-window"

export function CertificatesWindow() {
  return (
    <TerminalWindow id="certificates" title="~/certificates" command="ls -la certificates/">
      <div className="flex flex-col gap-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col gap-2 rounded-sm border border-border bg-secondary/40 p-3"
          >
            <div className="flex items-start gap-2">
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-terminal-green" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-pretty font-semibold leading-snug text-foreground">{cert.name}</span>
                <span className="text-xs text-accent">{cert.issuer}</span>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-muted-foreground">
              <span>
                <span className="text-terminal-amber">id:</span> {cert.credentialId} · {cert.date}
              </span>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-terminal-green underline-offset-4 hover:underline"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                verify
              </a>
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  )
}
