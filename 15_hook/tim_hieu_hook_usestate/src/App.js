import {useState} from 'react';

const orders = [100, 200, 500];

function App() {

  // const total = orders.reduce((total, value) => total + value);

  // Hook useState : sử dụng khi dữ liệu thay đổi => dữ liệu hiển thị trên giao diện thay đổi theo
  // 1. Component được gọi lại (re-render) sau khi setState
  // 2. Initial state chỉ dùng cho lần đầu
  // 3. setState với callback
  // 4. setState là thay thế state bằng giá trị mới

  // const [state, setState] = useState(1);

  // Dùng callback đưa vào hàm useState để tính toán 1 lần đầu duy nhất để không bị tính toán lại
  const [state, setState] = useState(() => {
    const total = orders.reduce((total, value) => total + value);
    console.log(total);
    return total;
  });

  const handleIncreate = () => {
    setState(prevState => prevState + 1);
  };


  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={handleIncreate}>Increase</button>
    </div>
  );
}

export default App;
