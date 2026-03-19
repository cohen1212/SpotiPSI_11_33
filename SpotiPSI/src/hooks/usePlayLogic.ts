import { useEffect, useState, useRef } from "react";
import type { Song } from "../types/types";

type ReturnObj = {
    currentSong: Song | null,
    isPlaying: boolean,
    currentTime: number,
    duration: number,
    playAudio: (song: Song) => void;
    playNext: () => void;
    playPrevious: () => void;
    togglePlayPause: () => void;
}

const usePlayLogic = (songs: Song[]): ReturnObj => {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playNext = () => {
        currentSong?.id ? setCurrentSong(songs[Number(currentSong.id) + 1]) : null
    }

    const playPrevious = () => {
        currentSong?.id ? setCurrentSong(songs[Number(currentSong.id) - 1]) : null
    }

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev)
    }

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    }, [isPlaying]);

    const createAudio = (song: Song) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;

        }
        const audioElement = new Audio(`/songs/${song.id}.mp3`);
        audioRef.current = audioElement;
        return audioElement;
    }

    const playAudio = (song: Song) => {
        if (currentSong?.id === song.id) {
            setIsPlaying(true);
            return;
        }

        setCurrentSong(song);
        setCurrentTime(0);
        setDuration(0);
        setIsPlaying(true);
    }

    audioRef.current?.addEventListener("loadedmetadata", (event) => {
        let duration = audioRef.current?.duration;
        duration ? setDuration(duration) : null
    });
    audioRef.current?.addEventListener("timeupdate", (event) => {
        setCurrentTime(Number(audioRef.current?.currentTime))
    });
    audioRef.current?.addEventListener("ended", (event) => {
        Number(currentSong?.id) == songs.length - 1 ? setCurrentSong(songs[Number(currentSong?.id) + 1]) : setCurrentSong(songs[0])
    });

    return { currentSong, isPlaying, currentTime, duration, playAudio, playNext, playPrevious, togglePlayPause };
}

export default usePlayLogic;