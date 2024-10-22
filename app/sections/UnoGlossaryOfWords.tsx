"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Volume2 } from "lucide-react";

const phrases = [
  "Your turn!",
  "Grab a card.",
  "Pick two!",
  "Shuffle up!",
  "Deal out seven each.",
  "I don’t have that color or number.",
  "Reverse it!",
  "Skip you!",
  "Change it to (red/blue/green/yellow).",
  "I gotta pick four!",
  "I’m down to my last card!",
  "UNO!",
  "You didn’t say UNO!",
  "Let’s do another round.",
  "Who’s going first?",
  "I won!",
  "Keep drawing until you get one you can play.",
  "What color is it now?",
  "That’s a wild one!",
  "Nope, you can’t play that!",
];
export default function UnoGlossaryOfWords() {
  const [speaking, setSpeaking] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  console.log("windowWidth", windowWidth);
  // Hook para medir el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Setea el ancho de la pantalla cuando se monta el componente
    handleResize();

    // Actualiza el ancho si cambia el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
    }
  };

  const handleChipClick = (text: string) => {
    if (!speaking) {
      speak(text);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, text: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleChipClick(text);
    }
  };

  return (
    <Card className="mt-6 mb-6 ">
      <CardContent className="flex items-center p-4">
        <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
          <Volume2 className="w-6 h-6" />
        </div>
        <div>
          <CardTitle className="mb-2">Glosario de palabras</CardTitle>
          {phrases.map((phrase, index) => (
            <button
              key={index}
              onClick={() => handleChipClick(phrase)}
              onKeyDown={(e) => handleKeyDown(e, phrase)}
              className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-2 mb-2"
              aria-label={`Speak: ${phrase}`}
            >
              {phrase}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
