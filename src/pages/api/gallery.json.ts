import type { APIRoute } from "astro"

type Image = {
  src: string;
};

let images: Image[] = [
  {
    src: "ocs/cahya1.png",
  },
  {
    src: "Blunt.png",
  },
  {
    src: "buff bread.png",
  },
  {
    src: "boyolali - Resized.png",
  },
  {
    src: "Gamma Scary.png",
  },
  {
    src: "ocs/voidfox2.png",
  },
  {
    src: "ocs/voidfox3.png",
  },
  {
    src: "Pec 6.png",
  },
  {
    src: "ocs/voidfox1.png",
  },
  {
    src: "derg-yanara.png",
  },
  {
    src: "espio.png",
  },
  {
    src: "ocs/spirit1.png",
  },
  {
    src: "betelgamma 3.png"
  },
  {
    src: "Azzy.png",
  },
  {
    src: "Towai.png"
  },
  {
    src: "ocs/void2.png",
  },
];

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      "images": images
    })
  )
}