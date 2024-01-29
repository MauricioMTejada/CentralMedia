import imageFmAyer from "../public/radioLogos/fmayer.png";
import imageNihuil from "../public/radioLogos/nihuil.png";
import imagePelagatos from "../public/radioLogos/pelagatos2.png";
import imagefdmradio from "../public/radioLogos/FDM-radio-Usuahia.png"
import imageMdzRadio from "../public/radioLogos/mdzradio.png"
import imageProdan from "../public/radioLogos/estacionProdan.png"

export interface LiveRadio {
    url: string;
    nameRadio: string;
    image: string;
    frequency: string;
    origin: string;
    source: RadioSource;
    oficialPage: string;
  }

export type RadioSource = "local" | "external"

export const LiveRadios: LiveRadio[] = [
    {url: "https://icecast.unomedios.com.ar/ayer",
        nameRadio: "FM Ayer",
        image: imageFmAyer.src,
        frequency: "98.1",
        origin: "Ciudad de Mendoza, Mendoza",
        source: "local",
        oficialPage: ""
    },
    {url: "https://26683.live.streamtheworld.com/NIHUIL_AM680.mp3",
        nameRadio: "Radio Nihuil",
        image: imageNihuil.src,
        frequency: "98.9",
        origin: "Ciudad de Mendoza, Mendoza",
        source: "local",
        oficialPage: ""
    },
    {url: "https://buecrplb01.cienradios.com.ar/pelagatos.mp3",
        nameRadio: "Pelagatos",
        image: imagePelagatos.src,
        frequency: "Streaming",
        origin: "Buenos Aires",
        source: "local",
        oficialPage: ""
    },
    {url: "https://fdmradio.com.ar:1407/;?type=http&amp;nocache=6",
        nameRadio: "FDM Radio Ushuaia",
        image: imagefdmradio.src,
        frequency: "91.7",
        origin: "Tierra del fuego",
        source: "local",
        oficialPage: "https://www.fdmradio.com.ar"
    },
    {url: "https://streaming6.locucionar.com:24110/stream",
        nameRadio: "MDZ Radio",
        image: imageMdzRadio.src,
        frequency: "105.5",
        origin: "Ciudad de Mendoza, Mendoza",
        source: "local",
        oficialPage: "https://www.mdzol.com/mdzradio"
    },
    {url: "https://alpha.radioplayer.com.ar:9158/estacionprodan1007",
        nameRadio: "Estación Prodan",
        image: imageProdan.src,
        frequency: "100.7",
        origin: "San Rafael, Mendoza",
        source: "local",
        oficialPage: "https://www.estacionprodan.com.ar"
    },
    // {url: "",
    //     nameRadio: "",
    //     image: "",
    //     frequency: "",
    //     origin: "",
    //     source: "local",
    //     oficialPage: ""
    // },
]

// export default LiveRadios;