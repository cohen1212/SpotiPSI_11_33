import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"
import type { Song, Page, Playlist } from "../../types/types"

interface Props {
    songs: Song[];
    currentPage: Page;
    favorites: string[];
    setCurrentPage: (page: Page) => void;
    setFavorites: (favorites: string[]) => void;
    playlists: Playlist[];
    createPlaylist: (name: string) => Promise<void>;
}

const MainSection = ({ songs, currentPage, favorites, setCurrentPage, setFavorites, playlists, createPlaylist }: Props) => {
    const { classes } = useStyles()


    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PageContent songs={songs} favorites={favorites} currentPage={currentPage} setFavorites={setFavorites} playlists={playlists} createPlaylist={createPlaylist} />
        </div >
    )
}

export default MainSection
