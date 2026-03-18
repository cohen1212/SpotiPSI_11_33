import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songsTableContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
    },
}));

export default useStyles;