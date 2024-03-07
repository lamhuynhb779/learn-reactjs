import {useReducer, useRef} from 'react';

// init state
const initState = {
  job: '',
  jobs: []
}

// actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// reducer
const reducer = (state, action) => {

  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      case DELETE_JOB:
        const newJobs = [...state.jobs];
        newJobs.splice(action.payload, 1);

        return {
          ...state,
          jobs: newJobs
        }
    default:
      throw new Error('Invalid action');
  }
}

// dispatch


function App() {

  const [state, dispatch] = useReducer(reducer, initState);

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
