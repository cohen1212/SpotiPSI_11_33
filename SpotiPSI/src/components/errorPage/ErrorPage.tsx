import { Link } from "react-router-dom";
import useStyles from "./ErrorPageStyles";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorPage = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <ErrorIcon className={classes.icon} />

            <h1 className={classes.title}>Page Not Found</h1>

            <Link to="/" className={classes.button}>
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;