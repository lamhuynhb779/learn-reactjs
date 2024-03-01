import {useEffect, useState} from 'react';

// Side effect: Có 3 trường hợp sử dụng khác nhau

// CASE 1. useEffect(callback) : hành vi riêng 
//     - gọi callback mỗi khi component re-render
//     - callback sẽ được gọi sau khi component thêm element vào DOM
// CASE 2. useEffect(callback, [])
//     - chỉ gọi callback 1 lần sau khi component mounted
// CASE 3. useEffect(callback, [dependencies,...])
//     - callback sẽ được gọi lại mỗi khi dependency thay đổi giá trị (kiểm tra dependency trước và sau khi render)

// hành vi chung: callback luôn được gọi sau khi component mounted

// => Mục đích chính của việc sử dụng useEffect là để đưa các xử lý logic phức tạp ra sau để ưu tiên việc re-render

function Content() {
    // DEMO CASE 1
    // useEffect(() => {
    //     console.log('Mounted !!!');
    //     document.title = title;
    // });

    const [title, setTitle] = useState('');


    // DEMO CASE 2
    const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(posts => {
    //         setPosts(posts);
    //     });
    // }, []);

    // DEMO CASE 3
    const tabs = ['posts', 'comments', 'albums'];
    const [type, setType] = useState('posts');

    console.log(type);
    useEffect(() => {
        // console.log('type changed');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
    }, [type]);

    return (
        <div>
            <h1>Hello world!!!</h1>
            <input
                value={title}
                onChange={e => {setTitle(e.target.value);}}
            />
            
            {/* {console.log("render")} */}
            <ul>
                {posts.map(post => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
            {tabs.map(tab => {
                return (
                    <button 
                        key={tab} 
                        style={type === tab ? {
                            color: "#fff",
                            backgroundColor: "#333"
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                )
            })}
        </div>
    );
}

export default Content;