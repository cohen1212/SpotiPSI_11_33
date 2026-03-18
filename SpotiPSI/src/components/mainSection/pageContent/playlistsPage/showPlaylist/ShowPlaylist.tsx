import useStyles from "./ShowPlaylistStyles";
import type { Song, Playlist } from "../../../../../types/types";
import SongsTable from "../../songsTable/SongsTable";
import { IconButton, List, ListItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
    playlistName: string;
    songs: Song[];
    handlePlaylistClose: () => void;
    favorites: string[];
    setFavorites: (favorites: string[]) => void;
    playlists: Playlist[];
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const ShowPlaylist = ({ playlistName, songs, handlePlaylistClose, favorites, setFavorites, playlists, onAddSongToPlaylist }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.showPlaylistContainer}>
            <List>
                <ListItem>
                    <h1>{playlistName}</h1>
                    <IconButton className={classes.returnBtn} size="large" onClick={handlePlaylistClose}>
                        <ArrowBackIcon fontSize="inherit" />
                    </IconButton>
                </ListItem>
            </List>
            <SongsTable songs={songs} favorites={favorites} setFavorites={setFavorites} playlists={playlists} onAddSongToPlaylist={onAddSongToPlaylist} />
        </div>
    );
};

export default ShowPlaylist;