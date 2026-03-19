import React from 'react';
import useStyles from './playerStyles';

const playerText = "נגן שירים";

const Player: React.FC = () => {
    const { classes } = useStyles()

    return (
        <footer className={classes.player}>
            <p className={classes.text}>{playerText}</p>
        </footer>
    );
}

export default Player;