import type { Song, Playlist } from "../../../../types/types";

import { useEffect } from "react";
import { List } from "@mui/material";
import SongItem from "./songItem/SongItem";

interface Props {
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    favorites: string[]
    playlists: Playlist[];
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
     setCurrectSong: (currectSong: Song | undefined) => void;
    setQueueSongs: (songs: Song[]) => void;
    setIsPlaying: (isPlaying: boolean) => void;
}



const SongsTable = ({ songs, setFavorites, favorites, playlists, onAddSongToPlaylist , setCurrectSong, setIsPlaying, setQueueSongs }: Props) => {
    useEffect(() => {
        try {
            setQueueSongs(songs);
        }
        catch (e) { console.error(e); }
    }, []);

    return (
        <List >
            {songs.map((song) => (
                <SongItem key={song.id} song={song} setFavorites={setFavorites} favorites={favorites} playlists={playlists} onAddSongToPlaylist={onAddSongToPlaylist} setCurrectSong={setCurrectSong} setIsPlaying={setIsPlaying}/>
            ))}
        </List>
    );
};

export default SongsTable;