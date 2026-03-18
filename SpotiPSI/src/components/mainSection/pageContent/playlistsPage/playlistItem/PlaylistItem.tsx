import useStyles from "./PlaylistItemStyles";
import type { Playlist } from "../../../../../types/types";
import { ListItem, ListItemText } from "@mui/material";

const songsText = "שירים";

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
                    secondary={`${playlist.songIds.length} ${songsText}`}
                />
            </ListItem>
        </div>
    );
};

export default PlaylistItem;