import Content from "./Content";
import {useState} from "react";

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App" style={{padding: 32}}>
      {show && <Content/>}
      <button onClick={()=>{setShow(!show);}}>Toggle</button>
    </div>
  );
}

export default App;
