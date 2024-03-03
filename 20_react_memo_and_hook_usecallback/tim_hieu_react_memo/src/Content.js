import {memo} from 'react';

function Content({onIncreate}) {

    console.log("re-render");
    

    return (
        <>
            <h1>Hello anh em</h1>
            <button onClick={onIncreate}>Click me in child component!</button>
        </>
    );
}

// check các props của component này sau mỗi lần render có bị thay đổi không
// Nếu có 1 trong các props thay đổi => re-render
// Ngược lại, không cho re-render lai
export default memo(Content); 