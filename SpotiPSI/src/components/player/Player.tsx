import { Slider, IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import useStyles from "./playerStyles";
import { useState } from "react";

const emptyPlayerText = "נגן שירים";

const Player = () => {
    const { classes } = useStyles();
    const [isPlay, setIsPlay] = useState(false);

    const handlePlayToggle = () => {
        setIsPlay((prev) => !prev);
    };

    return (
        <footer className={classes.player}>
            <p className={classes.text}>{emptyPlayerText}</p>

            <div className={classes.playerBtns}>
                <IconButton>
                    <SkipNextIcon fontSize="large" />
                </IconButton>

                <IconButton onClick={handlePlayToggle}>
                    {isPlay ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
                </IconButton>

                <IconButton>
                    <SkipPreviousIcon fontSize="large" />
                </IconButton>
            </div>

            <Slider
                className={classes.slider}
                value={0}
                min={0}
                max={100}
                color="secondary"
            />
        </footer>
    );
};

export default Player;