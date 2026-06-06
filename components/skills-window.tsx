import { skills } from "@/lib/portfolio-data"
import { TerminalWindow } from "@/components/terminal-window"

export function SkillsWindow() {
  return (
    <TerminalWindow id="skills" title="~/skills — installed packages" command="apt list --installed">
      <div className="flex flex-col gap-6">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2">
            <p className="text-xs">
              <span className="text-primary">$</span>{" "}
              <span className="text-muted-foreground">apt list --installed</span>{" "}
              <span className="text-accent">{group.category}/*</span>
            </p>
            <ul className="flex flex-col gap-1 pl-4">
              {group.items.map((pkg) => (
                <li
                  key={pkg.name}
                  className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 rounded-sm px-1 py-0.5 text-xs hover:bg-secondary"
                >
                  <span className="text-terminal-green font-bold" aria-label="installed">
                    [ok]
                  </span>
                  <span className="min-w-[8rem] font-bold text-foreground">{pkg.name}</span>
                  <span className="min-w-[4rem] text-accent">{pkg.version}</span>
                  <span className="text-muted-foreground">
                    <span className="text-border">—</span> {pkg.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-xs">
          <span className="text-primary">$</span> <span className="animate-pulse">_</span>
        </p>
      </div>
    </TerminalWindow>
  )
}
