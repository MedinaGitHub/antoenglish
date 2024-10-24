type Message = {
  id: string;
  content: string;
  sender: "you" | "kid";
  timestamp: string;
};

export const UnoLevel1: Message[] = [
  {
    id: "1",
    content: "Hi! let's play Uno!",
    sender: "you",
    timestamp: "Hola!, vamos a jugar uno!",
  },
  {
    id: "2",
    content: "First I'm gonna shuffle the cards",
    sender: "you",
    timestamp: "Primero, voy a revolver/barajar las cartas",
  },
  {
    id: "3",
    content: "Look at! I'm shuffling the cards",
    sender: "you",
    timestamp: "Mira!, estoy revolviendo/barajando las cartas",
  },
  {
    id: "4",
    content: "OK, Now I'll give you 7 cards",
    sender: "you",
    timestamp: "OK, ahora te voy a dar 7 cartas",
  },
  {
    id: "5",
    content: "7 cards for you and 7 cards for me, let's count together",
    sender: "you",
    timestamp: "7 cartas para ti y 7 cartas para mí, vamos a contar juntos",
  },
  {
    id: "6",
    content: "One... repeat after me: one, two, three, four, five, six, seven",
    sender: "you",
    timestamp:
      "Uno... repite después de mí: uno, dos, tres, cuatro, cinco, seis, siete",
  },
  {
    id: "7",
    content: "one, two, three, four, five, six, seven",
    sender: "kid",
    timestamp: "uno, dos, tres, cuatro, cinco, seis, siete",
  },
  {
    id: "8",
    content: "Look! This number is nine! Can you say 'nine'?",
    sender: "you",
    timestamp: "¡Mira! Este número es nueve. ¿Puedes decir 'nueve'?",
  },
  {
    id: "9",
    content: "nine",
    sender: "kid",
    timestamp: "nueve",
  },
  {
    id: "10",
    content: "And this color is red. Can you say 'red'?",
    sender: "you",
    timestamp: "Y este color es rojo. ¿Puedes decir 'rojo'?",
  },
  {
    id: "11",
    content: "red",
    sender: "kid",
    timestamp: "rojo",
  },
];

export const UnoLevel2: Message[] = [
  {
    id: "12",
    content: "Okay, I'll turn over the first card from the deck",
    sender: "you",
    timestamp: "OK, voy a dar vuelta la primera carta del mazo",
  },
  {
    id: "13",
    content: "Alright, now we can start. You go first.",
    sender: "you",
    timestamp: "Muy bien, ahora podemos empezar. Tú empiezas.",
  },
  {
    id: "14",
    content: "Nice, you have played a 'blue' card with the number 'seven'.",
    sender: "you",
    timestamp: "Muy bien, has jugado una carta 'azul' con el número 'siete'.",
  },
  {
    id: "15",
    content: "Can you say 'blue'?",
    sender: "you",
    timestamp: "¿Puedes decir 'azul'?",
  },
  {
    id: "16",
    content: "blue",
    sender: "kid",
    timestamp: "azul",
  },
  {
    id: "17",
    content: "Can you say 'seven'?",
    sender: "you",
    timestamp: "¿Puedes decir 'siete'?",
  },
  {
    id: "18",
    content: "seven",
    sender: "kid",
    timestamp: "siete",
  },
  {
    id: "19",
    content: "Very good!",
    sender: "you",
    timestamp: "¡Muy bien!",
  },
  {
    id: "20",
    content: "Okay, it's my turn!",
    sender: "you",
    timestamp: "¡Está bien, es mi turno!",
  },
  {
    id: "21",
    content: "I'll play this card.",
    sender: "you",
    timestamp: "Voy a jugar esta carta.",
  },
  {
    id: "22",
    content: "What color is this?",
    sender: "you",
    timestamp: "¿Qué color es este?",
  },
  {
    id: "23",
    content: "red",
    sender: "kid",
    timestamp: "rojo",
  },
  {
    id: "24",
    content: "Very good!",
    sender: "you",
    timestamp: "¡Muy bien!",
  },
  {
    id: "25",
    content: "And what number is this?",
    sender: "you",
    timestamp: "¿Y qué número es este?",
  },
  {
    id: "26",
    content: "seven",
    sender: "kid",
    timestamp: "siete",
  },
  {
    id: "27",
    content: "Very good!",
    sender: "you",
    timestamp: "¡Muy bien!",
  },
];

export const UnoLevel3: Message[] = [
  {
    id: "28",
    content: "Oh no, looks like you gotta pick up two cards!",
    sender: "you",
    timestamp: "¡Oh no, parece que tienes que tomar dos cartas!",
  },
  {
    id: "29",
    content: "You played a Wild card, which color do you want?",
    sender: "you",
    timestamp: "Jugaste una carta de cambio de color, ¿qué color eliges?",
  },
  {
    id: "30",
    content: "I pick blue!",
    sender: "kid",
    timestamp: "¡Elijo azul!",
  },
  {
    id: "31",
    content: "Okay, my turn. I'm playing this Draw Four card.",
    sender: "you",
    timestamp: "Bien, mi turno. Estoy jugando esta carta de más cuatro.",
  },
  {
    id: "32",
    content: "Your turn, grab four cards from the deck.",
    sender: "you",
    timestamp: "Tu turno, toma cuatro cartas del mazo.",
  },
  {
    id: "33",
    content: "Nice! You played a red card with a nine on it.",
    sender: "you",
    timestamp: "¡Bien! Jugaste una carta roja con el número nueve.",
  },
  {
    id: "34",
    content: "Oops, you need to draw one. Go ahead!",
    sender: "you",
    timestamp: "¡Ups, necesitas tomar una carta! ¡Vamos!",
  },
  {
    id: "35",
    content: "Can you say 'Draw Two'?",
    sender: "you",
    timestamp: "¿Puedes decir 'más dos'?",
  },
  {
    id: "36",
    content: "Draw Two",
    sender: "kid",
    timestamp: "Más dos",
  },
  {
    id: "37",
    content: "Alright, my turn. I'll switch the color to green.",
    sender: "you",
    timestamp: "Vale, mi turno. Cambiaré el color a verde.",
  },
  {
    id: "38",
    content: "You win!",
    sender: "you",
    timestamp: "¡Ganaste!",
  },
  {
    id: "39",
    content: "Can you say 'I win!'?",
    sender: "you",
    timestamp: "¿Puedes decir '¡Gané!'?",
  },
  {
    id: "40",
    content: "I win!",
    sender: "kid",
    timestamp: "¡Gané!",
  },
  {
    id: "41",
    content: "Awesome job!",
    sender: "you",
    timestamp: "¡Qué bien!",
  },
  {
    id: "42",
    content: "Let's play again. Ready?",
    sender: "you",
    timestamp: "Vamos a jugar otra vez. ¿Listo?",
  },
];

export const UnoLevel4: Message[] = [
  {
    id: "43",
    content: "Now it's your turn to tell me what to do!",
    sender: "you",
    timestamp: "¡Ahora es tu turno de decirme qué hacer!",
  },
  {
    id: "44",
    content:
      "You can say something like 'Play red seven' or 'Pick up two cards.'",
    sender: "you",
    timestamp: "Puedes decir algo como 'Juega rojo siete' o 'Toma dos cartas.'",
  },
  {
    id: "45",
    content: "Go ahead, say 'Play red seven.'",
    sender: "you",
    timestamp: "Adelante, di 'Juega rojo siete.'",
  },
  {
    id: "46",
    content: "Play red seven!",
    sender: "kid",
    timestamp: "¡Juega rojo siete!",
  },
  {
    id: "47",
    content: "Great! I'll play red seven.",
    sender: "you",
    timestamp: "¡Genial! Voy a jugar rojo siete.",
  },
  {
    id: "48",
    content: "Now, can you tell me 'Pick up two cards'?",
    sender: "you",
    timestamp: "Ahora, ¿puedes decirme 'Toma dos cartas'?",
  },
  {
    id: "49",
    content: "Pick up two cards!",
    sender: "kid",
    timestamp: "¡Toma dos cartas!",
  },
  {
    id: "50",
    content: "Oh no! I'll pick up two cards.",
    sender: "you",
    timestamp: "¡Oh no! Voy a tomar dos cartas.",
  },
  {
    id: "51",
    content: "Excellent! You're doing great!",
    sender: "you",
    timestamp: "¡Excelente! ¡Lo estás haciendo muy bien!",
  },
  {
    id: "52",
    content: "Let's try another one. Say 'Change color to blue.'",
    sender: "you",
    timestamp: "Intentemos otra. Di 'Cambia el color a azul.'",
  },
  {
    id: "53",
    content: "Change color to blue!",
    sender: "kid",
    timestamp: "¡Cambia el color a azul!",
  },
  {
    id: "54",
    content: "Okay, changing color to blue.",
    sender: "you",
    timestamp: "Bien, cambiando el color a azul.",
  },
  {
    id: "55",
    content: "I win!",
    sender: "kid",
    timestamp: "¡Gané!",
  },
  {
    id: "56",
    content: "Fantastic! You did a great job giving instructions!",
    sender: "you",
    timestamp: "¡Fantástico! ¡Hiciste un gran trabajo dando instrucciones!",
  },
  {
    id: "57",
    content: "Do you want to play again?",
    sender: "you",
    timestamp: "¿Quieres jugar de nuevo?",
  },
];
