import {useState} from 'react';
import Content from './Content';
import React from 'react';

// hook useEffect được sử dụng để:
// 1. Update DOM
// 2. Call API
// 3. Listen DOM Events: scroll, resize
// 4. Cleanup: Remove listener/ unsubscribe, clear timer

function App() {

  const [show, setShow] = useState(false);

  return (
    <React.StrictMode>
    <div className="App" style={{padding: 36}}>
      {show && <Content/>}
      <button onClick={()=>{setShow(!show);}}>Toggle</button>
    </div>
    </React.StrictMode>

  );
}

export default App;
