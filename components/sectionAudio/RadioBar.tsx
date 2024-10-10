import React from "react";
import Image from "next/image";
import styles from "./RadioBar.module.css";
import { master_radio } from "@/public/images";
import AudioPlayerWrapper from "./AudioPlayerWrapper";

const RadioBar: React.FC = () => {
	return (
		<div className={styles.imageContainer}>
			<Image
				src={master_radio}
				alt="Master Radio"
				priority
				style={{ width: '740px', height: 'auto' }}
			/>
			<AudioPlayerWrapper />
		</div>
	);
};

export default RadioBar;
