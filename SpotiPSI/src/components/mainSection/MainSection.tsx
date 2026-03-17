import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"
import type { Song } from "../../types/types"

interface Props {
    songs: Song[];
}

const MainSection = ({ songs }: Props) => {
    const { classes } = useStyles()

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar />
            <PageContent songs={songs} />
        </div>
    )
}

export default MainSection
