import { useStore, actions } from './store';

function App() {

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;

  const handleSubmit = () => {
    dispatch(actions.addTodoInput(todoInput))
  };

  return (
    <div className="App" style={{padding: 39}}>
      <input 
        value={todoInput}
        placeholder='Enter todo ...'
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
