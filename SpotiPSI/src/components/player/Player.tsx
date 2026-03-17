

import React from 'react';
import useStyles from './playerStyles';

const Player: React.FC = () => 
{
    const {classes} =  useStyles()

    return(
        <footer className={classes.player}>
            <p className={classes.text}>
                נגן שירים
            </p>
        </footer>
    );
}

 export default Player;