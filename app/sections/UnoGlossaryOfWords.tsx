"use client";

import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Volume2 } from "lucide-react";

const phrases = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Yellow",
  "Red",
  "Green",
  "Blue",
  "Uno!",
  "Reverse Card",
  "Skip Card",
  "Draw Two Card",
  "Draw Four Card",
  "Wild Card",
];
export default function UnoGlossaryOfWords() {
  const [speaking, setSpeaking] = useState(false);

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
