import useStyles from "./SongItemStyles";
import type { Song } from "../../../../../types/types";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchPostFavorites } from "../../../../../api/api";

interface Props {
    song: Song;
    setFavorites: (favorites: string[]) => void;
    favorites: string[];
}

const SongItem = ({ song, setFavorites, favorites }: Props) => {
    const { classes } = useStyles();
    const isFavorite = favorites.includes(song.id);

    const changeFavorite = async () => {
        const previousFavorites = favorites;

        try {
            if (isFavorite) {
                setFavorites(favorites.filter((favoriteId) => favoriteId !== song.id));
                await fetchPostFavorites("/remove", song);
                return;
            }

            setFavorites([...favorites, song.id]);
            await fetchPostFavorites("/add", song);
        } catch (error) {
            console.error(error);
            setFavorites(previousFavorites);
        }
    };

    return (
        <div className={classes.songItemContainer}>
            <ListItem divider>
                <IconButton>
                    <PlayArrowIcon className={classes.playBtn} />
                </IconButton>

                <ListItemText primary={`${song.name} - ${song.artist}`} />

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton onClick={changeFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </ListItem>
        </div>
    );
};

export default SongItem;