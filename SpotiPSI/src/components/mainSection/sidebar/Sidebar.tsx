import useStyles from "./SidebarStyles";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { Page } from "../../../types/types";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from "@mui/icons-material/Favorite";

const allSongsText = "כל השירים";
const playlistsText = "פלייליסטים";
const favoritesText = "מועדפים";

type Props = {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
};

const Sidebar = ({ currentPage, setCurrentPage }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.sidebarContainer}>
            <List>
                <ListItemButton
                    selected={currentPage === "allSongs"}
                    onClick={() => setCurrentPage("allSongs")}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={allSongsText} />
                </ListItemButton>

                <ListItemButton
                    selected={currentPage === "playlists"}
                    onClick={() => setCurrentPage("playlists")}
                >
                    <ListItemIcon>
                        <LibraryMusicIcon />
                    </ListItemIcon>
                    <ListItemText primary={playlistsText} />
                </ListItemButton>

                <ListItemButton
                    selected={currentPage === "favorites"}
                    onClick={() => setCurrentPage("favorites")}
                >
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary={favoritesText} />
                </ListItemButton>
            </List>
        </div>
    );
};

export default Sidebar;