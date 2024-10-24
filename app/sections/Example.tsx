"use client";

import { useState } from "react";

export default function Example() {
  const [text, setText] = useState("");
  const [audioSrc, setAudioSrc] = useState("");

  const handleSynthesize = async () => {
    try {
      // Realizar la llamada a la API interna de Next.js
      const response = await fetch("/api/synthesize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (data.audio) {
        // Convertir el audio base64 a una URL válida para el reproductor de audio
        setAudioSrc(`data:audio/mp3;base64,${data.audio}`);
      }
    } catch (error) {
      console.error("Error al generar el audio:", error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe el texto aquí"
      />
      <button onClick={handleSynthesize}>Generar Audio</button>
      {audioSrc && <audio controls src={audioSrc}></audio>}
    </div>
  );
}
