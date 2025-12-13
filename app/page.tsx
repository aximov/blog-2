import { getBlogPosts } from "app/blog/utils";
import { HomeContent } from "app/components/home-content";

export default function Page() {
  let posts = getBlogPosts();
  return <HomeContent posts={posts} />;
}
