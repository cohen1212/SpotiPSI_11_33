import useStyles from "./MainSectionStyles"
import Sidebar from "./sidebar/Sidebar"
import PageContent from "./pageContent/PageContent"
import { useState, useEffect } from "react"
import type { Song, Page, Playlist } from "../../types/types"
import { fetchServer, postPlaylist, postSongToPlaylist } from "../../api/api"

const MainSection = () => {
    const { classes } = useStyles()
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentPage, setCurrentPage] = useState<Page>("allSongs");
    const [favorites, setFavorites] = useState<string[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [currectSong, setCurrectSong] = useState<Song | undefined>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [queue, setQueueSongs] = useState<Song[]>([]);
    const [currectTime, setCurrectTime] = useState<number>(0);
    const [duration, setDuration] = useState<number | undefined>();

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

    const addSongToPlaylist = async (songId: string, playlistId: string) => {
        await postSongToPlaylist(songId, playlistId);

        const updatedPlaylists = playlists.map((playlist) => {
            if (playlist.id !== playlistId) {
                return playlist;
            }

            if (playlist.songIds.includes(songId)) {
                return playlist;
            }

            return {
                ...playlist,
                songIds: [...playlist.songIds, songId],
            };
        });

        setPlaylists(updatedPlaylists);
    };

    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PageContent songs={songs} favorites={favorites} currentPage={currentPage} setFavorites={setFavorites} playlists={playlists} createPlaylist={createPlaylist} onAddSongToPlaylist={addSongToPlaylist} setCurrectSong={setCurrectSong} setIsPlaying={setIsPlaying} setQueueSongs={setQueueSongs} />
        </div >

    )
}

export default MainSection