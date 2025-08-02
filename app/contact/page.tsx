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
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Get in Touch
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-shrink-0 text-center">
          <Image
            src="/images/profile.jpg"
            alt="Profile photo"
            width={150}
            height={150}
            className="rounded-full border-2 border-neutral-200 dark:border-neutral-800 mx-auto"
            priority
          />
          <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Nakayama Daichi
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            中山 大地
          </p>
        </div>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Feel free to reach out through
            any of the channels below.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        {contactMethods.map((method) => {
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
              className={`group relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 transition-all duration-200 ${method.color}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Icon
                    className={`h-6 w-6 ${method.iconColor} transition-colors`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    {method.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {method.label}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    {method.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-transparent group-hover:from-neutral-50/50 group-hover:to-transparent dark:group-hover:from-neutral-900/20 transition-all duration-300" />
            </a>
          );
        })}
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <h2 className="font-semibold text-lg mb-4 tracking-tighter">
          Other Links
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {additionalLinks.map((link) => {
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
                className="group flex items-center space-x-3 rounded-md border border-neutral-200 dark:border-neutral-800 p-4 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-950/50"
              >
                <Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {link.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800">
        <h3 className="font-semibold text-sm mb-2 text-neutral-900 dark:text-neutral-100">
          Response Time
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          I typically respond to emails within 24-48 hours. For urgent matters,
          please mention it in your subject line.
        </p>
      </div>
    </section>
  );
}
