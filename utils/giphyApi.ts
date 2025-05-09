import { GiphySDK } from "@giphy/react-native-sdk";

// utils/giphyApi.ts
const apiKey = process.env.GIPHY_API_KEY || 'QYkmUvQQTiJ9kXaJFD002w02aW50Hmjs'; // Reemplaza con tu clave

/**
 * Obtiene un GIF aleatorio desde Giphy.
 */
export async function getRandomGif(): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const data = await response.json();
    return data?.data?.images?.original?.url || null;
  } catch (error) {
    console.error('Error al obtener GIF aleatorio:', error);
    return null;
  }
}



/**
 * Busca un GIF por palabra clave.
 * @param query Palabra o frase a buscar
 */
export async function searchGifs(query: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
        query
      )}&limit=1`
    );
    const data = await response.json();
    return data?.data[0]?.images?.original?.url || null;
  } catch (error) {
    console.error(`Error buscando GIF para "${query}":`, error);
    return null;
  }
}