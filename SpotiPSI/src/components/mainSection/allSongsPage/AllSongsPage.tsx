import useStyles from "./AllSongsPageStyles";
import type { Song, Playlist } from "../../../types/types";
import SongsTable from "../songsTable/SongsTable";

const pageTitle = "כל השירים";

interface Props {
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    favorites: string[]
    playlists: Playlist[];
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
    createAudio: (song: Song) => void;
    playAudio: (song: Song) => void;
}

const AllSongsPage = ({ songs, setFavorites, favorites, playlists, onAddSongToPlaylist, createAudio, playAudio }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.allSongsContainer}>
            <h1>{pageTitle}</h1>
            <SongsTable
                songs={songs}
                setFavorites={setFavorites}
                favorites={favorites}
                playlists={playlists}
                onAddSongToPlaylist={onAddSongToPlaylist}
                createAudio={createAudio}
                playAudio={playAudio}
            />
        </div>
    );
};

export default AllSongsPage;