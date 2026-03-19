import './App.css'
import Header from './components/header/Header'
import MainSection from './components/mainSection/MainSection'
import Player from './components/player/Player'
import usePlayLogic from "./components/customHooks/usePlayLogic/usePlayLogic";


const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Player />
    </>
  )
}

export default App
