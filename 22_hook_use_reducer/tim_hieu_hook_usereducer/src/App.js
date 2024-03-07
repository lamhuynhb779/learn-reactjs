import {useState, useReducer} from 'react';

// Hook useReducer giống useState nhưng được sử dụng để giải quyết các vấn đề state phức tạp 
// Ví dụ state là nested object, mảng đa chiều
// hoặc là component có chứa rất nhiều state và các state thay đổi phụ thuộc các state khác 

const initState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (state, action) => {

  console.log("reducer running ...");

  switch(action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
}

function App() {

  // Các cách tư duy và triển khai theo 2 hướng
  // Theo useState
  // 1. Init state: 0
  // 2. Actions: Up (state + 1) / Down (state - 1)

  // const [count, setCount] = useState(0);

  // Theo useReducer
  // 1. Init state: 0
  // 2. Actions: Up (state + 1) / Down (state - 1)
  // 3. Reducer
  // 4. Dispatch

  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App" style={{padding: 39}}>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count -1)}>Down</button> */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}

export default App;
