import useStyles from "./MainSectionStyles";
import Sidebar from "./sidebar/Sidebar";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import type { Song, Playlist } from "../../types/types";
import { fetchServer, postPlaylist, postSongToPlaylist } from "../../api/api";
import AllSongsPage from "./allSongsPage/AllSongsPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import PlaylistsPage from "./playlistsPage/PlaylistsPage";
import ShowPlaylist from "./playlistsPage/showPlaylist/ShowPlaylist";
import ErrorPage from "../errorPage/ErrorPage";

const MainSection = () => {
    const { classes } = useStyles();

    const [songs, setSongs] = useState<Song[]>([]);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        const loadSongs = async () => {
            try {
                const data = await fetchServer("/songs");
                setSongs(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadSongs();
    }, []);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const data = await fetchServer("/favorites");
                setFavorites(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadFavorites();
    }, []);

    useEffect(() => {
        const loadPlaylists = async () => {
            try {
                const data = await fetchServer("/playlists");
                setPlaylists(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadPlaylists();
    }, []);

    const createPlaylist = async (name: string) => {
        try {
            const newPlaylist = await postPlaylist(name);
            setPlaylists((prev) => [...prev, newPlaylist]);
        } catch (error) {
            console.error(error);
        }
    };

    const addSongToPlaylist = async (songId: string, playlistId: string) => {
        try {
            await postSongToPlaylist(songId, playlistId);

            setPlaylists((prev) =>
                prev.map((playlist) => {
                    if (playlist.id !== playlistId) {
                        return playlist;
                    }

                    if (playlist.songIds.includes(songId)) {
                        return playlist;
                    }

                    return {
                        ...playlist,
                        songIds: [...playlist.songIds, songId],
                    };
                })
            );
        } catch (error) {
            console.error(error);
        }
    };

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
                                setFavorites={setFavorites}
                                favorites={favorites}
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

                    <Route
                        path="/favorites"
                        element={
                            <FavoritesPage
                                songs={songs}
                                setFavorites={setFavorites}
                                favorites={favorites}
                                playlists={playlists}
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