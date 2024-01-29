import React, { useContext, useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { TileRadio } from "./TileRadio";
import { DataContext } from "@/context";
import { red } from "@mui/material/colors";
import { AppBar, Box } from "@mui/material";
import radioRetro from "@/public/retro4.jpg"

const RadioBar = () => {

	const { radioSet } = useContext(DataContext)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" sx={{ flexDirection: 'row' }} className="flex  p-2 ">

				<AudioPlayer
					className="player"
					src={radioSet.url}
					customProgressBarSection={[]}
					customControlsSection={ [ RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS, ] }
					autoPlayAfterSrcChange={true}
					showJumpControls={false}
					showFilledVolume={true}
					layout="stacked"
					style={{ backgroundColor: '#1e1e1e', width: '300px', justifyContent: 'space-around'}}
				/>

				<div style={{
					// width: "120px",
					// height: "68px",
					flex: 1,
					backgroundImage: `url(${radioRetro.src})`,
					backgroundSize: "cover",
					backgroundPosition: "0% 25%",
					backgroundRepeat: "no-repeat",
					marginLeft: "10px",
					flexDirection: "row"
				}}>
				</div>


			</AppBar>
		</Box>
	);
};

export default RadioBar;
