import "./App.css";
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import Player from "./components/player/Player";
import useAppHandler from "./hooks/useAppHandler";

const App = () => {
  const { songs, favorites, playlists, setFavorites, createPlaylist, addSongToPlaylist } = useAppHandler();
  return (
    <>
      <Header />

      <MainSection
        songs={songs}
        favorites={favorites}
        setFavorites={setFavorites}
        playlists={playlists}
        createPlaylist={createPlaylist}
        addSongToPlaylist={addSongToPlaylist}
      />

      <Player />
    </>
  );
};

export default App;