import { useEffect, useState } from "react";
import type { Playlist, Song } from "../types/types";
import { fetchServer, postPlaylist, postSongToPlaylist } from "../api/api";

type UseAppHandlerReturn = {
    songs: Song[];
    favorites: string[];
    playlists: Playlist[];
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    createPlaylist: (name: string) => Promise<void>;
    addSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
};

const useAppHandler = (): UseAppHandlerReturn => {
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

    return {
        songs,
        favorites,
        playlists,
        setFavorites,
        createPlaylist,
        addSongToPlaylist,
    };
};

export default useAppHandler;