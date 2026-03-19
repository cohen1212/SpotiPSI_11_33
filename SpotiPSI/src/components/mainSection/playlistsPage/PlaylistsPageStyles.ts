import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    playlistsContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",

        "& h1": {
            marginRight: "20px"
        },
    },

    createBtn: {
        color: "#9757B2",
        borderRadius: "30px",
        alignSelf: "center",
        marginRight: "auto",

        "& .MuiButton-startIcon": {
            marginLeft: "auto",
        },
    },

    createDialog: {
        backgroundColor: "#3a3a3a",
        color: "white",
        borderRadius: "6px",
        width: "20%",

        "& .MuiDialogTitle-root": {
            textAlign: "end",
        },

        "& .MuiDialogActions-root": {
            justifyContent: "flex-start",
            gap: "8px",
            padding: "8px 16px 12px",
        },

        "& .MuiButton-root:hover": {
            backgroundColor: "#121212",
        },

        "& .MuiInputLabel-root, & .MuiInputBase-root": {
            color: "#d0d0d0",
        },
    },
}));

export default useStyles;