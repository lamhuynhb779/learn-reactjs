import Content from "./Content";
import {useState, createContext} from 'react';
import './App.css';

// useContext

// CompA => CompB => CompC

// CompC là con CompB
// CompB là con CompA

// Muốn truyền dữ liệu từ A sang C 
// Cách 1: truyền qua props và qua trung gian B
// Cách 2: sử dụng useContext truyền trực tiếp A sang C

// Cách triển khai useContext
// 1. Create context
export const ThemeContext = createContext();

// 2. Provider
// 3. Consumer

function App() {

  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{padding: 39}}>
        <button onClick={handleToggle}>Toggle theme</button>
        <Content/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
