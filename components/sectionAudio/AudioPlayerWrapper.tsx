"use client";

import React, { useRef, useEffect, useContext } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { DataContext } from "@/context";
import styles from "./AudioPlayerWrapper.module.css";

const AudioPlayerWrapper: React.FC = () => {
    const { radioSet } = useContext(DataContext);
    const audioPlayerRef = useRef<any>(null);

    const handleWheel = (e: WheelEvent) => {
        if (audioPlayerRef.current?.audio.current) {
            const currentVolume =
                audioPlayerRef.current.audio.current.volume || 0;
            const newVolume = Math.min(
                Math.max(0, currentVolume - e.deltaY * 0.0005),
                1
            );
            audioPlayerRef.current.audio.current.volume = newVolume;
        }
    };

    useEffect(() => {
        const audioPlayerElement = audioPlayerRef.current?.container.current;
        if (audioPlayerElement instanceof HTMLElement) {
            audioPlayerElement.addEventListener("wheel", handleWheel);
        }
        return () => {
            if (audioPlayerElement instanceof HTMLElement) {
                audioPlayerElement.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

    return (
        <AudioPlayer
            ref={audioPlayerRef}
            className={`player ${styles.audioPlayer}`}
            src={radioSet.url}
            customProgressBarSection={[]}
            customControlsSection={[
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.VOLUME_CONTROLS,
            ]}
            autoPlayAfterSrcChange={true}
            showJumpControls={false}
            showFilledVolume={true}
            layout="stacked"
            defaultCurrentTime="00:00"
            defaultDuration="00:00"
            volume={0.5}
        />
    );
};

export default AudioPlayerWrapper;
