import {useState} from 'react';
import Content from './Content';
import React from 'react';
import Demo from './Demo';
import Avatar from './Avatar';

// hook useEffect được sử dụng để:
// 1. Update DOM
// 2. Call API
// 3. Listen DOM Events: scroll, resize, ...
// 4. Cleanup: Remove listener/ unsubscribe, clear timer

function App() {

  const [show, setShow] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const [showAvatar, setShowAvatar] = useState(false);

  return (
    <div className="App" style={{padding: 36}}>
      {show && <Content/>}
      <button onClick={()=>{setShow(!show);}}>Toggle</button>
      <button onClick={()=>{setShowDemo(!showDemo);}}>Show demo</button>
      <button onClick={()=>{setShowAvatar(!showAvatar);}}>Show Avatar</button>
      {showDemo && <Demo/>}
      {showAvatar && <Avatar/>}
    </div>

  );
}

export default App;
