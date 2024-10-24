import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListChecks } from "lucide-react";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UnoGlossaryOfWords from "../sections/UnoGlossaryOfWords";
import { UnoLevel1, UnoLevel2, UnoLevel3, UnoLevel4 } from "../chats/uno";
import Conversation from "../sections/Conversation";
export default function Component() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Actividades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="features">
                <Link href="playUno">Juego de cartar UNO!</Link>
              </SelectItem>
              <SelectItem value="pricing">
                <Link href="#pricing">Ejercicios funcionales.</Link>
              </SelectItem>
              <SelectItem value="about">
                <Link href="#about">Pinta caritas</Link>
              </SelectItem>
              <SelectItem value="contact">
                <Link href="#contact">Hora de comer!</Link>
              </SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </header>
      {/* Title text and h1 with image background 
      <div className="relative h-[240px] sm:h-[100px] md:h-[360px] max-h-[160px] overflow-hidden">
        <img
          src="/uno.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
     
          </h1>
        </div>
      </div>
      */}
      <div className="min-h-screen bg-background px-5">
        {/* Top card */}
        <Card className="mt-6 mb-6 ">
          <CardContent className="flex items-center p-4">
            <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
              <ListChecks className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="mb-1">Objetivos</CardTitle>
              <div className="flex flex-wrap mt-3">
                <p className="bg-red-500 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-2 mb-2">
                  Colores
                </p>
                <p className="bg-yellow-500 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-2 mb-2">
                  Números
                </p>
                <p className="bg-orange-500 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-2 mb-2">
                  Vocabulario de Juego
                </p>
                <p className="bg-green-500 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mr-2 mb-2">
                  Intrucciones
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <UnoGlossaryOfWords />

        {/* Tabs section */}
        <Tabs defaultValue="tab1" className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tab1">Primer Juego</TabsTrigger>
            <TabsTrigger value="tab2">Segundo Juego</TabsTrigger>
            <TabsTrigger value="tab3">Tercer Juego</TabsTrigger>
            <TabsTrigger value="tab4">Cuarto Juego</TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab1"
            className="bg-secondary/10 p-4 rounded-b-lg"
          >
            <p className="text-sm text-muted-foreground text-center">
              haz click en cada texto para escuchar la traducción
            </p>
            <Conversation initialMessages={UnoLevel1} />
          </TabsContent>
          <TabsContent
            value="tab2"
            className="bg-secondary/10 p-4 rounded-b-lg"
          >
            <Conversation initialMessages={UnoLevel2} />
          </TabsContent>
          <TabsContent
            value="tab3"
            className="bg-secondary/10 p-4 rounded-b-lg"
          >
            <Conversation initialMessages={UnoLevel3} />
          </TabsContent>
          <TabsContent
            value="tab4"
            className="bg-secondary/10 p-4 rounded-b-lg"
          >
            <Conversation initialMessages={UnoLevel4} />
          </TabsContent>
        </Tabs>

        {/* Row with two cards 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-accent/5">
            <CardHeader>
              <div className="flex items-center">
                <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle>Fast Performance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optimized for speed and efficiency
              </p>
            </CardContent>
          </Card>
          <Card className="bg-accent/5">
            <CardHeader>
              <div className="flex items-center">
                <div className="bg-purple-500 text-white p-2 rounded-full mr-4">
                  <Rocket className="w-6 h-6" />
                </div>
                <CardTitle>Easy to Use</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Intuitive design for seamless experience
              </p>
            </CardContent>
          </Card>
        </div>
        */}
      </div>
    </>
  );
}

function MountainIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
