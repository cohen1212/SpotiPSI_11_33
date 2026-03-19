import type { Song, Playlist } from "../../../types/types";
import { List } from "@mui/material";
import SongItem from "./songItem/SongItem";

interface Props {
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    favorites: string[]
    playlists: Playlist[];
    onAddSongToPlaylist: (songId: string, playlistId: string) => Promise<void>;
    createAudio: (song: Song) => void;
    playAudio: (song: Song) => void;
}

const SongsTable = ({ songs, setFavorites, favorites, playlists, onAddSongToPlaylist, createAudio, playAudio }: Props) => {
    return (
        <List>
            {songs.map((song) => (
                <SongItem
                    key={song.id}
                    song={song}
                    setFavorites={setFavorites}
                    favorites={favorites}
                    playlists={playlists}
                    onAddSongToPlaylist={onAddSongToPlaylist}
                    createAudio={createAudio}
                    playAudio={playAudio}
                />
            ))}
        </List>
    );
};

export default SongsTable;