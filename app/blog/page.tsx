import { getBlogPosts } from "app/blog/utils";
import { BlogContent } from "app/components/blog-content";

export default function Page() {
  let posts = getBlogPosts();

  return <BlogContent posts={posts} />;
}
