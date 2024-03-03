import {useRef, useState, useEffect} from 'react';

// Lưu các giá trị qua một tham chiếu bên ngoài function component


// Tạo 1 biến TRONG NỘI BỘ HÀM App() lưu trữ ID của setInterval để khi stop sẽ hủy cái ID đó 
// Nhưng điều này dẫn đến khi re-render lại thì biến này sẽ được khợi tạo lại 
// => không lưu được giá trị của setInterval

// Giải pháp 1: Đưa biến này ra khỏi hàm App để khi re-render không bị khởi tạo lại
// => nhưng điều này nên hạn chế dùng mà chỉ nên triển khai các logic xử lý trong 
// nội bộ function component (trừ khi là hằng)

// Giải pháp 2: dùng useRef

function App() {

  // Chỉ gán giá trị khởi tạo 1 lần duy nhất khi component mounted
  const timerId = useRef();

  const [count, setCount] = useState(60);

  const previousCount = useRef();

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  // gắn Dom element cho h1Ref
  const h1Ref = useRef();
  useEffect(() => {
    console.log(h1Ref.current);

    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);


  }, [h1Ref]);

  const handleStart = () => {
      timerId.current = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000)
      console.log('Start ->', timerId.current);
  };

  const handleStop = () => {
    console.log('Stop ->', timerId.current);
    clearInterval(timerId.current);
  };

  console.log(count, previousCount.current);

  return (
    <div className="App" style={{padding: 45}}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
