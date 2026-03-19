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
        currentSong?.id ? songs.indexOf(currentSong) === songs.length - 1 ?
            playAudio(songs[0]) : playAudio(songs[songs.indexOf(currentSong) + 1]) : null
    }

    const playPrevious = () => {
        currentSong?.id ? songs.indexOf(currentSong) === 0 ?
            playAudio(songs[songs.length - 1]) : playAudio(songs[songs.indexOf(currentSong) - 1]) : null
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
    }

    const playAudio = (song: Song) => {
        if (currentSong?.id === song.id) {
            setIsPlaying(true);
            return;
        }

        createAudio(song)
        setCurrentSong(song);
        setCurrentTime(0);
        setDuration(0);
        setIsPlaying(true);
    }

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        const handleLoadedMetadata = () => {
            setDuration(audio.duration || 0);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime || 0);
        };

        const handleEnded = () => {
            playNext();
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [currentSong]);

    return { currentSong, isPlaying, currentTime, duration, playAudio, playNext, playPrevious, togglePlayPause };
}

export default usePlayLogic;