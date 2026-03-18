import useStyles from "./PlaylistsPageStyles";
import type { Playlist, Song } from "../../../../types/types";
import { List, ListItem, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState, useMemo } from "react";
import type { FormEvent } from "react";
import PlaylistItem from "./playlistItem/PlaylistItem";
import AddIcon from "@mui/icons-material/Add";
import ShowPlaylist from "./showPlaylist/ShowPlaylist";

const pageTitle = "הפלייליסטים שלי";
const createBtnText = "צור פלייליסט";
const dialogTitle = "יצירת פלייליסט חדש";
const dialogCreateBtnText = "צור";
const dialogCancelBtnText = "ביטול";
const textFieldLabel = "שם הפלייליסט";
const duplicateErrorText = "שם הפלייליסט כבר קיים";

interface Props {
    songs: Song[];
    playlists: Playlist[];
    createPlaylist: (name: string) => Promise<void>;
}

const PlaylistsPage = ({ songs, playlists, createPlaylist }: Props) => {
    const { classes } = useStyles();
    const [open, setOpen] = useState(false);
    const [dupError, setDupError] = useState("");
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);

    const handlePlaylistOpen = (playlist: Playlist) => {
        setSelectedPlaylist(playlist);
    };

    const handlePlaylistClose = () => {
        setSelectedPlaylist(null);
    };

    const selectedPlaylistSongs = useMemo(() => {
        if (!selectedPlaylist) {
            return [];
        }

        return songs.filter((song) => selectedPlaylist.songIds.includes(song.id));
    }, [selectedPlaylist, songs]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name")).trim();

        const isDuplicate = playlists.some(
            (playlist) =>
                playlist.name.trim().toLowerCase() === name.toLowerCase()
        );

        if (isDuplicate) {
            setDupError(duplicateErrorText);
            return;
        }
        createPlaylist(name);
        setDupError("");
        console.log(name);
        handleClose();

    };

    if (selectedPlaylist) {
        return (
            <ShowPlaylist playlistName={selectedPlaylist.name} songs={selectedPlaylistSongs} handlePlaylistClose={handlePlaylistClose} />
        )
    }

    return (
        <div className={classes.playlistsContainer}>
            <List>
                <ListItem>
                    <h1>{pageTitle}</h1>
                    <Button variant="outlined" size="large" startIcon={<AddIcon />} className={classes.createBtn} onClick={handleClickOpen}>
                        {createBtnText}
                    </Button>
                </ListItem>

                {playlists.map((playlist) => (
                    <PlaylistItem
                        key={playlist.id}
                        playlist={playlist}
                        handlePlaylistOpen={handlePlaylistOpen}
                    />
                ))}
            </List>

            <Dialog open={open} onClose={handleClose} slotProps={{ paper: { className: classes.createDialog } }}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} id="create-form">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="playlist-name"
                            name="name"
                            label={textFieldLabel}
                            type="text"
                            fullWidth
                            variant="standard"
                            error={!!dupError}
                            helperText={dupError}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" form="create-form">
                        {dialogCreateBtnText}
                    </Button>
                    <Button color="secondary" onClick={handleClose}>{dialogCancelBtnText}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PlaylistsPage;