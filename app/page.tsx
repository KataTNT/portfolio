import { HeroBoot } from "@/components/hero-boot"
import { TopNav } from "@/components/top-nav"
import { TerminalWindow } from "@/components/terminal-window"
import { SkillsWindow } from "@/components/skills-window"
import { ProjectsWindow } from "@/components/projects-window"
import { ExperienceWindow } from "@/components/experience-window"
import { CertificatesWindow } from "@/components/certificates-window"
import { ContactWindow } from "@/components/contact-window"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
        <TerminalWindow id="about" title="kata@portfolio:~ — bootlog" className="min-h-[20rem]">
          <HeroBoot />
        </TerminalWindow>

        <div className="grid gap-6 lg:grid-cols-2">
          <SkillsWindow />
          <ProjectsWindow />
        </div>

        <ExperienceWindow />
        <CertificatesWindow />
        <ContactWindow />

        <footer className="py-4 text-center text-xs text-muted-foreground">
          <span className="text-terminal-green">$</span> echo &quot;built with terminal energy · {new Date().getFullYear()}&quot;
        </footer>
      </main>
    </div>
  )
}
