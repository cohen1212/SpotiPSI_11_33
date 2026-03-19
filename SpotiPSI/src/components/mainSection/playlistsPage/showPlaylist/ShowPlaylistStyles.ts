import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    showPlaylistContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",

        "& h1": {
            marginRight: "20px"
        },
    },

    returnBtn: {
        color: "white",
        borderRadius: "30px",
        alignSelf: "center",
        marginRight: "auto",
        padding: "10px",

        ":hover": {
            backgroundColor: "#252424",
        },
    },
}));

export default useStyles;