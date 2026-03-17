import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "75%",
        backgroundColor: "#121212",
    },
}));

export default useStyles;