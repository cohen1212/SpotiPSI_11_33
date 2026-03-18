import useStyles from "./SongItemStyles";
import type { Song } from "../../../../../types/types";

import { ListItem, ListItemText, IconButton } from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";

interface Props {
    song: Song;
}

const SongItem = ({ song }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songItemContainer}>
            <ListItem divider>

                <IconButton >
                    <PlayArrowIcon className={classes.playBtn} />
                </IconButton>

                <ListItemText
                    primary={song.name + " - " + song.artist}
                />

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton >
                    <FavoriteBorderIcon />
                </IconButton>

            </ListItem>
        </div>
    );
};

export default SongItem;