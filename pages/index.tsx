import Image from "next/image";
import { Inter } from "next/font/google";
import StreamRadio from "@/components/sectionAudio/StreamRadio";
import StreamVideo from "@/components/sectionVideo/StreamVideo";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../components/sectionVideo/StreamVideo"), {
	ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div style={{ display: "flex" }}>
				<div style={{ flex: "3", backgroundColor: "#3498db", padding: "10px" }}>
					{/* <NoSSR /> */}
				</div>

				<div style={{ flex: "1", backgroundColor: "#2ecc71", padding: "10px" }}>
					<StreamRadio />
				</div>
			</div>
		</>
	);
}
