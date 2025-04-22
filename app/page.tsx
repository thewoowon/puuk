"use client";

import { Banner } from "@/components/module";
import { COLORS } from "@/styles/color";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Main>
      <Banner />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 73px;
  padding-bottom: 154px;
  background-color: ${COLORS.tertiary.black};
  gap: 28px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  --ms-overflow-style: none;
`;
