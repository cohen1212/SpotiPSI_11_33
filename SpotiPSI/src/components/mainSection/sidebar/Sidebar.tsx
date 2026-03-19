import useStyles from "./SidebarStyles";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";

const allSongsText = "כל השירים";
const playlistsText = "פלייליסטים";
const favoritesText = "מועדפים";

const Sidebar = () => {
    const { classes } = useStyles();
    const location = useLocation();

    return (
        <div className={classes.sidebarContainer}>
            <List>
                <ListItemButton
                    component={Link}
                    to="/"
                    selected={location.pathname === "/"}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={allSongsText} />
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    to="/playlists"
                    selected={location.pathname.startsWith("/playlists")}
                >
                    <ListItemIcon>
                        <LibraryMusicIcon />
                    </ListItemIcon>
                    <ListItemText primary={playlistsText} />
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    to="/favorites"
                    selected={location.pathname === "/favorites"}
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