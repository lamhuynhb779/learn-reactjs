import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <div className="App" style={{padding: 59}}>
        <Heading/>
        <Paragraph/>
      </div>
      <div className='d-flex'>
        <div>Item 1</div>
        <div>Item 2</div>
      </div>
    </GlobalStyles>
  );
}

export default App;
