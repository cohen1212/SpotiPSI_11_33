import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    playlistItemContainer: {
        direction: "rtl",
        display: "flex",
        width: "100%",
        color: "white",

        "& .MuiListItem-root:hover": {
            backgroundColor: "#252424",
        },

        "& .MuiListItemText-primary": {
            color: "white",
            display: "inline-block",
        },

        "& .MuiListItemText-secondary": {
            color: "#575050",
        },

        "& .MuiListItemText-primary:hover": {
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold",
        },
    },
}));

export default useStyles;