import type { Song } from "../../../../types/types";

import { List } from "@mui/material";
import SongItem from "./songItem/SongItem";


interface Props {
    songs: Song[];
}

const SongsTable = ({ songs }: Props) => {

    return (
        <List>
            {songs.map((song) => (
                <SongItem key={song.id} song={song} />
            ))}
        </List>
    );
};

export default SongsTable;