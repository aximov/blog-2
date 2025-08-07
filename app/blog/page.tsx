import { BlogPosts } from 'app/components/posts'
import { PageContent } from 'app/components/page-content'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <PageContent>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </PageContent>
  )
}
