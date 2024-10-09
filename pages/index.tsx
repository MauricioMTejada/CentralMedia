import Image from "next/image";
import { Inter } from "next/font/google";
import StreamRadio from "@/components/sectionAudio/RadioBar";
import StreamVideo from "@/components/sectionVideo/StreamVideo";
import dynamic from "next/dynamic";
import RadioBar from "@/components/sectionAudio/RadioBar";
import { TileRadio } from "@/components/sectionAudio/TileRadio";
import Head from "next/head";

const NoSSR = dynamic(() => import("../components/sectionVideo/StreamVideo"), {
	ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>CentralMedia</title>
			</Head>
			<div>
				<RadioBar />

				<TileRadio />
			</div>
		</div>
	);
}
