import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"
import type { Song, Page } from "../../types/types"

interface Props {
    songs: Song[];
    currentPage: string;
    setCurrentPage: (page: Page) => void;
}

const MainSection = ({ songs, currentPage, setCurrentPage }: Props) => {
    const { classes } = useStyles()

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PageContent songs={songs} />
        </div>
    )
}

export default MainSection
