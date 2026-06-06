export const profile = {
  name: "Triet Thai",
  handle: "kata@portfolio",
  role: "Senior DevOps Engineer",
  location: "Ho Chi Minh City, VN",
  summary:
    "I build and operate resilient, automated infrastructure at scale. Specialized in Kubernetes, CI/CD pipelines, observability, and turning chaos into self-healing systems.",
  status: "open_to_work",
  uptime: "10y 9mo",
  email: "tnt.kata1894@gmail.com",
  github_username: "KataTNT",
  github_url: "https://github.com/KataTNT",
  linkedin_username: "triettn",
  linkedin_url: "https://linkedin.com/in/triettn",
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: "container_orchestration",
    items: [ "docker", "kubernetes", "openshift" ],
  },
  {
    category: "cloud",
    items: [ "aws" ],
  },
  {
    category: "virtualization",
    items: [ "vmware" ],
  },
  {
    category: "iac",
    items: [ "terraform", "ansible", "helm", "kustomize", "inspec" ],
  },
  {
    category: "ci_cd",
    items: [ "jenkins", "argocd", "gitlab-cicd", "github-actions" ],
  },
  {
    category: "observability",
    items: [ "prometheus", "grafana", "tempo", "loki" ],
  },
  {
    category: "databases",
    items: [ "oracle", "mssql", "mysql", "postgresql", "mongodb", "redis" ],
  },
  {
    category: "message_brokers",
    items: [ "rabbitmq", "kafka" ],
  },
  {
    category: "scritping",
    items: [ "bash" ],
  },
]

export type Project = {
  id: string
  name: string
  command: string
  description: string
  details: string[]
  stack: string[]
  url?: string
}

export const projects: Project[] = [
  {
    id: "dbs-replatforming",
    name: "dbs-replatforming",
    command: "kubectl apply -f platform/",
    description: "Replatforming the Digital Banking System (DBS) - Open Banking from standalone Docker hosts to Kubernetes cluster, as a foundational step for cloud migration.",
    details: [
      "Planned, architected & deployed the high availability, air-gapped on-premises K8s cluster, achieved 99.9% uptime.",
      "Standardized CI/CD processes by developing Helm charts for 25+ microservices and consolidated their disparate build pipelines to a minimum, resulting in an 80% reduction in managed pipeline complexity.",
      "Established advanced deployment strategies (rolling updates, readiness/liveness probes, HPA) to ensure near-zero downtime during application delivery/updates.",
      "Implemented Vault for centralized secret management integrated with Kubernetes, ensuring compliance and automating key rotation.",
    ],
    stack: ["Kubernetes", "Cilium", "HashiCorp Vault", "GitLab CI", "Jenkins", "Helm", "Ansible", "Harbor", "Nexus", "NGINX", "RabbitMQ", "Redis", "MySQL", "Spring Boot", "Angular JS"],
  },
  {
    id: "esb-ibft",
    name: "esb-ibft",
    command: "./forge build --release",
    description: "The modern Enterprise Service Bus (ESB) system replaces the outdated system - IBM Integration Bus (IIB), which integrates with NAPAS IBFT v2.0.",
    details: [
      "Architected, deployed infrastructure and applications across environments, ensuring compliance with PCI DSS, and achieved SLI 99%.",
      "Implemented a full-stack observability solution using Instana, including 100% microservices monitoring and the OpenShift cluster.",
    ],
    stack: ["Red Hat OpenShift", "IBM Fusion", "IBM CP4I", "IBM ACE", "IBM MQ", "IBM Instana", "ISO 8583"],
  },
  {
    id: "notification-hub",
    name: "notification-hub",
    command: "helm install observe ./observe",
    description: "The centralized microservices notification system replaces discrete monolith notification systems (including SMS, email, push notifications) and integrates new channels like OTT messaging applications.",
    details: [
      "Rearchitected & deployed a highly scalable notification system on the cloud-native platform, improving throughput and resilience for critical banking operations.",
      "Implemented and managed Kong Ingress Controller on Kubernetes cluster to standardize API Gateway services, improving API routing efficiency.",
    ],
    stack: ["Kubernetes", "Kong", "Kafka", "PostgreSQL", "Spring Boot"],
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
    company: "Nam A Bank",
    role: "Senior DevOps Engineer",
    period: "2024/09 — 2025/09",
    current: false,
    highlights: [
      "Designed, built and optimized CI/CD pipelines to automate software delivery.",
      "Implemented DevSecOps practices by integrating SCA, SAST, Container Image Scanning, and Secrets Management into CI/CD pipelines.",
      "Architected, deployed and managed highly available Kubernetes clusters on cloud providers and on-premises.",
      "Led the design and implementation of microservices architecture to modernize existing monolithic systems, improving system scalability and fault tolerance.",
      "Proactively researched, evaluated and implemented essential technologies to modernized the banking technology stack.",
      "Provided mentorship and technical guidance",
    ],
    url: "https://www.namabank.com.vn",
  },
  {
    id: "exp-2",
    company: "Nam A Bank",
    role: "Senior System Engineer",
    period: "2022/06 — 2024/08",
    highlights: [
      "Designed and implemented an IaC framework using Ansible and Chef InSpec to automate application deployment, configuration management, and system hardening, eliminating manual efforts by 95% and human errors by 67%.",
      "Modernized enterprise networking by successfully migrating from VMware vSphere Standard Switches to vSphere Distributed Switches, centralizing network management and boosting throughput performance",
      "Strengthened the corporate DR posture by deploying and configuring VMware vSphere Replication for Tier 2 and Tier 3 systems, significantly reducing RTO.",
      "Completed critical migration and upgrade projects for unsupported systems, ensuring business continuity and compliance.",
      "Managed and operated on-premise virtualization infrastructure, payment platforms and enterprise systems.",
      "Provided mentorship and technical guidance.",
    ],
    url: "https://www.namabank.com.vn",
  },
  {
    id: "exp-3",
    company: "Nam A Bank",
    role: "Systems Engineer",
    period: "2019/03 — 2022/06",
    highlights: [
    ],
    url: "https://www.namabank.com.vn",
  },
  {
    id: "exp-4",
    company: "Long Van System Solution JSC",
    role: "IT Technician (R&D)",
    period: "2017/07 — 2019/03",
    highlights: [
    ],
    url: "https://longvan.net/",
  },
  {
    id: "exp-5",
    company: "Long Van System Solution JSC",
    role: "IT Technical Support",
    period: "2014/12 — 2017/07",
    highlights: [
    ],
    url: "https://longvan.net/",
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
    id: "cks",
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "The Linux Foundation",
    date: "2026/04",
    credentialId: "LF-lx3b8oeqq4",
    verifyUrl: "https://www.credly.com/badges/5668be86-e302-4023-a854-a9f3211cc980/",
  },
  {
    id: "cka",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    date: "2025/10",
    credentialId: "LF-j85p6q4e18",
    verifyUrl: "https://www.credly.com/badges/191220f7-c0b3-452f-82cc-70b5b4b08dbc/",
  },
  {
    id: "lfcs",
    name: "Linux Foundation Certified System Administrator (LFCS)",
    issuer: "The Linux Foundation",
    date: "2026/04",
    credentialId: "LF-zjt53161ia",
    verifyUrl: "https://www.credly.com/badges/ace12bda-cadd-4b7e-8e9d-fd28e2f1b853/",
  },
  {
    id: "terraform",
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "2025/11",
    credentialId: "",
    verifyUrl: "https://www.credly.com/badges/68772038-7a33-4e21-948c-3db00c7d2be9/",
  },
]
