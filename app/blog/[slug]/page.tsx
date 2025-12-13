import { formatDate } from "app/blog/format";
import { getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import { CustomMDX } from "app/components/mdx";
import { notFound } from "next/navigation";

// Escape characters that can break out of the JSON-LD script tag
function serializeJsonLd(data: unknown) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="col-span-full">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Aximov",
            },
          }),
        }}
      />

      <div className="mb-12 md:mb-24">
        <h1 className="text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mb-6 break-words text-wrap">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-end hard-border-b pb-6">
          <p className="font-mono text-sm uppercase text-secondary">
            Published on {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        <article className="col-span-4 md:col-span-8 md:col-start-3 prose prose-lg md:prose-xl prose-stone dark:prose-invert max-w-none">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
}
