import type { APIRoute } from "astro";

type Image = {
  src: string,
}

let images: Image[] = [
  { src: 'Azzy.png' },
  { src: 'Blunt.png' },
  { src: 'boyolali - Resized.png' },
  { src: 'libre palestina.png' },
  { src: 'Luca_6K.png' },
  { src: 'gulus - Resized.png' },
  { src: 'Comms - Vang.png' },
  { src: 'Comms - Riodile.png' },
  { src: 'Comms - Terra The Chamelark.png' },
  { src: 'Comms - Bee.png' },
  { src: '15-09-2023-0953.png' },
]

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      images: images
    })
  )
}