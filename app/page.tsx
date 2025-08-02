import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nakayama Daichi
      </h1>
      <p className="mb-4">
        {`I'm a software engineer at `}
        <Link
          href="https://www.legalscape.jp"
          className="underline hover:no-underline"
        >
          Legalscape
        </Link>
        {`.`}
      </p>
      <div className="my-8">
        <Link href="/cv" className="underline hover:no-underline">
          View my CV →
        </Link>
      </div>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-medium tracking-tighter">
          Blog Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
