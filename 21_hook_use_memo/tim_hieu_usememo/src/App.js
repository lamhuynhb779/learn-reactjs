import {useState, useMemo} from 'react';

function App() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [products, setProducts] = useState([]);

  const handleAdd = () => {
    setProducts([...products, {name: name, price: parseInt(price)}]);
  }

  // Nếu dùng logic ngay chỗ này thì khi re-render thì nó lại đi tính toán lại
  // trong khi ta không add product nào cả
  // => nên sử dụng useMemo
  // const total = products.reduce((result, prod) => {
  //   console.log('Tinh toan lai');

  //   return result + prod.price;
  // }, 0);


  const total = useMemo(() => {
    //start logic
    const res = products.reduce((result, prod) => {
      console.log('Tinh toan lai');
  
      return result + prod.price;
    }, 0);

    return res;
    //end logic

  }, [products])

  return (
    <div className="App" style={{padding: 39}}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name..."/><br/>
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price..."/><br/>
      <button onClick={handleAdd}>Add</button><br/>
      Total: {total}
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>{product.name} - {product.price}</li>
            )
          })}
      </ul>
    </div>
  );
}

export default App;
