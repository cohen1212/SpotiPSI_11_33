import useStyles from "./AllSongsPageStyles";
import type { Song } from "../../../../types/types";

import SongsTable from "../songsTable/SongsTable";


interface Props {
    songs: Song[];
}

const AllSongsPage = ({ songs }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.allSongsContainer}>
            <h1>כל השירים</h1>
            <SongsTable songs={songs} />
        </div>
    );
};

export default AllSongsPage;