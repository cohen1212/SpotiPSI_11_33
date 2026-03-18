import useStyles from "./AllSongsPageStyles";
import type { Song } from "../../../../types/types";
import SongsTable from "../songsTable/SongsTable";

const pageTitle = "כל השירים";

interface Props {
    songs: Song[];
    setFavorites: (favorites: string[]) => void;
    favorites: string[]
}

const AllSongsPage = ({ songs, setFavorites, favorites }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.allSongsContainer}>
            <h1>{pageTitle}</h1>
            <SongsTable songs={songs} setFavorites={setFavorites} favorites={favorites} />
        </div>
    );
};

export default AllSongsPage;