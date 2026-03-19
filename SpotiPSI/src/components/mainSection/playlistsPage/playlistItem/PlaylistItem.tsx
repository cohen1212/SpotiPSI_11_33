import useStyles from "./PlaylistItemStyles";
import type { Playlist } from "../../../../types/types";
import { ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const songsText = "שירים";

interface Props {
    playlist: Playlist;
}

const PlaylistItem = ({ playlist }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.playlistItemContainer}>
            <ListItem
                divider
                component={Link}
                to={`/playlists/${playlist.id}`}
            >
                <ListItemText
                    primary={playlist.name}
                    secondary={`${playlist.songIds.length} ${songsText}`}
                />
            </ListItem>
        </div>
    );
};

export default PlaylistItem;