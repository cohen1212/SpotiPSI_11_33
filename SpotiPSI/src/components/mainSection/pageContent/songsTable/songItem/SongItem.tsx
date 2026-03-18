import useStyles from "./SongItemStyles";
import type { Song } from "../../../../../types/types";

import { ListItem, ListItemText, IconButton } from "@mui/material";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from '@mui/icons-material/Favorite';
import fetchPostServer from "../../../../../api/ApiPost";

interface Props {
    song: Song;
    setFavorites: (favorites: string[]) => void;
    favorites: string[];

}

const SongItem = ({ song, setFavorites, favorites }: Props) => {
    const { classes } = useStyles();
    const [isFavorite, setIsFavorite] = useState<Boolean>(false);


    const changeFavorite = () => {
        if (isFavorite) {
            setIsFavorite(false)
            const favoriteSongs = favorites.filter(favorite => favorite !== song.id);
            setFavorites(favoriteSongs)
            fetchPostServer({ url: "http://localhost:5001/api/favorites/remove", song: song })


        }
        else {
            setIsFavorite(true)
            setFavorites([...favorites, song.id])
            fetchPostServer({ url: "http://localhost:5001/api/favorites/add", song: song })


        }


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
                        favorites.includes(song.id) ? <FavoriteIcon onClick={changeFavorite} /> : <FavoriteBorderIcon onClick={changeFavorite} />
                    }


                </IconButton>

            </ListItem>
        </div>
    );
};

export default SongItem;