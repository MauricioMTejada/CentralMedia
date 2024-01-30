import { useEffect } from "react";
import YoutubePlayer from "react-player/youtube";
import dataChannels from "../../data/dataChannels";

console.log(dataChannels);

const StreamVideo = () => {

    return (
        <div className="grid grid-cols-3 gap-1" >
            {dataChannels.map( (myObjet, index) => {
                return(
                    <div key={`channel-${index}`}>
                        <div className="bg-[#003332] rounded-t-lg flex items-center justify-center p-2 font-bold">{myObjet.nameChannel}</div>
                        <div className="bg-[#003332] flex items-center justify-center">
                        <YoutubePlayer url={myObjet.url}
                            controls
                            muted
                            width={370}
                            height={210}
                            playing
                        />
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default StreamVideo;