"use client";

import { useEffect, useRef, useState } from "react";

function HorrorAudioPlayer({ sound }: { sound: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(`/stream/audios/${sound}.mp3`);
    audio.volume = 0.2;
    audio.loop = true;
    audioRef.current = audio;

    const startAudioOnUserInteraction = () => {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      }
      window.removeEventListener("click", startAudioOnUserInteraction);
      window.removeEventListener("touchstart", startAudioOnUserInteraction);
    };

    window.addEventListener("click", startAudioOnUserInteraction);
    window.addEventListener("touchstart", startAudioOnUserInteraction);

    return () => {
      window.removeEventListener("click", startAudioOnUserInteraction);
      window.removeEventListener("touchstart", startAudioOnUserInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [sound]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleAudio}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "black",
        color: "white",
        border: "1px solid white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      {isPlaying ? "⏸️" : "▶️"}
    </button>
  );
}

export default HorrorAudioPlayer;
