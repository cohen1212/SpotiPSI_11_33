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
}

const PageContent = ({ songs, favorites, currentPage, setFavorites, playlists, createPlaylist }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.pageContentContainer}>
            {currentPage === "allSongs" && <AllSongsPage songs={songs} setFavorites={setFavorites} favorites={favorites} />}

            {currentPage === "playlists" && <PlaylistsPage songs={songs} playlists={playlists} createPlaylist={createPlaylist} />}

            {currentPage === "favorites" && <FavoritesPage songs={songs} setFavorites={setFavorites} favorites={favorites} />}
        </div>
    );
};

export default PageContent;