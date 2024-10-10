"use client";

import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import RadioBar from "@/components/sectionAudio/RadioBar";
import { TileRadio } from "@/components/tileRadio/TileRadio";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { DataContext } from "@/context";
import { LiveRadios } from "@/data/dataRadio";

const NoSSR = dynamic(() => import("../components/sectionVideo/StreamVideo"), {
	ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

	// Ésta sección es para cargar una radio aleatoria
		const { setRadioSet } = useContext(DataContext);

		useEffect(() => {
			const randomRadio =
				LiveRadios[Math.floor(Math.random() * LiveRadios.length)];
			setRadioSet(randomRadio);
		}, []);

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
