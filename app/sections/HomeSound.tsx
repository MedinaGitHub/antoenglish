"use client";
import { Volume2 } from "lucide-react";
import { useRef } from "react";

export default function HomeSound() {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      (audioRef.current as HTMLAudioElement).play();
    }
  };

  return (
    <div className="my-4 flex flex-col sm:flex-row items-center">
      <h2 className="text-2xl font-bold text-gray-800 mr-2 text-center sm:text-left">
        ¿Quieres jugar en inglés?
      </h2>
      <button
        onClick={handleClick}
        className="bg-black text-blue-500 rounded-full px-4 py-2 inline-flex items-center focus:outline-none max-w-full mt-2 sm:mt-0"
      >
        <span className="mr-3 text-white text-center">
          Do you wanna play in English?
        </span>
        <Volume2 className="w-5 h-5 text-white" />
      </button>
      <audio
        ref={audioRef}
        src="mp3/doyouwannaplayinenglish.mp3"
        preload="auto"
      />
    </div>
  );
}
