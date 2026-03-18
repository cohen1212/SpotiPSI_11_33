import useStyles from "./FavoritesPageStyles";
import SongsTable from "../songsTable/SongsTable";
import type { Song } from "../../../../types/types";

const pageTitle = "המועדפים שלי";

interface Props {
    songs: Song[],
    setFavorites: (favorites: string[]) => void;
    favorites: string[]
}

const FavoritesPage = ({ songs, setFavorites, favorites }: Props) => {
    const { classes } = useStyles()
    const favoriteSongs = songs.filter(song => favorites.includes(song.id));

    return (
        <div className={classes.allSongsContainer}>
            <h1>{pageTitle}</h1>
            <SongsTable songs={favoriteSongs} setFavorites={setFavorites} favorites={favorites} />
        </div>
    )
}

export default FavoritesPage
