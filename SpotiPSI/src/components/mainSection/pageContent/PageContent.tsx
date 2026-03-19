import useStyles from "./PageContentStyles";
import type { Song, Page, Playlist } from "../../../types/types";
import AllSongsPage from "./allSongsPage/AllSongsPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import PlaylistsPage from "./playlistsPage/PlaylistsPage";

interface Props {
    songs: Song[];
    favorites: string[];
    currentPage: Page;
    setFavorites: (favorites: string[]) => void;
    playlists: Playlist[];
    createPlaylist: (name: string) => Promise<void>;
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
    setCurrectSong: (currectSong: Song | undefined) => void;
    setQueueSongs: (songs: Song[]) => void;
    setIsPlaying: (isPlaying: boolean) => void;
}



const PageContent = ({ songs, favorites, currentPage, setFavorites , playlists, createPlaylist, onAddSongToPlaylist , setCurrectSong ,setIsPlaying , setQueueSongs}: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            {currentPage === "allSongs" && <AllSongsPage
                songs={songs}
                setFavorites={setFavorites}
                favorites={favorites}
                playlists={playlists}
                onAddSongToPlaylist={onAddSongToPlaylist}
                setCurrectSong={setCurrectSong} 
                setIsPlaying={setIsPlaying} 
                setQueueSongs={setQueueSongs}
            />}

            {currentPage === "playlists" && <PlaylistsPage
                songs={songs}
                playlists={playlists}
                createPlaylist={createPlaylist}
                onAddSongToPlaylist={onAddSongToPlaylist}
                favorites={favorites}
                setFavorites={setFavorites}
            />}

            {currentPage === "favorites" && <FavoritesPage
                songs={songs}
                setFavorites={setFavorites}
                favorites={favorites}
                playlists={playlists}
                onAddSongToPlaylist={onAddSongToPlaylist}
            />}
        </div>
    );
};

export default PageContent;