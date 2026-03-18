import { useEffect, useState } from "react";
import { fetchServer, postPlaylist } from "./api/api";
import type { Song, Page, Playlist } from "./types/types";
import './App.css'
import Header from './components/header/Header'
import MainSection from './components/mainSection/MainSection'
import Player from './components/player/Player'


const App = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentPage, setCurrentPage] = useState<Page>("allSongs");
  const [favoritesSongs, setFavorites] = useState<string[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const data = await fetchServer({ url: "http://localhost:5001/api/songs" });
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
        const data = await fetchServer({ url: "http://localhost:5001/api/favorites" });
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
        const data = await fetchServer({ url: "http://localhost:5001/api/playlists" });
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
    <>
      <Header />
      <MainSection songs={songs} currentPage={currentPage} setCurrentPage={setCurrentPage} favorites ={favoritesSongs} setFavorites={setFavorites} playlists={playlists} createPlaylist={createPlaylist} />
      <Player />
    </>
  )
}

export default App
