import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    mainSectionContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "85%",
        backgroundColor: "#121212",
        overflow: "auto",
    },

    pageContentContainer: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        overflow: "auto",

        '&::-webkit-scrollbar-track': {
            border: "1px solid #121212",
            borderRadius: "10px",
            backgroundColor: "white"
        },

        '&::-webkit-scrollbar': {
            width: "10px",
            backgroundColor: "#121212"
        },

        '&::-webkit-scrollbar-thumb': {
            border: "2px solid #722e8f",
            borderRadius: "10px",
            backgroundColor: "#9757B2"
        }
    },
}));

export default useStyles;