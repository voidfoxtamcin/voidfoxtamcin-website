import type { APIRoute } from "astro"

type Image = {
  src: string;
};

let images: Image[] = [
  {
    src: "cahya.png",
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
    src: "Hmm.png",
  },
  {
    src: "Pec 6.png",
  },
  {
    src: "Tamcin.png",
  },
  {
    src: "derg-yanara.png",
  },
  {
    src: "espio.png",
  },
  {
    src: "sprit-tamcin.png",
  },
  {
    src: "betelgamma 3.png"
  },
  {
    src: "Azzy.png",
  },
  {
    src: "Towai.png"
  }
];

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      "images": images
    })
  )
}