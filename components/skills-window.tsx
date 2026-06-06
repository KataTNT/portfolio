import { skills } from "@/lib/portfolio-data"
import { TerminalWindow } from "@/components/terminal-window"

export function SkillsWindow() {
  return (
    <TerminalWindow id="skills" title="~/skills" command="apt list --installed">
      <div className="flex flex-col gap-4">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2">
            <p className="text-xs">
              <span className="text-primary">$</span>{" "}
              <span className="text-muted-foreground">rpm -qa</span>{" "}
              <span className="text-accent">{group.category}/*</span>
            </p>
            <div className="flex flex-wrap gap-2 pl-4">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-secondary px-2.5 py-1 text-xs font-mono text-foreground"
                >
                  <span className="text-terminal-green" aria-hidden="true">✓</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        <p className="text-xs">
          <span className="text-primary">$</span> <span className="animate-pulse">_</span>
        </p>
      </div>
    </TerminalWindow>
  )
}
