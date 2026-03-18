import * as React from 'react';
import useStyles from "./SongItemStyles";
import type { Song, Playlist } from "../../../../../types/types";
import { ListItem, ListItemText, IconButton, Menu, MenuItem } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchPostFavorites } from "../../../../../api/api";

interface Props {
    song: Song;
    setFavorites: (favorites: string[]) => void;
    favorites: string[];
    playlists: Playlist[];
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const SongItem = ({ song, setFavorites, favorites, playlists, onAddSongToPlaylist }: Props) => {
    const { classes } = useStyles();
    const isFavorite = favorites.includes(song.id);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

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

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAddToPlaylist = async (playlistId: string) => {
        try {
            await onAddSongToPlaylist(song.id, playlistId);
            handleMenuClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={classes.songItemContainer}>
            <ListItem divider>
                <IconButton>
                    <PlayArrowIcon className={classes.playBtn} />
                </IconButton>

                <ListItemText primary={`${song.name} - ${song.artist}`} />

                <IconButton onClick={handleMenuOpen}>
                    <AddIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                >
                    {playlists.map((playlist) => (
                        <MenuItem
                            key={playlist.id}
                            onClick={() => handleAddToPlaylist(playlist.id)}
                        >
                            {playlist.name}
                        </MenuItem>
                    ))}
                </Menu>

                <IconButton onClick={changeFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </ListItem>
        </div>
    );
};

export default SongItem;