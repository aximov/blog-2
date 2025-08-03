import { BlogPosts } from "app/components/posts";
import Link from "next/link";
import { PageContent } from "app/components/page-content";

export default function Page() {
  return (
    <PageContent>
      {/* Professional Hero Section */}
      <div className="mb-20">
        <div className="mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Nakayama Daichi
          </h1>
          <div className="mb-6">
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium mb-4">
              Senior Software Engineer
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
              4+ years building mission-critical legal technology at Legalscape. 
              Specialized in backend architecture, cloud infrastructure, and security compliance 
              for enterprise legal solutions.
            </p>
          </div>
        </div>

        {/* Professional Status */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <div className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Senior Engineer at{" "}
              <Link
                href="https://www.legalscape.jp"
                className="font-semibold text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
              >
                Legalscape
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Open to strategic opportunities
            </span>
          </div>
        </div>

        {/* Professional CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/cv" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-semibold transition-all hover:bg-slate-800 dark:hover:bg-slate-200"
          >
            Professional Background
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold transition-all hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
          >
            Connect
          </Link>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          Core Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-slate-100">Backend Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Designing and implementing scalable backend services for legal tech platforms handling sensitive data and complex workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Python", "Node.js", "PostgreSQL"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-slate-900 dark:text-slate-100">Cloud & Security</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Building secure, compliant infrastructure on Google Cloud with focus on data protection and regulatory requirements.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google Cloud", "Kubernetes", "Security", "Compliance"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Work & Insights */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Recent Insights
          </h2>
          <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors">
            All posts →
          </Link>
        </div>
        <BlogPosts />
      </div>
    </PageContent>
  );
}
