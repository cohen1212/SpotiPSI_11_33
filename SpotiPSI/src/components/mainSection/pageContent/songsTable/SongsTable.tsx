import type { Song } from "../../../../types/types";
import { List } from "@mui/material";
import SongItem from "./songItem/SongItem";

interface Props {
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    favorites: string[]
}

const SongsTable = ({ songs, setFavorites, favorites }: Props) => {
    return (
        <List>
            {songs.map((song) => (
                <SongItem key={song.id} song={song} setFavorites={setFavorites} favorites={favorites} />
            ))}
        </List>
    );
};

export default SongsTable;