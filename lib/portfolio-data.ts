export const profile = {
  name: "Alex Mercer",
  handle: "root@devops",
  role: "Senior DevOps / SRE Engineer",
  location: "Berlin, DE",
  summary:
    "I build and operate resilient, automated infrastructure at scale. Specialized in Kubernetes, CI/CD pipelines, observability, and turning chaos into self-healing systems.",
  status: "available_for_hire",
  uptime: "8y 4mo",
  email: "alex@mercer.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
}

export type SkillPackage = {
  name: string
  version: string
  desc: string
}

export type SkillGroup = {
  category: string
  items: SkillPackage[]
}

export const skills: SkillGroup[] = [
  {
    category: "orchestration",
    items: [
      { name: "kubernetes", version: "1.29", desc: "container orchestration at scale" },
      { name: "docker", version: "26.1", desc: "build & runtime images" },
      { name: "helm", version: "3.15", desc: "k8s package management" },
      { name: "nomad", version: "1.7", desc: "lightweight scheduler" },
    ],
  },
  {
    category: "cloud",
    items: [
      { name: "aws", version: "stable", desc: "eks, ec2, vpc, iam, s3" },
      { name: "gcp", version: "stable", desc: "gke, cloud run, pub/sub" },
      { name: "azure", version: "stable", desc: "aks, blob, functions" },
    ],
  },
  {
    category: "iac_automation",
    items: [
      { name: "terraform", version: "1.8", desc: "infrastructure as code" },
      { name: "ansible", version: "2.16", desc: "config management" },
      { name: "pulumi", version: "3.x", desc: "iac in real languages" },
    ],
  },
  {
    category: "ci_cd",
    items: [
      { name: "github-actions", version: "stable", desc: "pipelines & reusable flows" },
      { name: "gitlab-ci", version: "17.0", desc: "build, test, deploy" },
      { name: "argocd", version: "2.11", desc: "gitops continuous delivery" },
      { name: "jenkins", version: "2.452", desc: "legacy pipeline support" },
    ],
  },
  {
    category: "observability",
    items: [
      { name: "prometheus", version: "2.52", desc: "metrics & alerting" },
      { name: "grafana", version: "11.0", desc: "dashboards as code" },
      { name: "loki", version: "3.0", desc: "log aggregation" },
      { name: "datadog", version: "agent-7", desc: "apm & monitoring" },
    ],
  },
  {
    category: "languages",
    items: [
      { name: "go", version: "1.22", desc: "tooling & controllers" },
      { name: "python", version: "3.12", desc: "automation & glue" },
      { name: "bash", version: "5.2", desc: "scripting & ops" },
    ],
  },
]

export type Project = {
  id: string
  name: string
  command: string
  description: string
  details: string
  stack: string[]
  url?: string
}

export const projects: Project[] = [
  {
    id: "k8s-platform",
    name: "k8s-platform",
    command: "kubectl apply -f platform/",
    description: "Multi-tenant Kubernetes platform serving 200+ microservices.",
    details:
      "Designed and operated a multi-region EKS platform with GitOps delivery via ArgoCD. Implemented autoscaling, network policies, and progressive delivery with Argo Rollouts. Reduced deploy time from 45m to under 4m and cut infra cost by 38% through bin-packing and spot fleets.",
    stack: ["Kubernetes", "ArgoCD", "Terraform", "AWS EKS"],
    url: "https://github.com",
  },
  {
    id: "pipeline-forge",
    name: "pipeline-forge",
    command: "./forge build --release",
    description: "Reusable CI/CD framework adopted across 14 engineering teams.",
    details:
      "Built a library of composable GitHub Actions and reusable workflows with built-in security scanning (SAST/SCA), SBOM generation, and signed artifacts via cosign. Standardized release flow across the org and improved pipeline reliability to 99.4%.",
    stack: ["GitHub Actions", "Go", "Cosign", "Trivy"],
    url: "https://github.com",
  },
  {
    id: "observe-stack",
    name: "observe-stack",
    command: "helm install observe ./observe",
    description: "Full-stack observability with SLO-driven alerting.",
    details:
      "Deployed Prometheus, Loki, and Tempo with Grafana dashboards as code. Introduced SLO/error-budget based alerting that reduced pager noise by 71% while improving MTTR to under 12 minutes.",
    stack: ["Prometheus", "Grafana", "Loki", "Tempo"],
    url: "https://github.com",
  },
  {
    id: "chaos-bot",
    name: "chaos-bot",
    command: "chaos-bot run --target prod",
    description: "Automated chaos engineering & resilience testing tool.",
    details:
      "Open-source tool that injects controlled failures (latency, pod kills, zone outages) on a schedule and validates recovery against SLOs. Used in game-day exercises to harden critical services.",
    stack: ["Go", "Kubernetes", "Chaos Mesh"],
    url: "https://github.com",
  },
]

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  current?: boolean
  highlights: string[]
  url?: string
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Nebula Cloud",
    role: "Senior SRE / DevOps Engineer",
    period: "2022 — present",
    current: true,
    highlights: [
      "Lead a 6-person platform team owning the internal developer platform.",
      "Migrated 200+ services to Kubernetes with zero-downtime cutover.",
      "Drove cost optimization saving $1.2M/yr across cloud spend.",
    ],
    url: "https://nebula.example.com",
  },
  {
    id: "exp-2",
    company: "Datastream Inc.",
    role: "DevOps Engineer",
    period: "2019 — 2022",
    highlights: [
      "Built CI/CD pipelines reducing release cycle from weekly to daily.",
      "Implemented IaC with Terraform across 3 AWS accounts.",
      "Set up centralized logging and metrics for 80+ services.",
    ],
    url: "https://datastream.example.com",
  },
  {
    id: "exp-3",
    company: "ByteWorks",
    role: "Systems Administrator",
    period: "2017 — 2019",
    highlights: [
      "Managed on-prem to cloud migration for core workloads.",
      "Automated server provisioning with Ansible.",
      "Maintained 99.9% uptime across production fleet.",
    ],
  },
]

export type Certificate = {
  id: string
  name: string
  issuer: string
  date: string
  credentialId: string
  verifyUrl: string
}

export const certificates: Certificate[] = [
  {
    id: "cka",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF / Linux Foundation",
    date: "2023",
    credentialId: "CKA-2308-1042",
    verifyUrl: "https://training.linuxfoundation.org/certification/verify/",
  },
  {
    id: "cks",
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "CNCF / Linux Foundation",
    date: "2024",
    credentialId: "CKS-2402-0571",
    verifyUrl: "https://training.linuxfoundation.org/certification/verify/",
  },
  {
    id: "aws-pro",
    name: "AWS Certified DevOps Engineer — Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DOP-99213",
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "terraform",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    credentialId: "HC-TF-44120",
    verifyUrl: "https://www.credly.com/",
  },
]
