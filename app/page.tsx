import Link from "next/link";
import {
  ChevronRight,
  Repeat1,
  Palette,
  BicepsFlexed,
  Utensils,
  Plus,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FeatureList } from "./sections/FeatureList";
import HomeSound from "./sections/HomeSound";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
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
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 lg:w-1/2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl xl:text-6xl/none">
                Enseña inglés a tus hijos sin saber inglés.
              </h1>

              <p className="max-w-[600px] text-gray-500 md:text-xl pt-4">
                Sé protagonista en el aprendizaje de tus hijos, alejándolos de
                las pantallas y fortaleciendo el vínculo familiar.
              </p>
            </div>
            {/*   <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div> */}

            <FeatureList />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <HomeSound />
            {[
              { title: "Juego de cartar UNO!", icon: Repeat1, link: "playUno" },
              {
                title: "Ejercicios funcionales.",
                icon: BicepsFlexed,
                link: "playUno",
              },
              { title: "Pinta caritas", icon: Palette, link: "playUno" },
              { title: "Hora de comer!", icon: Utensils, link: "playUno" },
            ].map((feature, index) => (
              <Link href={feature.link} key={index}>
                <Card className="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary mr-4" />
                  <span className="text-gray-700 font-medium flex-grow">
                    {feature.title}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Card>
              </Link>
            ))}
            <Card className="flex items-center p-4 hover:bg-gray-50 transition-colors">
              <Plus className="h-6 w-6 text-primary mr-4" />
              <span className="text-gray-700 font-medium flex-grow">
                Proximamente muchos más!
              </span>
            </Card>
          </div>
        </div>
      </main>
    </div>
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
