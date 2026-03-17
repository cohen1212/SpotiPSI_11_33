import { useEffect, useState } from "react";
import fetchSongs from "./api/api";
import type { Song } from "./types/types";
import './App.css'
import Header from './components/header/Header'
import MainSection from './components/mainSection/MainSection'
import Player from './components/player/Player'


const App = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentPage, setCurrentPage] = useState("allSongs");

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const data = await fetchSongs();
        setSongs(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadSongs();
  }, []);

  return (
    <>
      <Header />
      <MainSection songs={songs} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Player />
    </>
  )
}

export default App
