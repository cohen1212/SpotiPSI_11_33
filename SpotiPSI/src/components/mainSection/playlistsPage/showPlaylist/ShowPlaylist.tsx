import useStyles from "./ShowPlaylistStyles";
import type { Song, Playlist } from "../../../../types/types";
import SongsTable from "../../songsTable/SongsTable";
import { IconButton, List, ListItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../../../errorPage/ErrorPage";

interface Props {
    songs: Song[];
    favorites: string[];
    setFavorites: (favorites: string[]) => void;
    playlists: Playlist[];
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const ShowPlaylist = ({ songs, favorites, setFavorites, playlists, onAddSongToPlaylist }: Props) => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const { playlistId } = useParams();

    const playlist = useMemo(() => {
        return playlists.find((currentPlaylist) => currentPlaylist.id === playlistId) ?? null;
    }, [playlists, playlistId]);

    const playlistSongs = useMemo(() => {
        if (!playlist) {
            return [];
        }

        return songs.filter((song) => playlist.songIds.includes(song.id));
    }, [playlist, songs]);

    if (!playlist) {
        return <ErrorPage />;
    }

    const handleBackClick = () => {
        navigate("/playlists");
    };

    return (
        <div className={classes.showPlaylistContainer}>
            <List>
                <ListItem>
                    <h1>{playlist.name}</h1>
                    <IconButton
                        className={classes.returnBtn}
                        size="large"
                        onClick={handleBackClick}
                    >
                        <ArrowBackIcon fontSize="inherit" />
                    </IconButton>
                </ListItem>
            </List>

            <SongsTable
                songs={playlistSongs}
                favorites={favorites}
                setFavorites={setFavorites}
                playlists={playlists}
                onAddSongToPlaylist={onAddSongToPlaylist}
            />
        </div>
    );
};

export default ShowPlaylist;