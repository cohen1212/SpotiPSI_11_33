import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"
import { useState, useEffect } from "react"
import type { Song, Page, Playlist } from "../../types/types"
import { fetchServer, postPlaylist } from "../../api/api"

const MainSection = () => {
    const { classes } = useStyles()

    const [songs, setSongs] = useState<Song[]>([]);
    const [currentPage, setCurrentPage] = useState<Page>("allSongs");
    const [favorites, setFavorites] = useState<string[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        const loadSongs = async () => {
            try {
                const data = await fetchServer("/songs");
                setSongs(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadSongs();
    }, []);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const data = await fetchServer("/favorites");
                setFavorites(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadFavorites();
    }, []);

    useEffect(() => {
        const loadPlaylists = async () => {
            try {
                const data = await fetchServer("/playlists");
                setPlaylists(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadPlaylists();
    }, []);

    const createPlaylist = async (name: string) => {
        try {
            const newPlaylist = await postPlaylist(name);
            setPlaylists(prev => [...prev, newPlaylist]);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PageContent songs={songs} favorites={favorites} currentPage={currentPage} setFavorites={setFavorites} playlists={playlists} createPlaylist={createPlaylist} />
        </div >
    )
}

export default MainSection