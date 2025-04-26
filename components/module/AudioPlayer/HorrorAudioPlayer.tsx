"use client"; // 만약 app 디렉토리라면 맨 위에 이거 붙이자

import { useEffect } from "react";

type HorrorAudioPlayerProps = {
  sound: string;
};

export default function HorrorAudioPlayer({ sound }: HorrorAudioPlayerProps) {
  useEffect(() => {
    const audio = new Audio(`${sound}.mp3`);
    audio.volume = 0.4;
    audio.loop = true;

    const playAudioOnce = () => {
      audio.play();
      window.removeEventListener("scroll", playAudioOnce);
    };

    window.addEventListener("scroll", playAudioOnce);

    return () => {
      window.removeEventListener("scroll", playAudioOnce);
    };
  }, []);

  return null; // 이 컴포넌트는 화면에 아무것도 안 보여도 됨
}
