import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    player: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "10%",
        backgroundColor: "#1D1D1D",
        alignItems: "center",
        justifyContent: "center"
    },

    playerBtns: {
        "& .MuiSvgIcon-root": {
            color: "white",

        },

        "& .MuiButtonBase-root": {
            color: "white",
            padding: "10px",
            borderRadius: "30px",
            margin: "0 10px"
        },

        "& .MuiButtonBase-root:hover": {
            backgroundColor: "#121212",
        },

    },

    text:
    {
        color: "white"
    },

    slider: {
        width: "98%",

        "& .MuiSlider-rail": {
            color: "gray"
        },

        "& .MuiSlider-thumb": {
            width: "15px",
            height: "15px",
        },
    },

    timesContainer: {
        display: "flex",
        width: "98%",
        justifyContent: "space-between",
        color: "white",
        marginBottom: "10px",
    },
}));

export default useStyles;