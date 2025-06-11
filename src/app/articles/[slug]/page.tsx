interface ArticlePageProps {
  params: {
    slug: Promise<string>;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [
    { slug: 'why-console-log' },
    // { slug: 'another' }
  ];
}

export const dynamicParams = false;
