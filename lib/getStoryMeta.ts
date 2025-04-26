const storyMetaMap: Record<
  string,
  { title: string; description: string; ogImage: string }
> = {
  purification: {
    title: "정화",
    description: "빛의 거처에서 벌어지는 일들",
    ogImage: "/og-images/purification.png",
  },
  noise: {
    title: "소음",
    description: "…컥… 끽… 쓱… 밤마다 들려오는 소리",
    ogImage: "/og-images/noise.png",
  },
};

export async function getStoryMeta(slug: string) {
  return (
    storyMetaMap[slug] || {
      title: "푹 - 빠질 수 밖에 없는 일상 속 괴담",
      description: "빠질 수 밖에 없는 일상 속 괴담, 푹",
      ogImage: "/default-og-image.png",
    }
  );
}
