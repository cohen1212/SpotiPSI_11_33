import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
     allSongsContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",

        "& h1": {
            marginRight: "20px"
        },
    },
}));

export default useStyles;