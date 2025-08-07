import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <Link
            key={post.slug}
            className="group flex flex-col space-y-1 mb-4 p-3 -mx-3 rounded-lg transition-all hover:bg-white dark:hover:bg-slate-900 hover:shadow-md"
            href={`/blog/${post.slug}`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'slideIn 0.5s ease-out forwards'
            }}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
