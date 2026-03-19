import "./App.css";
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import Player from "./components/player/Player";
import useAppHandler from "./hooks/useAppHandler";
import usePlayLogic from "./hooks/usePlayLogic";

const App = () => {
  const { songs, favorites, playlists, setFavorites, createPlaylist, addSongToPlaylist } = useAppHandler();
  const { currentSong, isPlaying, currentTime, duration, playAudio, playNext, playPrevious, togglePlayPause ,createAudio} = usePlayLogic(songs);
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
        createAudio={createAudio}
        playAudio={playAudio}
      />

      <Player playNext={playNext} playPrevious={playPrevious} togglePlayPause={togglePlayPause} isPlaying={isPlaying}/>
    </>
  );
};

export default App;