import Button from './components/Button'


function App() {
  return (
    <div className="App" style={{padding: 39}}>
      <Button/>
      <Button primary/>
      <Button primary disabled/>
    </div>
  );
}

export default App;
