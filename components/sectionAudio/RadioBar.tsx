"use client";

import React from "react";
import Image from "next/image";
import styles from "./RadioBar.module.css";
import { master_radio } from "@/public/images";
import AudioPlayerWrapper from "./AudioPlayerWrapper"; // Subcomponente de audio

const RadioBar = () => {
	return (
		<div className={styles.imageContainer}>
			{/* Imagen de Radio */}
			<Image
				src={master_radio}
				alt="Master Radio"
				layout="fixed"
				width={740}
				height={416}
			/>

			{/* Player */}
			<AudioPlayerWrapper />
		</div>
	);
};

export default RadioBar;
