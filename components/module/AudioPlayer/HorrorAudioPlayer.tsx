"use client";

import { useEffect, useRef, useState } from "react";

function HorrorAudioPlayer({ sound }: { sound: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(`/stream/audios/${sound}.mp3`);
    audio.volume = 0.4;
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isPlaying ? (
        <svg
          width={30}
          height={30}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="Layer 35" id="Layer_35">
            <path
              fill="white"
              d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"
            />
            <path
              fill="white"
              d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"
            />
            <rect
              fill="white"
              height="12"
              transform="translate(-3.77 22.9) rotate(-45)"
              width="2"
              x="24.76"
              y="10"
            />
            <rect
              fill="white"
              height="2"
              transform="translate(-3.77 22.9) rotate(-45)"
              width="12"
              x="19.76"
              y="15"
            />
          </g>
        </svg>
      ) : (
        <svg
          width={30}
          height={30}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g data-name="Layer 34" id="Layer_34">
            <path
              fill="white"
              d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"
            />
            <path
              fill="white"
              d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"
            />
            <path
              fill="white"
              d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"
            />
            <path
              fill="white"
              d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"
            />
            <path
              fill="white"
              d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"
            />
          </g>
        </svg>
      )}
    </button>
  );
}

export default HorrorAudioPlayer;
