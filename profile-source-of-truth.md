# Narayan Kundgir — Profile Source of Truth

> Single source of truth for LinkedIn, portfolio site, and resume.
> Update here first, then sync to other platforms.
> When tailoring for a specific JD, use the analysis section below as a checklist.

---

## JD Alignment Analysis (Target — Platform Engineer)

### Top 5 Technical Keywords from JD
1. **AWS** (EC2, ECS, EKS, Lambda, RDS, DynamoDB, OpenSearch, S3, CloudWatch, MSK)
2. **Terraform / IaC** (Terraform, CloudFormation, CDK)
3. **Kafka/MSK** — streaming for large-scale distributed systems
4. **Observability** — Prometheus, Grafana, Dynatrace, OpenTelemetry
5. **Python + Shell Scripting**

### Required Soft Skills
- Communication and interpersonal abilities
- Collaboration with security teams
- Developer enablement (self-service deployment)

### Cultural Tone
- **Japanese fintech startup** — serving 70M+ users
- Mix of **startup speed** ("rapid product development") and **financial reliability**
- Modern work culture (hybrid, flex time, no core hours)
- Tone: Professional but innovative. Not corporate-stiff, not startup-casual.

### Strongest Alignment Points
- ✅ AWS: EC2, ECS, EKS (POC), Lambda, RDS/Aurora, OpenSearch, MSK, S3, CloudWatch — near complete overlap
- ✅ Terraform: Certified, production IaC, migrated 0.12→1.3
- ✅ Kafka/MSK: 3-node production cluster
- ✅ Python + Shell: Lambda functions, automation scripts
- ✅ Cost management: Quantified savings (61% non-prod, 30% prod)
- ✅ Regional failure tolerance: Osaka DR standby site, Aurora Multi-AZ
- ✅ Developer self-service: Per-developer staging, self-service cost scheduler
- ✅ Security collaboration: WAF + Trend Micro layered defense
- ✅ CKA + CKAD certified
- ✅ Published technical content (7 articles)
- ✅ English + Japanese bilingual (JLPT N2)
- ✅ CS bachelor's degree

### Gaps to Address Honestly
- ⚠️ DynamoDB: Learning-level only — don't overclaim
- ⚠️ CloudFormation/CDK: Awareness only, production is Terraform
- ⚠️ ArgoCD, Atlantis, OpenTelemetry: No hands-on experience yet
- ⚠️ Dynatrace: Used at NTT DATA (2014-2017), not current
- ⚠️ GitHub Actions: Personal projects only, not production

---

## Headline

Cloud Infrastructure Engineer | AWS SAA | CKA | CKAD | Terraform | JLPT N2

---

## About

Cloud Infrastructure Engineer with 12 years of experience in cloud architecture, platform engineering, and infrastructure automation. Bilingual in English and Japanese (JLPT N2).

Built and managed all AWS cloud infrastructure independently at GMO GlobalSign Japan for 3+ years — 10 production services end-to-end, covering architecture, cost optimization, disaster recovery, security, and production operations (patching, upgrades, cost management). Beyond infrastructure, I build internal platforms and developer tooling that enable engineering teams to ship faster — self-service environments, automated cost controls, and deployment orchestration. Now growing the infrastructure team and establishing scalable practices.

Career path: systems-level performance engineering (NTT DATA) → CI/CD and automation leadership (Rakuten, Fast Retailing) → full cloud infrastructure and platform ownership (GlobalSign).

Key results at GlobalSign:
- Designed self-service per-developer staging environments with Lambda-based cost automation — 61% cost reduction in non-production
- Achieved 30% production cost savings through Reserved Instances and Savings Plans
- Recognized with GMO Awards 2025 for 3-minute AWS outage recovery via Aurora Multi-AZ failover
- Architecting cross-region DR standby site (Tokyo → Osaka) with DMS replication and DNS failover
- Building YAML-driven Release Orchestrator for automated deployment scheduling across services

Certified: AWS Solutions Architect Associate | CKA | CKAD | Terraform Associate | Docker Certified Associate

Active technical writer on Medium, sharing production infrastructure lessons from real incidents and optimizations.

---

## Experience

### Cloud Infrastructure Engineer — GMO GlobalSign Japan

**Permanent | May 2022 - Present | Tokyo, Japan**

Built and managed all cloud infrastructure independently for 3+ years as the sole infrastructure engineer — 10 services (Ruby/Go/Java, PostgreSQL) across staging, pre-production, and production environments. Now growing the team and establishing practices for scale.

**Infrastructure & Architecture**
- Managed full AWS infrastructure: EC2, ECS (Fargate), Aurora PostgreSQL, ElastiCache (Redis), OpenSearch, MSK (Kafka — 3-node cluster, 1 per AZ), Amazon MQ, WAF, ACM, Route53, Lambda, EventBridge
- Implemented all infrastructure as code in Terraform, deployed via Bitbucket Pipelines
- Led Terraform version migration from 0.12 to 1.3 across the entire infrastructure codebase
- Evaluated EKS for services requiring StatefulSet and persistent storage — set up cluster, configured node groups, managed via kubectl

**Cost Optimization — 61% non-production, 30% production savings**
- Designed per-developer staging environments with selective service deployment via modular Terraform — eliminated shared staging bottleneck where developers had to back up and restore databases between turns
- Built Lambda-based cost optimization platform (Python + EventBridge cron rules): automated environment scheduling (shutdown 8PM, startup 8AM weekdays, off weekends) with developer self-service controls to adjust schedules via pipeline — **61% cost reduction** (168 → 65 hours/week)
- Analyzed and implemented Reserved Instances (RDS: 27.67%, EC2: 31.67%) and Compute Savings Plans (Fargate: 22%) — **30% overall production cost reduction**, aligned with 1-year business budget cycle

**Reliability & Disaster Recovery**
- Ensured Aurora Multi-AZ failover across all RDS instances — **GMO Awards 2025 recognition** for recovering from AWS availability zone outage in 3 minutes
- Architecting cross-region standby site (Tokyo → Osaka): nightly DMS replication, cross-region AMI sync, DNS-based failover supporting read requests and authentication

**Security**
- Implemented layered security architecture: AWS WAF at ALB level (managed rules + custom rules for SQL injection, request/body size inspection) with Trend Micro intrusion prevention on host instances as secondary defense
- Managed IAM policies and security group configurations across all environments

**Operations & Maintenance**
- Managed periodic infrastructure maintenance: Aurora engine upgrades, ECS task definition updates, OS patching (Amazon Linux), Docker base image updates, SSL certificate renewals, Reserved Instance renewals
- Executed yearly DR exercises to validate failover procedures and recovery targets
- Vulnerability management: container image updates, AMI upgrades, security patching across all environments
- Monthly AWS cost analysis with billing alerts; AWS Trusted Advisor reviews for optimization
- IAM policy reviews and access audits; DNS record management (Route53, Cloudflare); monitoring alert threshold tuning
- Terraform state file management and migration

**Automation & Developer Experience**
- Building Release Orchestrator: YAML-driven automated deployment system where developers define release plans (pipeline sequence, repo targets, merge schedules) in a dedicated repo — on merge, pipeline reads the plan and auto-schedules execution, eliminating manual deployment coordination
- Implemented ECS rolling deployments for zero-downtime application releases

---

### Senior Software Engineer (Lead SDET) — Fast Retailing

**Permanent | Aug 2018 - May 2022 | Tokyo, Japan**

Led test automation strategy across the engineering organization while progressively building DevOps capabilities — CI/CD pipelines, containerization, and infrastructure-as-code.

- Designed and owned CI/CD pipelines in Jenkins (Groovy), integrating automated regression, API, performance, and end-to-end testing into deployment workflows
- Built test automation frameworks using RestAssured, TestNG, Cucumber, Selenium, and Gatling — adopted across multiple engineering teams
- Trained engineering teams to write and maintain their own tests and test suites, improving development velocity and code quality
- Integrated test reporting across Slack, JIRA, TestRail, and S3 for engineering-wide release quality visibility
- Adopted Docker, Kubernetes, AWS, Terraform, and Ansible for infrastructure and deployment automation — bridging quality engineering into DevOps

---

### Software Consultant (SDET) — Rakuten

**Contract | Aug 2017 - Jul 2018 | Tokyo, Japan**

Automated testing for large-scale e-commerce web services, with exposure to containerized and cloud-native monitoring environments.

- Built automated test suites for web services using REST-Assured, Gatling, Postman, TestNG, and Cucumber
- Developed CI/CD automation workflows in Jenkins, enabling faster release cycles
- Worked with Docker, Kubernetes, and cloud monitoring tools (Datadog, New Relic) in an Agile delivery environment
- Authored test plans, policies, and executive reports for stakeholder visibility

---

### NTT DATA Services — Pune, India

**Jun 2014 - Aug 2017**

#### Software Engineer — Performance Engineering (Jul 2014 - Aug 2017, Permanent)

Systems-level performance engineering — profiling, tuning, and optimizing infrastructure, databases, and application servers.

- Designed and executed end-to-end performance testing strategies for web applications using JMeter, establishing NFR baselines and workload models
- Tuned application and database infrastructure: Apache, Tomcat, Oracle, MySQL, PostgreSQL, DB2 — resolving bottlenecks across the full stack
- Monitored and profiled applications using Dynatrace APM, jconsole, jprofiler, and jvisualVM for deep performance analysis
- Diagnosed production latency issues through network trace analysis using browser developer tools and packet capture
- Delivered performance reports and executive summaries translating technical findings into stakeholder decisions

#### Trainee (Jun 2014 - Aug 2014)

- Trained in software development using Java
- Built Java web application using MVC framework (JSP Servlets, SQL, JDBC)

---

## Education

**Bachelor of Engineering, Computer Engineering**
Savitribai Phule Pune University
2011 - 2014 | Grade: A+

---

## Certifications

| Certification | Issuer | Date |
|---|---|---|
| AWS Solutions Architect Associate (SAA-C03) | AWS | Aug 2023 |
| Certified Kubernetes Administrator (CKA) | The Linux Foundation | Apr 2022 |
| Certified Kubernetes Application Developer (CKAD) | The Linux Foundation | May 2022 |
| HashiCorp Certified: Terraform Associate | HashiCorp | Jun 2022 |
| Docker Certified Associate | KodeKloud | Jan 2022 |
| JLPT N2 | Japan Foundation | Aug 2023 |
| JLPT N3 | Japan Foundation | — |
| JLPT N4 | Japan Foundation | — |
| Ansible Certification | — | — |
| BCP-DR Certification | — | — |
| Bitbucket Pipelines Certification | Atlassian | — |
| Claude Code in Action | Anthropic | — |

---

## Technical Skills

| Category | Technologies |
|---|---|
| Cloud (AWS) | EC2, ECS, EKS, Fargate, Aurora PostgreSQL, ElastiCache (Redis), OpenSearch, MSK (Kafka), Amazon MQ, Lambda, EventBridge, WAF, ACM, Route53, S3, DMS, CloudWatch, VPC |
| Infrastructure as Code | Terraform (certified, migrated 0.12→1.3), Ansible |
| Containers & Orchestration | Docker (certified), Kubernetes (CKA + CKAD), ECS, EKS |
| CI/CD | Bitbucket Pipelines, GitHub Actions, Jenkins |
| Monitoring & Observability | CloudWatch, New Relic, Prometheus, Grafana, Loki, Alertmanager, Pandora FMS, Datadog, Dynatrace APM |
| Security | AWS WAF, Trend Micro, IAM, Security Groups |
| Programming | Python, Shell Scripting, Groovy |
| Programming (past) | Java (Spring Boot) |
| Databases | Aurora PostgreSQL, Redis; Oracle, MySQL, DB2 (past) |
| Other | Packer (AMI automation), DR/BCP architecture, Cost Optimization |

---

## Languages

| Language | Proficiency |
|---|---|
| English | Full professional |
| Japanese | Professional working (JLPT N2) |
| Hindi | Professional working |
| Marathi | Native |

---

## Publications (Medium: @itsnarayan)

| # | Title | Date | Topic |
|---|---|---|---|
| 1 | Monitor AWS Internals to Stay in Control | Jul 2025 | Lambda + EventBridge for ECS/RDS tracking |
| 2 | When Redis Fails Over But Your Service Doesn't: A Postmortem | Jan 2026 | Incident analysis, monitoring gaps |
| 3 | Reducing Deployment Pain with Prebuilt AMIs using Packer | Jan 2025 | AMI automation |
| 4 | RDS Instance to Aurora Cluster Migration Using Read Replica | Jul 2024 | Database migration |
| 5 | Optimizing AWS Costs: Easy Wins to Reserved Instances | Jan 2024 | 61% test + 30% prod savings |
| 6 | Optimizing AWS Infrastructure: Terraform Low Coupling & High Cohesion | Jul 2023 | Modular Terraform |
| 7 | Terraform version upgrade from 0.12 to 1.3 | Feb 2023 | IaC migration |

---

## Notable Achievements

- **GMO Awards 2025** — Recovery from AWS Outage in 3 Minutes (Aurora Multi-AZ failover)
- **Outstanding Contribution Award** — NTT DATA Services, Oct 2016
- **Best Team Award** — NTT DATA Services, Jul 2016

---

## LinkedIn Skills (Top 10 pinned order)

1. AWS
2. Terraform
3. Kubernetes
4. Docker
5. Amazon ECS
6. Amazon EKS
7. Cloud Infrastructure
8. Python
9. Linux
10. DevOps

### Skills tags per role (LinkedIn)
- **GlobalSign:** Amazon ECS, Terraform, AWS, Lambda, Aurora PostgreSQL, ElastiCache, MSK, WAF, Route53, Python, Shell Scripting, Kubernetes, Docker, New Relic
- **Fast Retailing:** Performance Testing, Test Automation Framework, Jenkins, Docker, Kubernetes, AWS, Terraform, Ansible, Java, Groovy, Python, Gatling, Selenium
- **Rakuten:** REST-Assured, Gatling, Jenkins, Docker, Kubernetes, Datadog, New Relic
- **NTT DATA:** JMeter, Dynatrace, SQL Tuning, Performance Engineering, Linux, Oracle, PostgreSQL

---

## Online Presence

- **LinkedIn:** linkedin.com/in/itsnarayan
- **GitHub:** github.com/itsnarayan
- **Medium:** medium.com/@itsnarayan
- **Twitter:** twitter.com/narayankundgir
- **Portfolio:** narayan.resumecv.space
