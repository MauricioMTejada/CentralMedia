import imageFmAyer from "../public/radioLogos/fmayer.png";
import imageNihuil from "../public/radioLogos/nihuil.png";
import imagePelagatos from "../public/radioLogos/pelagatos2.png";
import imagefdmradio from "../public/radioLogos/FDM-radio-Usuahia.png";
import imageMdzRadio from "../public/radioLogos/mdzradio.png";
import imageProdan from "../public/radioLogos/estacionProdan.png";
import imageLvDiez from "../public/radioLogos/lvdiez.webp";
import imageRadioDos from "../public/radioLogos/radiodos.png";
import imageMetropolitana from "../public/radioLogos/metropolitana.png";

export interface LiveRadio {
	url: string;
	nameRadio: string;
	image: string;
	frequency: string;
	origin: string;
	source: RadioSource;
	oficialPage: string;
}

export type RadioSource = "local" | "external";

export const LiveRadios: LiveRadio[] = [
	{
		url: "https://icecast.unomedios.com.ar/ayer",
		nameRadio: "FM Ayer",
		image: imageFmAyer.src,
		frequency: "98.1",
		origin: "Ciudad de Mendoza, Mendoza",
		source: "local",
		oficialPage: "https://www.fmayer.net.ar",
	},
	{
		url: "https://26683.live.streamtheworld.com/NIHUIL_AM680.mp3",
		nameRadio: "Radio Nihuil",
		image: imageNihuil.src,
		frequency: "98.9",
		origin: "Ciudad de Mendoza, Mendoza",
		source: "local",
		oficialPage: "https://www.radionihuil.com.ar",
	},
	{
		url: "https://buecrplb01.cienradios.com.ar/pelagatos.mp3",
		nameRadio: "Pelagatos",
		image: imagePelagatos.src,
		frequency: "Streaming",
		origin: "Buenos Aires",
		source: "local",
		oficialPage: "https://pelagatos.com.ar",
	},
	{
		url: "https://fdmradio.com.ar:1407/;?type=http&amp;nocache=6",
		nameRadio: "FDM Radio Ushuaia",
		image: imagefdmradio.src,
		frequency: "91.7",
		origin: "Tierra del fuego",
		source: "local",
		oficialPage: "https://www.fdmradio.com.ar",
	},
	{
		url: "https://streaming6.locucionar.com:24110/stream",
		nameRadio: "MDZ Radio",
		image: imageMdzRadio.src,
		frequency: "105.5",
		origin: "Ciudad de Mendoza, Mendoza",
		source: "local",
		oficialPage: "https://www.mdzol.com/mdzradio",
	},
	{
		url: "https://alpha.radioplayer.com.ar:9158/estacionprodan1007",
		nameRadio: "Estación Prodan",
		image: imageProdan.src,
		frequency: "100.7",
		origin: "San Rafael, Mendoza",
		source: "local",
		oficialPage: "https://www.estacionprodan.com.ar",
	},
	{
		url: "https://streamserver-2.xyz/listen/lvdiez/radio.aac",
		nameRadio: "LV Diez",
		image: imageLvDiez.src,
		frequency: "104.1",
		origin: "Ciudad de Mendoza, Mendoza",
		source: "local",
		oficialPage: "https://www.lvdiez.com.ar",
	},

	{
		url: "https://st1.peymi.net/listen/radio_2_fm/radio.mp3",
		nameRadio: "Radio 2 FM",
		image: imageRadioDos.src,
		frequency: "103.1",
		origin: "Godoy Cruz, Mendoza",
		source: "local",
		oficialPage: "http://www.radio2fm.com.ar",
	},

	{
		url: "https://masservidor.net:7176/stream/;type=mp3",
		nameRadio: "Metropolitana",
		image:  imageMetropolitana.src,
		frequency: "95.3",
		origin: "Ciudad de Mendoza, Mendoza",
		source: "local",
		oficialPage: "https://metropolitana953.com",
	},

	// {
	// 	url: "",
	// 	nameRadio: "",
	// 	image: ,
	// 	frequency: "",
	// 	origin: "",
	// 	source: "local",
	// 	oficialPage: "",
	// },
];
