import { useState, useEffect } from 'react';
import './index.css';
import Player from './components/Player';
import Songs from './data/songs';


function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)


  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > Songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])
  console.log(Songs)
  return (
    <div className="App">
      <Player
        songs={Songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex} />
    </div>
  );
}

export default App;
