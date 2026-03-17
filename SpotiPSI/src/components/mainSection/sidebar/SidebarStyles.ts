import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    sidebarContainer: {
        display: "flex",
        flexDirection: "column",
        width: "10%",
        height: "100%",
        backgroundColor: "#121212",
        borderLeft: "2px solid #1A1A1A",
        color: "white",

        "& .MuiListItemIcon-root": {
            color: "white",
        },

        "& .MuiTypography-root": {
            textAlign: "start"
        },

        "& .MuiListItemButton-root:hover": {
            backgroundColor: "#252424",
        },

        "& .Mui-selected, & .Mui-selected:hover": {
            backgroundColor: "#3a1f46",
        },
    },
}));

export default useStyles;