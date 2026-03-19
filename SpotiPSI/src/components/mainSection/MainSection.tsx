import { Routes, Route } from "react-router-dom";
import useStyles from "./MainSectionStyles";

import Sidebar from "./sidebar/Sidebar";
import AllSongsPage from "./allSongsPage/AllSongsPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import PlaylistsPage from "./playlistsPage/PlaylistsPage";
import ShowPlaylist from "./playlistsPage/showPlaylist/ShowPlaylist";
import ErrorPage from "../errorPage/ErrorPage";
import type { Song, Playlist } from "../../types/types";

interface Props {
    songs: Song[];
    favorites: string[];
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    playlists: Playlist[];
    createPlaylist: (playlistName: string) => Promise<void>;
    addSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
}

const MainSection = ({ songs, favorites, setFavorites, playlists, createPlaylist, addSongToPlaylist }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar />

            <div className={classes.pageContentContainer}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AllSongsPage
                                songs={songs}
                                favorites={favorites}
                                setFavorites={setFavorites}
                                playlists={playlists}
                                onAddSongToPlaylist={addSongToPlaylist}
                            />
                        }
                    />

                    <Route
                        path="/favorites"
                        element={
                            <FavoritesPage
                                songs={songs}
                                favorites={favorites}
                                setFavorites={setFavorites}
                                playlists={playlists}
                                onAddSongToPlaylist={addSongToPlaylist}
                            />
                        }
                    />

                    <Route
                        path="/playlists"
                        element={
                            <PlaylistsPage
                                playlists={playlists}
                                createPlaylist={createPlaylist}
                            />
                        }
                    />

                    <Route
                        path="/playlists/:playlistId"
                        element={
                            <ShowPlaylist
                                songs={songs}
                                playlists={playlists}
                                favorites={favorites}
                                setFavorites={setFavorites}
                                onAddSongToPlaylist={addSongToPlaylist}
                            />
                        }
                    />

                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default MainSection;