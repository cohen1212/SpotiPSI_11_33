import useStyles from "./AllSongsPageStyles";
import type { Song } from "../../../../types/types";

import { List } from "@mui/material";
import SongItem from "./song/SongItem";


interface Props {
    songs: Song[];
}

const AllSongsPage = ({ songs }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.allSongsContainer}>
            <h1>כל השירים</h1>
            <List>
                {songs.map((song) => (
                    <SongItem key={song.id} song={song} />
                ))}
            </List>
        </div>
    );
};

export default AllSongsPage;