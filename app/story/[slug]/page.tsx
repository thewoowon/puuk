import { getStoryMeta } from "@/lib/getStoryMeta";
import ClientPage from "./ClientPage";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: StoryPageProps) {
  const { slug } = await params;
  const meta = await getStoryMeta(slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: "Story Thumbnail",
        },
      ],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;

  return <ClientPage slug={slug} />;
}
