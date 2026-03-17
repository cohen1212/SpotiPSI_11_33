import { useEffect } from "react";
import useStyles from "./PageContentStyles";
import type { Song, Page } from "../../../types/types";
import AllSongsPage from "./allSongsPage/AllSongsPage";

interface Props {
    songs: Song[];
    currentPage: Page;
}

const PageContent = ({ songs, currentPage }: Props) => {
    const { classes } = useStyles();

    useEffect(() => {
        console.log("Songs received in PageContent:", songs);
    }, [songs]);

    return (
        <div className={classes.pageContentContainer}>
            {currentPage === "allSongs" && <AllSongsPage songs={songs} />}

            {currentPage === "playlists" && (
                <div style={{ color: "white" }}>
                    Playlists Page (placeholder)
                </div>
            )}

            {currentPage === "favorites" && (
                <div style={{ color: "white" }}>
                    Favorites Page (placeholder)
                </div>
            )}
        </div>
    );
};

export default PageContent;