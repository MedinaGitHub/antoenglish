import { NextResponse } from 'next/server';
import textToSpeech from '@google-cloud/text-to-speech';

// Crear el cliente usando las credenciales almacenadas como texto en una variable de entorno
const client = new textToSpeech.TextToSpeechClient({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
});

export async function POST(req) {
  try {
    const { text } = await req.json();

    const request = {
      input: { text },
      voice: { languageCode: 'en-US', name: 'en-US-Standard-A' },
      audioConfig: { audioEncoding: 'MP3' },
    };


    const [response] = await client.synthesizeSpeech(request);
    console.log('ana elsa',response)
    const audioContent = response.audioContent;

    // Convertir a base64 para enviar el audio en la respuesta
    const base64Audio = audioContent.toString('base64');
    return NextResponse.json({ audio: base64Audio });
  } catch (error) {
    console.error('Error al generar el audio:', error);
    return NextResponse.json({ error: 'Error al generar el audio' }, { status: 500 });
  }
}
