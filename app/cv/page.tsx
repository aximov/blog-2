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
      className="max-w-4xl"
      initial="hidden"
      animate="show"
      variants={containerAnimation}
    >
      <motion.div variants={itemAnimation} className="mb-12">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Professional Background
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Senior Software Engineer with 4+ years in legal technology
        </p>
      </motion.div>

      <motion.div className="mb-12 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm" variants={itemAnimation}>
        <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Executive Summary</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Currently serving as a Senior Software Engineer at{" "}
          <Link
            href="https://www.legalscape.jp"
            className="font-medium text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
          >
            Legalscape
          </Link>
          , where I architect and implement mission-critical backend services for enterprise legal solutions. 
          My expertise spans backend architecture, cloud infrastructure on Google Cloud, and security compliance 
          in highly regulated environments. I bring a unique combination of technical depth and business acumen, 
          having successfully delivered systems that handle sensitive legal data at scale.
        </p>
      </motion.div>

      <motion.div className="mb-12" variants={itemAnimation}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">Technical Projects</h2>

        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Personal Projects</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    <Link
                      href="https://tokura.app/"
                      className="text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                    >
                      匿ラのあの回
                    </Link>
                    <span className="text-sm text-slate-500 dark:text-slate-500 ml-2">(2021)</span>
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Developed a specialized search engine for{" "}
                    <Link
                      href="https://www.youtube.com/channel/UClSsb_e0HDQ-w7XuwNPgGqQ/featured"
                      className="text-slate-700 dark:text-slate-300 hover:text-slate-500 transition-colors"
                    >
                      匿名ラジオ
                    </Link>
                    , demonstrating full-stack capabilities and search optimization expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Research & Infrastructure</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 dark:text-slate-200">resonantor</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    High-performance X-ray resonant scattering simulator for astrophysics research. 
                    Built with C++ and Geant4, demonstrating expertise in computational physics and performance optimization.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 dark:text-slate-200">resonantor-pipeline</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Automated parallel processing pipeline in Python for large-scale scientific computations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 dark:text-slate-200">mg-control-tower</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Infrastructure as Code solution for on-premises Linux clusters. 
                    Implemented with Ansible, Docker, Prometheus, and Grafana for comprehensive monitoring and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="mb-12" variants={itemAnimation}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Core Technologies</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Python", "C++", "SQL"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">Databases</p>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "Elasticsearch", "Redis"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Infrastructure & Operations</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-2">
                  {["Google Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">Security & Compliance</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Experience with security best practices, data protection regulations, and compliance frameworks in legal tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="mb-12" variants={itemAnimation}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">Professional Experience</h2>
        <div className="space-y-4">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Senior Software Engineer</h3>
                <p className="text-slate-600 dark:text-slate-400">Legalscape</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1 md:mt-0">Jul 2020 - Present</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></div>
                <span>Architect and implement mission-critical backend services for enterprise legal solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></div>
                <span>Lead security and compliance initiatives for handling sensitive legal data</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></div>
                <span>Design and maintain cloud infrastructure on Google Cloud Platform</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></div>
                <span>Mentor junior engineers and contribute to technical decision-making</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Assistant Editor - Programming Education</h3>
                <p className="text-slate-600 dark:text-slate-400">Dwango (Part-time)</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1 md:mt-0">Dec 2016 - Mar 2020</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Contributed to technical content creation and educational materials for programming courses
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div className="mb-12" variants={itemAnimation}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">Education</h2>
        <div className="space-y-4">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Master of Science in Astronomy</h3>
                <p className="text-slate-600 dark:text-slate-400">Tokyo University of Science</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Graduate School of Science, Department of Physics, Matsushita Group</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1 md:mt-0">Mar 2020</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Research focus: High-energy astrophysics and computational modeling
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bachelor of Science in Physics</h3>
                <p className="text-slate-600 dark:text-slate-400">Tokyo University of Science</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Faculty of Science Division I, Department of Physics</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1 md:mt-0">Mar 2018</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="mb-12" variants={itemAnimation}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">Professional Certifications</h2>
        <div className="space-y-6">
          {/* Cloud Certifications */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Cloud & Infrastructure</h3>
            <div className="space-y-3">
              {[
                { name: "Google Cloud Professional Cloud Architect", date: "Nov 2024", status: "Active" },
                { name: "Google Cloud Professional Cloud Developer", date: "Jan 2025", status: "Active" },
                { name: "AWS Certified Cloud Practitioner", date: "May 2025", status: "Active" },
                { name: "Microsoft Azure Fundamentals", date: "Jun 2025", status: "Active" }
              ].map((cert, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{cert.name}</p>
                    <p className="text-sm text-slate-500">{cert.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Security & Compliance</h3>
            <div className="space-y-3">
              {[
                { name: "IPA Registered Information Security Specialist", date: "Oct 2024", type: "Registration" },
                { name: "IPA Network Specialist", date: "Jul 2025", type: "Certification" },
                { name: "CCI Japan Business Law Examination, Grade 3", date: "Jul 2025", type: "Legal Compliance" }
              ].map((cert, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{cert.name}</p>
                    <p className="text-sm text-slate-500">{cert.date} • {cert.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Qualifications */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Additional Qualifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">IPA Applied Information Technology Engineer</p>
                  <p className="text-sm text-slate-500">Jun 2019</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">TOEIC Score</p>
                  <p className="text-sm text-slate-500">Jul 2015</p>
                </div>
                <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">970</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}