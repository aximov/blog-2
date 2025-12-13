export type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type BlogPost = {
  metadata: BlogMetadata;
  slug: string;
  content: string;
};
