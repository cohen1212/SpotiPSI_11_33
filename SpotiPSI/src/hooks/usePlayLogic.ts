import { useEffect, useState, useRef } from "react";
import type { Song } from "../types/types";


type ReturnObj = {
    currectSong: Song,
    isPlaying: boolean,
    currectTime: number,
    duration: number,
    playNext: () => void;
    playPrevious: () => void;
    togglePlayPause: () => void;
    playAudio: () => void;
    createAudio: () => void;
}

const usePlayLogic = (songs: Song[]) => {
    const [currectSong, setCurrectSong] = useState<Song | undefined>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrectTime] = useState<number>(0);
    const [duration, setDuration] = useState<number | undefined>();


    let audioRef = useRef<HTMLAudioElement | null>(null);

    const playNext = () => {
        currectSong?.id !== undefined ? setCurrectSong(songs[Number[currectSong.id] + 1]) : null
    }
    const playPrevious = () => {
        setCurrectSong(songs[Number(currectSong?.id) + 1])
    }
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }
    const updateSong = (song: Song) => {
        setCurrectSong(song)
    }

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    }, [isPlaying]);

    const createAudio = (song: Song) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;

        }
        const audioElement =  new Audio(`/songs/${song.id}.mp3`);
        audioRef.current = audioElement;
    }
    const playAudio = () => {
        audioRef.current?.play()
    }

    audioRef.current?.addEventListener("loadedmetadata", (event) => {
        let duration = audioRef.current?.duration;
        setDuration(duration)
    });
    audioRef.current?.addEventListener("updateTime", (event) => {
        setCurrectTime(Number(audioRef.current?.currentTime))
    });
    audioRef.current?.addEventListener("ended", (event) => {
        if (duration !== undefined) currentTime >= duration ? setCurrectSong(songs[Number(currectSong?.id) + 1]) : null
    });

    return { currectSong, isPlaying, currentTime, duration, playNext, playPrevious, togglePlayPause, updateSong };
}

export default usePlayLogic;