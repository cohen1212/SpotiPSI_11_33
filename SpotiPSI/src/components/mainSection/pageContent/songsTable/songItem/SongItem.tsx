import useStyles from "./SongItemStyles";
import type { Song } from "../../../../../types/types";

import { ListItem, ListItemText, IconButton } from "@mui/material";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    song: Song;
    setFavorites: (favorites: string[]) => void;
    favorites: string[];

}

const SongItem = ({ song, setFavorites, favorites }: Props) => {
    const { classes } = useStyles();
    const [isFavorite, setIsFavorite] = useState<Boolean>(false);


    const addFavorite = () => {

        isFavorite ? setIsFavorite(false) : setIsFavorite(true)
        const favoriteSongs = favorites.filter(favorite => favorite !== song.id);
        isFavorite ? setFavorites([...favorites, song.id]) : setFavorites(favoriteSongs)
        //isFavorite ? setFavorites() :setFavorites(favorites);
    }

    return (
        <div className={classes.songItemContainer}>
            <ListItem divider>

                <IconButton >
                    <PlayArrowIcon className={classes.playBtn} />
                </IconButton>

                <ListItemText
                    primary={song.name + " - " + song.artist}
                />

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton >
                    {
                        isFavorite ? <FavoriteIcon onClick={addFavorite} /> : <FavoriteBorderIcon onClick={addFavorite} />
                    }


                </IconButton>

            </ListItem>
        </div>
    );
};

export default SongItem;