import {useState} from 'react';

function App() {

  const [todo, setTodo] = useState('');

  // console.log(todo);

  let [jobs, setJobs] = useState(() => {
    let oldJobs = localStorage.getItem('jobs-key');
    if (oldJobs) {
      oldJobs = JSON.parse(oldJobs);
    }
    return oldJobs ?? [];
  });

  const handleAdd = () => {
    // jobs = [...jobs, todo];

    setJobs(prev => {
      const newJobs = [...prev, todo];

      // lưu local storage để refresh trang không bị mất
      const jobsJson = JSON.stringify(newJobs);

      localStorage.setItem('jobs-key', jobsJson);

      return newJobs;
    });
    setTodo('');

    console.log(jobs);
  };

  return (
    <div className="App" style={{padding: 32}}>
      <input value={todo} type='text' onChange={(e) => {setTodo(e.target.value)}}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
