import useStyles from "./PlaylistItemStyles";
import type { Playlist } from "../../../../../types/types";

import { ListItem, ListItemText } from "@mui/material";

interface Props {
    playlist: Playlist;
    handlePlaylistOpen: (playlist: Playlist) => void;
}

const PlaylistItem = ({ playlist, handlePlaylistOpen }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.playlistItemContainer} >
            <ListItem divider>
                <ListItemText onClick={() => handlePlaylistOpen(playlist)}
                    primary={playlist.name}
                    secondary={`${playlist.songIds.length} שירים`}
                />
            </ListItem>
        </div>
    );
};

export default PlaylistItem;