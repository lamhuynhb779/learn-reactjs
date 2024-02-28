import {useState} from 'react';


const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard'];


function App() {

  // =========== ON TAP useState
  // const [gift, setGift] = useState();

  // const handleGift = () => {
  //   const vitri = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[vitri]);
  // };

  // return (
  //   <div style={{padding: 32}}>
  //     <h1>{gift || 'Chua co phan thuong'}</h1>
  //     <button onClick={handleGift}>Lay thuong</button>
  //   </div>
  // );

  // ========== TIM HIEU Two-way binding
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleSubmit = () => {
  //   // call api
  //   console.log(name, email);
  // };

  // // console.log({name, email});

  // return (
  //   <div style={{padding: 32}}>
  //     <input value={name} onChange={(event) => setName(event.target.value)} />
  //     <input value={email} onChange={(e) => setEmail(e.target.value)}/>
  //     <button onClick={handleSubmit}>Submit</button>
  //   </div>
  // );

  // ========== TIM HIEU Two-way binding: radio button
  // const apiResponse = [
  //   {
  //     id: 1,
  //     name: "HTML",
  //   },
  //   {
  //     id: 2,
  //     name: "CSS",
  //   },
  //   {
  //     id: 3,
  //     name: "Javascript",
  //   }
  // ];

  // const [checked, setChecked] = useState();

  // console.log(checked);

  // const submitChecked = () => {
  //   console.log({id: checked});
  // };

  // return (
  //   <div style={{padding: 32}}>
  //     {
  //       apiResponse.map(course => {
  //         return <div key={course.id}>
  //           <input 
  //             type="radio" 
  //             checked={checked === course.id}
  //             onChange={() => setChecked(course.id)}
  //           />
  //             {course.name}
  //         </div>
  //       })
  //     }
  //     <button onClick={submitChecked}>Submit</button>
  //   </div>
  // );

  // ========== TIM HIEU Two-way binding: checkbox
  const apiResponse = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Javascript",
    }
  ];

  let [checkedArray, setCheckedArray] = useState([]);

  console.log(checkedArray);

  const handleCheck = (id) => {

    if (checkedArray.includes(id)) {
      // un-check
      checkedArray = checkedArray.filter(item => item !== id);
    } else {
      // check
      checkedArray = [...checkedArray, id];
    }

    setCheckedArray(checkedArray);
  };

  const submitChecked = () => {
    console.log({ids: checkedArray});
  };

  return (
    <div style={{padding: 32}}>
      {
        apiResponse.map(course => {
          return <div key={course.id}>
            <input 
              type="checkbox" 
              checked={checkedArray.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
              {course.name}
          </div>
        })
      }
      <button onClick={submitChecked}>Submit</button>
    </div>
  );

}

export default App;
