
import { useEffect, useState, useRef } from "react";
import type { Song } from "../../types/types";


type ReturnObj = {
    currectSong: Song,
    isPlaying: boolean,
    currectTime: number,
    duration: number,
    playNext: () => void;
    playPrevious: () => void;
    togglePlayPause: () => void;
}

const usePlayLogic = (songs: Song[], song: Song) => {
    const mp3lUrl: string = '../../../../../../public/songs'
    const [currectSong, setCurrectSong] = useState<Song | undefined>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [queue, setQueueSongs] = useState<Song[]>([]);
    const [currectTime, setCurrectTime] = useState<number>(0);
    const [duration, setDuration] = useState<number | undefined>();

    const audioElement = new Audio(`${mp3lUrl}/${song.id}.mp3`);
    let audioRef = useRef<HTMLAudioElement>(audioElement);

    const playNext = () => {
        setCurrectSong(queue[Number(song.id) + 1])
    }
    const playPrevious = () => {
        setCurrectSong(queue[Number(song.id) + 1])
    }
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    }, [isPlaying]);
    isPlaying ? setIsPlaying(false) : setIsPlaying(true)


    audioRef.current.addEventListener("loadedmetadata", (event) => {
        let duration = audioElement.duration;
        setDuration(duration)
    });
    audioRef.current.addEventListener("updateTime", (event) => {
        setCurrectTime(audioRef.current.currentTime)
    });
    audioRef.current.addEventListener("ended", (event) => {
        if (duration !== undefined) currectTime >= duration ? setCurrectSong(queue[Number(song.id) + 1]) : null
    });


    return {};


}

export default usePlayLogic;