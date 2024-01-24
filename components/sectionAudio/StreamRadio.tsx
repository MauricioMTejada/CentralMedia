import React, { useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radio.jpg";
import fmayer from "../../public/radioLogos/fmayer.png";
import { TileRadio } from "./TileRadio";

const StreamRadio = () => {
	const station = {
		url_resolved: "https://26683.live.streamtheworld.com/NIHUIL_AM680.mp3",
		name: "FM Ayer",
		image: fmayer,
	};

	return (
		<div >
			<div className="bg-[#6f0a99] rounded-t-lg flex items-center justify-center p-2 font-bold"> Radio </div>

			<div style={{marginBottom: "10px"}}>
				<AudioPlayer
					className="player"
					src={station.url_resolved}
					customProgressBarSection={[]}
					customControlsSection={ [ RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS, ] }
					autoPlayAfterSrcChange={true}
					showJumpControls={false}
					showFilledVolume={true}
				/>
			</div>


			<TileRadio />
		</div>
	);
};

export default StreamRadio;
