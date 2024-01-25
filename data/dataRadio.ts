import imageFmAyer from "../public/radioLogos/fmayer.png";
import imageNihuil from "../public/radioLogos/nihuil.png";
import imagePelagatos from "../public/radioLogos/pelagatos2.png";

export interface LiveRadio {
    url: string;
    nameRadio: string;
    image: string;
    frequency: string;
    origin: string;
  }

export const LiveRadios: LiveRadio[] = [
    {url: "https://icecast.unomedios.com.ar/ayer",
        nameRadio: "FM Ayer",
        image: imageFmAyer.src,
        frequency: "98.1",
        origin: "Ciudad de Mendoza, Mendoza"
    },
    {url: "https://26683.live.streamtheworld.com/NIHUIL_AM680.mp3",
        nameRadio: "Radio Nihuil",
        image: imageNihuil.src,
        frequency: "98.9",
        origin: "Ciudad de Mendoza, Mendoza"
    },
    {url: "https://buecrplb01.cienradios.com.ar/pelagatos.mp3",
        nameRadio: "Pelagatos",
        image: imagePelagatos.src,
        frequency: "Streaming",
        origin: "Buenos Aires"
    },
    // {url: "",
    //     nameRadio: "",
    //     image: "",
    //     frequency: "",
    //     origin: ""
    // },
    // {url: "",
    //     nameRadio: "",
    //     image: "",
    //     frequency: "",
    //     origin: ""
    // },
    // {url: "",
    //     nameRadio: "",
    //     image: "",
    //     frequency: "",
    //     origin: ""
    // },
]

// export default LiveRadios;