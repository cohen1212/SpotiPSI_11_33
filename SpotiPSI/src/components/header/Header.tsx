import useStyles from "./HeaderStyles"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Header = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.headerContainer}>
            <span>SpotiPSI</span>
            <MusicNoteIcon />
        </div>
    )
}

export default Header
