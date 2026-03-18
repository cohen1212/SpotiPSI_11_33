import useStyles from "./FavoritesPageStyles";
import SongsTable from "../songsTable/SongsTable";
import type { Song } from "../../../../types/types";

interface Props {
    songs: Song[],
    favorites: string[]
}


const FavoritesPage = ({ songs, favorites }: Props) => {
    const { classes } = useStyles()
    const favoriteSongs = songs.filter(song => favorites.includes(song.id));

    return (
        
            <div className={classes.allSongsContainer}>
                <h1></h1>
                <SongsTable songs={favoriteSongs} />
            </div>
    )
}

export default FavoritesPage
