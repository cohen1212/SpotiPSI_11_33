import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebarContainer: {
        display: "flex",
        flexDirection: "column",
        width: "10%",
        height: "100%",
        backgroundColor: "#121212",
        borderLeft: "2px solid #1A1A1A",
    },
}));

export default useStyles;