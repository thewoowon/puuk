"use client";

import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";

const title: {
  [key: string]: string;
} = {
  purification: "정화",
  noise: "소음",
};

export default function StoryPage({ slug }: { slug: string }) {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    async function fetchMarkdown() {
      if (!slug) return;
      const res = await fetch(`/api/story/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setMarkdown(data.content);
      } else {
        setMarkdown("마크다운을 불러올 수 없습니다.");
      }
    }
    fetchMarkdown();
  }, [slug]);

  return (
    <Main>
      <h1>{title[slug as string]}</h1>
      <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
    </Main>
  );
}

const Main = styled.main`
  padding: 2rem 1rem;
  padding-top: 88px;
  line-height: 1.8;
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-width: none;
  --ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: black;
  color: white;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin: 1.5rem 0;
    padding-left: 1rem;
    border-left: 4px solid #ccc;
    color: #555;
  }
`;
