import {useEffect, useState} from 'react';



// 1. useEffect(callback) : hành vi riêng 
//     - gọi callback mỗi khi component re-render
//     - callback sẽ được gọi sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// 3. useEffect(callback, [dependencies,...])

// hành vi chung: callback luôn được gọi sau khi component mounted

function Content() {
    let x = 1;
    console.log("start")
    useEffect(() => {
        console.log('Mounted !!!' + x);
        x = x + 1;
    });

    const [title, setTitle] = useState('');

    return (
        <div>
            <h1>Hello world!!!</h1>
            <input
                value={title}
                onChange={e => {setTitle(e.target.value);}}
            />
            {console.log("render")}
            {x++}
        </div>
    );
}

export default Content;