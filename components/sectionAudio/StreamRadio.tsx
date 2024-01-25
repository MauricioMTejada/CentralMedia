import React, { useContext, useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { TileRadio } from "./TileRadio";
import { DataContext } from "@/context";

const StreamRadio = () => {

	const { radioSet } = useContext(DataContext)

	return (
		<div >
			<div className="bg-[#6f0a99] rounded-t-lg flex items-center justify-center p-2 font-bold"> Radio </div>

			<div style={{marginBottom: "10px"}}>
				<AudioPlayer
					className="player"
					src={radioSet.url}
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
