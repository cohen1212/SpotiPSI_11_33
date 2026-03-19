import { Slider, IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import useStyles from "./playerStyles";
import type { Song } from "../../types/types";

const emptyPlayerText = "נגן שירים";

interface Props {
    currentSong: Song | null,
    isPlaying: boolean,
    currentTime: number,
    duration: number,
    playNext: () => void;
    playPrevious: () => void;
    togglePlayPause: () => void;
}

const Player = ({ currentSong, isPlaying, currentTime, duration, playNext, playPrevious, togglePlayPause }: Props) => {
    const { classes } = useStyles();

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const playerText = currentSong ?
        `${currentSong.name} - ${currentSong.artist}` : emptyPlayerText

    return (
        <footer className={classes.player}>
            <p className={classes.text}>{playerText}</p>

            <div className={classes.playerBtns}>
                <IconButton onClick={playNext}>
                    <SkipNextIcon fontSize="large" />
                </IconButton>

                <IconButton onClick={togglePlayPause}>
                    {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
                </IconButton>

                <IconButton onClick={playPrevious}>
                    <SkipPreviousIcon fontSize="large" />
                </IconButton>
            </div>

            <Slider
                className={classes.slider}
                value={currentTime}
                min={0}
                max={duration}
                color="secondary"
            />

            <div className={classes.timesContainer}>
                <span>{formatTime(duration - currentTime)}</span>
                <span>{formatTime(currentTime)}</span>
            </div>
        </footer>
    );
};

export default Player;