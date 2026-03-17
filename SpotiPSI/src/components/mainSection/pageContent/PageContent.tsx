import { useEffect } from "react";
import useStyles from "./PageContentStyles";
import type { Song } from "../../../types/types";

interface Props {
    songs: Song[];
}

const PageContent = ({ songs }: Props) => {
    const { classes } = useStyles();

    useEffect(() => {
        console.log("Songs received in PageContent:", songs);
    }, [songs]);

    return (
        <div className={classes.pageContentContainer}>
        </div>
    );
};

export default PageContent;