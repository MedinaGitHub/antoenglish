"use client";
import { useState, useRef } from "react";

import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: string;
  content: string;
  sender: "you" | "kid";
  timestamp: string;
};

export default function Component({
  initialMessages,
}: {
  initialMessages: Message[];
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSpeak = (rutaAudio: string) => {
    // Pausar y reiniciar el audio si ya existe
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Crear nueva instancia de Audio y reproducir
    audioRef.current = new Audio(rutaAudio);
    audioRef.current
      .play()
      .then(() => {
        console.log("Reproduciendo:", rutaAudio);
      })
      .catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + "",
      content: newMessage,
      sender: "you",
      timestamp: "",
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        {/*
          <CardTitle className="text-2xl font-bold">
          Customer Support Chat
        </CardTitle> */}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 mb-4 ${
                message.sender === "you" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "kid" && (
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Bot"
                  />
                  <AvatarFallback>Kid</AvatarFallback>
                </Avatar>
              )}

              <div
                className="flex flex-col"
                onClick={() => handleSpeak("mp3/uno/" + message.id + ".wav")}
              >
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "you"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>

                <span className="text-xs text-muted-foreground mt-1">
                  {message.timestamp}
                </span>
              </div>
              {message.sender === "you" && (
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            type="text"
            placeholder="Si lo necesitas, escribe en español será traducido al inglés entendiendo el contexto"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
