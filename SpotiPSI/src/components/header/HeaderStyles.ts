import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    headerContainer: {
        display: "flex",
        width: "100%",
        height: "5%",
        backgroundColor: "#313131",
        alignItems: "center",
        color: "#7E4F9D",

        "& span": {
            marginRight: "20px",
            fontSize: "20px",
        },
    },
}));

export default useStyles;