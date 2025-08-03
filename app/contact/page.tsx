import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  FileText,
  PenTool,
  Facebook,
} from "lucide-react";
import { PageContent } from "app/components/page-content";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Get in touch with me through various channels",
};

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:d@alumni.tus.ac.jp",
    label: "d@alumni.tus.ac.jp",
    description: "Feel free to drop me an email for any inquiries",
    color:
      "hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950/20 dark:hover:border-blue-700",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github as any,
    href: "https://github.com/aximov",
    label: "@aximov",
    description: "Check out my open source projects and contributions",
    color:
      "hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-950/20 dark:hover:border-gray-700",
    iconColor: "text-gray-900 dark:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin as any,
    href: "https://www.linkedin.com/in/%E5%A4%A7%E5%9C%B0-%E4%B8%AD%E5%B1%B1-62229318a/",
    label: "Nakayama Daichi",
    description: "Connect with me professionally",
    color:
      "hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950/20 dark:hover:border-blue-700",
    iconColor: "text-[#0077B5] dark:text-[#0077B5]",
  },
  {
    name: "Twitter / X",
    icon: Twitter as any,
    href: "https://twitter.com/aximovich",
    label: "@aximovich",
    description: "Follow me for tech insights and updates",
    color:
      "hover:bg-sky-50 hover:border-sky-300 dark:hover:bg-sky-950/20 dark:hover:border-sky-700",
    iconColor: "text-[#1DA1F2] dark:text-[#1DA1F2]",
  },
  {
    name: "Facebook",
    icon: Facebook as any,
    href: "https://www.facebook.com/aximov3/",
    label: "中山 大地",
    description: "Connect on Facebook",
    color:
      "hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950/20 dark:hover:border-blue-700",
    iconColor: "text-[#1877F2] dark:text-[#1877F2]",
  },
];

const additionalLinks = [
  {
    name: "しずかなインターネット",
    icon: PenTool,
    href: "https://sizu.me/aximov",
    label: "@aximov",
    description: "My profile on sizu.me",
  },
  {
    name: "Resume / CV",
    icon: FileText,
    href: "/cv",
    label: "View my CV",
    description: "Detailed professional background",
  },
];

export default function ContactsPage() {
  return (
    <PageContent>
      <div className="mb-16">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 tracking-tight text-slate-900 dark:text-slate-100">
          Professional Contact
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Available for strategic partnerships, technical consultation, and senior engineering opportunities
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-16 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src="/images/profile.jpg"
              alt="Nakayama Daichi - Senior Software Engineer"
              width={120}
              height={120}
              className="rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
              priority
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Nakayama Daichi
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Senior Software Engineer
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded text-xs font-medium">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Available
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            I bring 4+ years of experience in building enterprise-grade legal technology solutions. 
            My expertise spans backend architecture, cloud infrastructure, and security compliance 
            in regulated environments.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Open to discussing technical leadership roles, consulting opportunities, 
            and strategic partnerships in the legal tech space.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-16">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={method.name}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              <div className="flex-shrink-0 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <Icon
                  className={`h-5 w-5 ${method.iconColor}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                  {method.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {method.label}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                  {method.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
        <h2 className="font-semibold text-xl mb-6 text-slate-900 dark:text-slate-100">
          Professional Resources
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {additionalLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 transition-all hover:shadow-sm hover:border-slate-300 dark:hover:border-slate-700"
                style={{
                  animationDelay: `${(index + 5) * 100}ms`,
                  animation: 'slideIn 0.5s ease-out forwards'
                }}
              >
                <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {link.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
              Response Time
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Professional inquiries receive response within <span className="font-medium">24-48 hours</span>. 
              For urgent technical matters, please indicate priority in your subject line.
            </p>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
