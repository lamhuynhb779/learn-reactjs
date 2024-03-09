import {useRef, useEffect} from 'react';
import Video from "./Video";

function App() {

  const videoRef = useRef();

  const handlePlay = () => {
    console.log(videoRef.current);
    videoRef.current.play();
  }

  const handlePause = () => {
    console.log(videoRef.current);
    videoRef.current.pause();
  }

  return (
    <div className="App" style={{padding: 59}}>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
