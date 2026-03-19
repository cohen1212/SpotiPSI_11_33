import useStyles from "./PlaylistsPageStyles";
import type { Playlist } from "../../../types/types";
import {
    List,
    ListItem,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { useState } from "react";
import type { FormEvent } from "react";
import PlaylistItem from "./playlistItem/PlaylistItem";
import AddIcon from "@mui/icons-material/Add";

const pageTitle = "הפלייליסטים שלי";
const createBtnText = "צור פלייליסט";
const dialogTitle = "יצירת פלייליסט חדש";
const dialogCreateBtnText = "צור";
const dialogCancelBtnText = "ביטול";
const textFieldLabel = "שם הפלייליסט";
const duplicateErrorText = "שם הפלייליסט כבר קיים";

interface Props {
    playlists: Playlist[];
    createPlaylist: (name: string) => Promise<void>;
}

const PlaylistsPage = ({ playlists, createPlaylist }: Props) => {
    const { classes } = useStyles();
    const [open, setOpen] = useState(false);
    const [dupError, setDupError] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDupError("");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name")).trim();

        const isDuplicate = playlists.some(
            (playlist) => playlist.name.trim().toLowerCase() === name.toLowerCase()
        );

        if (isDuplicate) {
            setDupError(duplicateErrorText);
            return;
        }

        if (!name) {
            return;
        }

        try {
            await createPlaylist(name);
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={classes.playlistsContainer}>
            <List>
                <ListItem>
                    <h1>{pageTitle}</h1>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<AddIcon />}
                        className={classes.createBtn}
                        onClick={handleClickOpen}
                    >
                        {createBtnText}
                    </Button>
                </ListItem>

                {playlists.map((playlist) => (
                    <PlaylistItem
                        key={playlist.id}
                        playlist={playlist}
                    />
                ))}
            </List>

            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{ paper: { className: classes.createDialog } }}
            >
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
                    <Button color="secondary" onClick={handleClose}>
                        {dialogCancelBtnText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PlaylistsPage;