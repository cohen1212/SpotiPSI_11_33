import React, { useState } from 'react';
import useStyles from './playerStyles';
import { Slider } from '@mui/material';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
const playerText = "נגן שירים";

const Player: React.FC = () => {
    const { classes } = useStyles()
    const [isPlay, setIsPlay] = useState(false)

    return (
        <footer className={classes.player}>
            <p className={classes.text}>{playerText}</p>

            <div>
                <SkipNextIcon fontSize='large' />
                {
                    isPlay ? <PlayArrowIcon onClick={() => setIsPlay(false)} fontSize='large' /> : <PauseIcon onClick={() => setIsPlay(true)} fontSize='large' />
                }

                <SkipPreviousIcon fontSize='large' />
            </div>
            <Slider defaultValue={50} color="secondary" />
        </footer>
    );
}

export default Player; 