import "./App.css";
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import Player from "./components/player/Player";
import useAppHandler from "./hooks/useAppHandler";
import usePlayLogic from "./hooks/usePlayLogic";

const App = () => {
  const { songs, favorites, playlists, setFavorites, createPlaylist, addSongToPlaylist } = useAppHandler();
  const { currentSong, isPlaying, currentTime, duration, playAudio, playNext, playPrevious, togglePlayPause } = usePlayLogic(songs);
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
        playAudio={playAudio}
      />

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        playNext={playNext}
        playPrevious={playPrevious}
        togglePlayPause={togglePlayPause}
      />
    </>
  );
};

export default App;