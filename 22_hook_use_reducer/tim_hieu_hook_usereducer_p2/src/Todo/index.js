import {useReducer, useRef} from 'react';
import reducer, {initState} from './reducer.js';
import { setJob, addJob, deleteJob } from './actions.js';
import logger from './logger.js';

function App() {

  const [state, dispatch] = useReducer(logger(reducer), initState);

  const {job, jobs} = state;

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));

    inputRef.current.focus();
  }

  const inputRef = useRef();

  return (
    <div className="App" style={{padding: 39}}>
      <h1>Todo</h1>
      <input ref={inputRef} value={job} placeholder="Enter..." onChange={(e) => {
        dispatch(setJob(e.target.value));
      }}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((item, index) => <li key={index}>{item} <span onClick={() => dispatch(deleteJob(index))}>&times;</span> </li>)}
      </ul>
    </div>
  );
}

export default App;
