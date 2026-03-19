import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        color: "white",
    },
    icon: {
        fontSize: "120px",
        color: "#ff4d4f",
        marginBottom: "20px",
    },
    title: {
        fontSize: "32px",
        marginBottom: "30px",
    },
    button: {
        padding: "12px 24px",
        backgroundColor: "#1db954",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
    },
}));

export default useStyles;