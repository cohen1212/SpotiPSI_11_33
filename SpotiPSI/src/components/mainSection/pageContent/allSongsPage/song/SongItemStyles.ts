import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songItemContainer: {
        direction: "ltr",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        color: "white",

        "& :hover": {
            backgroundColor: "#252424",
        },

        "& .MuiButtonBase-root": {
            color: "white",
            padding: "10px",
            borderRadius: "30px",
        },

        "& .MuiButtonBase-root:hover": {
            backgroundColor: "#121212",
        },

        "& .MuiSvgIcon-root:hover": {
            backgroundColor: "transparent",
        },

        "& .MuiListItemText-root": {
            marginLeft: "10px",
        },

        "& .MuiTypography-root": {
            display: "inline-block",
        },

        "& .MuiTypography-root:hover": {
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold"
        },

    },

    playBtn: {
        color: "#9757B2",
    },

}));

export default useStyles;