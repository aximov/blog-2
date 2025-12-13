"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPage() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="col-span-full"
      initial="hidden"
      animate="show"
      variants={containerAnimation}
    >
      <motion.div variants={itemAnimation} className="mb-24 md:mb-32">
        <h1 className="text-[10vw] leading-[0.85] font-black tracking-tighter uppercase mb-6">
          CURRICULUM<br className="md:hidden" /> VITAE
        </h1>
      </motion.div>

      {/* Capabilities / Skills */}
      <motion.div variants={itemAnimation} className="mb-24 hard-border-b pb-12">
        <h2 className="font-mono text-sm uppercase text-accent mb-8 block">Capabilities</h2>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-y-8 md:gap-x-6">
          <div className="col-span-4 md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold uppercase mb-4">Backend</h3>
            <ul className="space-y-2 text-secondary font-mono text-sm uppercase">
              <li>API Design</li>
              <li>Database Modeling</li>
              <li>Search Systems</li>
              <li>Distributed Processing</li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold uppercase mb-4">Frontend</h3>
            <ul className="space-y-2 text-secondary font-mono text-sm uppercase">
              <li>Web Applications</li>
              <li>Modern Frameworks</li>
              <li>Responsive UI</li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold uppercase mb-4">Cloud & Infra</h3>
            <ul className="space-y-2 text-secondary font-mono text-sm uppercase">
              <li>Cloud Architecture</li>
              <li>Infrastructure as Code</li>
              <li>Containers</li>
              <li>CI/CD</li>
              <li>Observability</li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold uppercase mb-4">Security</h3>
            <ul className="space-y-2 text-secondary font-mono text-sm uppercase">
              <li>ISMS Operation</li>
              <li>Cloud Security</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div variants={itemAnimation} className="mb-24 hard-border-b pb-12">
        <h2 className="font-mono text-sm uppercase text-accent mb-8 block">Experience</h2>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-y-12 md:gap-x-6">
          <div className="col-span-4 md:col-span-3">
            <span className="text-sm font-bold block mb-1">2020 — PRESENT</span>
            <span className="text-sm text-secondary">LEGALSCAPE</span>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-1">Senior Software Engineer</h3>
            <span className="block text-sm font-mono text-secondary uppercase mb-4">Solution Value Team, Product Development Div.</span>
            <p className="text-lg text-secondary leading-relaxed mb-6 max-w-3xl">
              Designing and building backend services for enterprise legal solutions.
              Managing security compliance (ISMS) and cloud infrastructure on Google Cloud.
              Guiding technical decisions and supporting engineer growth.
            </p>
            <div className="space-y-3 mt-6">
              {[
                {
                  label: "Stack",
                  tags: ["TypeScript", "Python", "Node.js", "Vue", "React", "MySQL", "Google Cloud"]
                },
                {
                  label: "Cloud",
                  tags: ["App Engine", "Cloud Run", "Cloud SQL", "Cloud Datastore", "Cloud Storage", "Cloud Pub/Sub", "Cloud Scheduler", "Cloud Tasks"]
                },
                {
                  label: "Data & AI",
                  tags: ["BigQuery", "Looker Studio", "Vertex AI", "Azure OpenAI Service", "Pinecone", "Elasticsearch"]
                },
                {
                  label: "Ops & Sec",
                  tags: ["Terraform", "Packer", "GitHub Actions", "Cloud IAM", "Secret Manager", "Cloud Monitoring", "Cloud Logging", "ISO/IEC 27001", "ISO/IEC 27017"]
                }
              ].map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-2">
                  <span className="text-xs font-mono text-secondary uppercase w-20 shrink-0">{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 border border-secondary text-xs font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <span className="text-sm font-bold block mb-1">2016 — 2020</span>
            <span className="text-sm text-secondary">DWANGO</span>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Assistant Editor</h3>
            <p className="text-lg text-secondary leading-relaxed max-w-3xl mb-6">
              Contributed to technical content creation and educational materials for programming courses.
            </p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "HTML", "CSS"].map(tag => (
                <span key={tag} className="px-2 py-1 border border-secondary text-xs font-bold uppercase">{tag}</span>
              ))}
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <span className="text-sm font-bold block mb-1">2018 — 2020</span>
            <span className="text-sm text-secondary">TOKYO UNIVERSITY OF SCIENCE</span>
          </div>
          <div className="col-span-4 md:col-span-9">
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-1">Graduate Student</h3>
            <span className="block text-sm font-mono text-secondary uppercase mb-4">Matsushita Group</span>
            <p className="text-lg text-secondary leading-relaxed max-w-3xl mb-6">
              MSc in Astronomy. Developed X-ray resonant scattering simulator for turbulence velocity estimation.
            </p>
            <div className="flex flex-wrap gap-2">
              {["C++", "Python", "Geant4", "Monte Carlo Simulation", "Spectral Analysis", "Model Fitting"].map(tag => (
                <span key={tag} className="px-2 py-1 border border-secondary text-xs font-bold uppercase">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div variants={itemAnimation} className="mb-24 hard-border-b pb-12">
        <h2 className="font-mono text-sm uppercase text-accent mb-8 block">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          <div className="group">
            <Link href="https://tokura.app/" target="_blank" rel="noopener noreferrer" className="block mb-4">
              <h3 className="text-2xl font-bold uppercase underline decoration-2 decoration-accent underline-offset-4 mb-2">Tokura App</h3>
              <p className="font-mono text-xs uppercase text-secondary">2021 — Personal Project</p>
            </Link>
            <p className="text-secondary leading-relaxed">
              Specialized search engine for "Tokumei Radio."
            </p>
          </div>

          <div className="group">
            <div className="mb-4">
              <h3 className="text-2xl font-bold uppercase mb-2">Resonantor</h3>
              <p className="font-mono text-xs uppercase text-secondary">2019 — Research</p>
            </div>
            <p className="text-secondary leading-relaxed">
              X-ray resonant scattering simulator built with C++ and Geant4 for astrophysical research.
            </p>
          </div>

          <div className="group">
            <div className="mb-4">
              <h3 className="text-2xl font-bold uppercase mb-2">Resonantor Pipeline</h3>
              <p className="font-mono text-xs uppercase text-secondary">2019 — Research</p>
            </div>
            <p className="text-secondary leading-relaxed">
              Automated parallel processing pipeline in Python. Managed large-scale scientific computation workflows and data analysis.
            </p>
          </div>

          <div className="group">
            <div className="mb-4">
              <h3 className="text-2xl font-bold uppercase mb-2">MG Control Tower</h3>
              <p className="font-mono text-xs uppercase text-secondary">2018 — Infrastructure</p>
            </div>
            <p className="text-secondary leading-relaxed">
              Infrastructure as Code for on-prem Linux clusters using Ansible, Docker, Prometheus, and Grafana.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div variants={itemAnimation} className="mb-24">
        <h2 className="font-mono text-sm uppercase text-accent mb-8 block">Certifications</h2>
        <div className="grid grid-cols-1 gap-4">
          {[
            { name: "Google Cloud Professional Cloud Architect", date: "Nov 2024", type: "Active" },
            { name: "Google Cloud Professional Cloud Developer", date: "Jan 2025", type: "Active" },
            { name: "AWS Certified Cloud Practitioner", date: "May 2025", type: "Active" },
            { name: "Microsoft Azure Fundamentals", date: "Jun 2025", type: "Active" },
            { name: "IPA Registered Information Security Specialist", date: "Oct 2024", type: "Registration" },
            { name: "IPA Network Specialist", date: "Jul 2025", type: "Certification" },
            { name: "CCI Japan Business Law Examination, Grade 3", date: "Jul 2025", type: "Legal" },
            { name: "IPA Applied Information Technology Engineer", date: "Jun 2019", type: "Certification" },
            { name: "TOEIC Score 970", date: "Jul 2015", type: "Score" }
          ].map((cert, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between hard-border p-4 hover:bg-fg-primary hover:text-bg-primary transition-colors">
              <span className="font-bold uppercase text-lg leading-tight block mb-2 md:mb-0">{cert.name}</span>
              <div className="flex items-center gap-4 font-mono text-xs uppercase">
                <span>{cert.date}</span>
                <span className="px-2 py-0.5 border border-current">{cert.type}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}
