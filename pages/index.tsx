import Image from "next/image";
import { Inter } from "next/font/google";
import StreamRadio from "@/components/sectionAudio/RadioBar";
import StreamVideo from "@/components/sectionVideo/StreamVideo";
import dynamic from "next/dynamic";
import RadioBar from "@/components/sectionAudio/RadioBar";
import { TileRadio } from "@/components/sectionAudio/TileRadio";

const NoSSR = dynamic(() => import("../components/sectionVideo/StreamVideo"), {
	ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div >
				{/* <div style={{ flex: "3", backgroundColor: "#3498db", padding: "10px" }}>
					<NoSSR />
				</div>

				<div style={{ flex: "1", backgroundColor: "#2ecc71", padding: "10px" }}>
					<StreamRadio />
				</div> */}

				<div style={{ height: "84px", marginBottom: "10px"}}>
					{/* Relleno para la navBar */}
				</div>

				<RadioBar />

				<TileRadio />
			</div>
		</>
	);
}
