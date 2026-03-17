import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    player: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "10%",
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center"
    },
    text:
    {
        color: "white"
    },
}));

export default useStyles;