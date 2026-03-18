import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"
import type { Song, Page } from "../../types/types"

interface Props {
    songs: Song[];
    currentPage: Page;
    favorites: string[];
    setCurrentPage: (page: Page) => void;
    setFavorites: (favorites: string[]) => void;
}

const MainSection = ({ songs, currentPage, favorites, setCurrentPage , setFavorites }: Props) => {
    const { classes } = useStyles()
    

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PageContent songs={songs} favorites={favorites} currentPage={currentPage}  setFavorites={setFavorites}  />
        </div>
    )
}

export default MainSection
