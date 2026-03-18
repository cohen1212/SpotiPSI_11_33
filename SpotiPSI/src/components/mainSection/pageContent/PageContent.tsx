import { useEffect } from "react";
import useStyles from "./PageContentStyles";
import type { Song, Page } from "../../../types/types";
import AllSongsPage from "./allSongsPage/AllSongsPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";

interface Props {
    songs: Song[];
    favorites: string[];
    currentPage: Page;
    setFavorites: (favorites: string[]) => void;
}

const PageContent = ({ songs, favorites, currentPage, setFavorites }: Props) => {
    const { classes } = useStyles();

    useEffect(() => {
        console.log("Songs received in PageContent:", songs);
    }, [songs]);

    return (
        <div className={classes.pageContentContainer}>
            {currentPage === "allSongs" && <AllSongsPage songs={songs} setFavorites={setFavorites} favorites={favorites} />}

            {currentPage === "playlists" && (
                <div style={{ color: "white" }}>
                    Playlists Page (placeholder)
                </div>
            )}

            {currentPage === "favorites" && (
                <div style={{ color: "white" }}>
                    <FavoritesPage songs={songs} setFavorites={setFavorites} favorites={favorites} />
                </div>
            )}
        </div>
    );
};

export default PageContent;