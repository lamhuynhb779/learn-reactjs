import {useEffect, useState} from 'react';

// Side effect: Có 3 trường hợp sử dụng khác nhau

// CASE 1. useEffect(callback) - HÀNH VI RIÊNG: 
//     - gọi callback mỗi khi component re-render
//     - callback sẽ được gọi sau khi component thêm element vào DOM
// CASE 2. useEffect(callback, []) - HÀNH VI RIÊNG:
//     - chỉ gọi callback 1 lần sau khi component mounted
// CASE 3. useEffect(callback, [dependencies,...]) - HÀNH VI RIÊNG:
//     - callback sẽ được gọi lại mỗi khi dependency thay đổi giá trị (kiểm tra dependency trước và sau khi render)

// HÀNH VI CHUNG: 
// 1. callback luôn được gọi sau khi component mounted
// 2. cleanup function luôn được gọi trước khi component unmounted
// 3. cleanup function luôn được gọi trước khi callback được gọi trừ lần mounted

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

    // ================== Listen Dom events
    // Scroll
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {

        const handleScroll = () => {
            // console.log(window.scrollY);
            setShowGoToTop(window.scrollY >= 200);
            // console.log("set state");
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            console.log('Unmounting ...');
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    // console.log("re-render");


    // Resize
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    return (
        <div>
            <h1>{width}</h1>
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
            {showGoToTop && (<button style={{position: "fixed", right: 20, bottom: 20}}>Go To Top</button>)}
        </div>
    );
}

export default Content;