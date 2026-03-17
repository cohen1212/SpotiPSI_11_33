import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    pageContentContainer: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        backgroundColor: "#121212",
    },
}));

export default useStyles;