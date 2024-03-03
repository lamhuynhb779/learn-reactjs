import {useLayoutEffect, useEffect, useState} from 'react';

// KHÁ GIỐNG VỚI useEffect
// useEffect
// 1. Cập nhật state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Reder lại UI

function App() {

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count > 3)
  //     setCount(0);
  // }, [count]);

  useLayoutEffect(() => {
    if (count > 3)
      setCount(0);
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div className="App" style={{padding: 39}}>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default App;
