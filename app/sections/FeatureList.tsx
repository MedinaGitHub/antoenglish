import { CheckCircle, BookOpen, Lightbulb, Brain, Trophy } from "lucide-react";

const FeatureList = () => {
  return (
    <div className="pt-6">
      <ul className="space-y-4">
        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-blue-100 text-blue-600 rounded-full p-2">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">
              Juegos y Actividades Paso a Paso
            </h3>
            {/*<p className="mt-1 text-gray-600">
              Guías detalladas de juegos y actividades que puedes realizar en
              casa, con materiales sencillos y un enfoque práctico.
            </p> */}
          </div>
        </li>
        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-green-100 text-green-600 rounded-full p-2">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">
              Glosarios de Palabras y Frases con Audio
            </h3>
            {/*<p className="mt-1 text-gray-600">
              Listas temáticas de vocabulario y expresiones comunes, acompañadas
              de consejos de pronunciación para que te sientas seguro al
              enseñar.
            </p> */}
          </div>
        </li>
        {/*        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-yellow-100 text-yellow-600 rounded-full p-2">
              <Image className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">Material de Apoyo Visual</h3>
            <p className="mt-1 text-gray-600">
              Imprimibles, tarjetas y recursos visuales que facilitan el
              aprendizaje y hacen las actividades más dinámicas.
            </p>
          </div>
        </li>
        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-red-100 text-red-600 rounded-full p-2">
              <Video className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">Videos para Padres</h3>
            <p className="mt-1 text-gray-600">
              Contenido audiovisual que te muestra cómo llevar a cabo las
              actividades y técnicas pedagógicas para maximizar el aprendizaje.
            </p>
          </div>
        </li> */}
        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-red-100 text-red-600 rounded-full p-2">
              <Brain className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">
              Aprendes 1 frase enseñas 1 frase
            </h3>
          </div>
        </li>
        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-purple-100 text-purple-600 rounded-full p-2">
              <Lightbulb className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">Tips de pronunciación y mejora</h3>
            {/*   <p className="mt-1 text-gray-600">
              Artículos y sugerencias sobre cómo adaptar las actividades a
              diferentes edades y niveles, manteniendo siempre la diversión como
              elemento clave.
            </p>*/}
          </div>
        </li>
        <li className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-orange-100 text-orange-600 rounded-full p-2">
              <Trophy className="w-6 h-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="  font-semibold">
              Comienza con frases simples y avanza según tu comodidad.{" "}
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { FeatureList };
