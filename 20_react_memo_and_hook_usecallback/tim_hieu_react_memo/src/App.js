import {useState, useCallback} from 'react';
import Content from './Content';

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback(): giúp cho việc hạn chế tạo ra các hàm mới không cần thiết trong function component
//     - Reference types
//     - React memo()

// Tình huống cần sử dụng useCallback:
// Khi tạo 1 hàm ở component cha nhưng lại truyền vào component con để xử lý
// Mặc dù hàm không thay đổi gì nhưng khi re-render lại component cha thì hàm đó đã đươc cấp phát 1 vùng nhớ khác
// Nên khi dùng memo thì nó thấy props thay đổi (do so sánh ===) nên nó cho re-render lại 

// Trong React có 3 khái niệm:
// 1. Hooks
// 2. HOC
// 3. Render props

function App() {

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count+1);
  };

  // Mô tả cách thức hoạt đông của useCallback:
  // Khi App mounted, sẽ chạy qua hàm này và useCallback sẽ nhận được callback của nó.
  // Nó sẽ đi tạo ra hàm này, nhận lại cái tham chiếu và nó lưu ra ngoài phạm vi App()
  // Sau đó nó sẽ return lại cái tham chiếu đó cho biến handleIncreaseInChild
  // Sau mỗi lần App() re-render lại, Khi deps rỗng hoặc không thay đổi thì 
  // nó sẽ cầm cái tham chiếu nó đã lưu trước đó trả lại cho handleIncreaseInChild
  // Ngược lại, nếu deps thay đổi thì nó mới tạo lại hàm mới và return tham chiếu mới
  const handleIncreaseInChild = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="App" style={{padding: 39}}>
      <Content onIncreate={handleIncreaseInChild}/>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </div>
  );
}

export default App;
