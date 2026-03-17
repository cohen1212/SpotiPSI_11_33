import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"

const MainSection = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar />
            <PageContent />
        </div>
    )
}

export default MainSection
