import React from 'react' // nap thu vien react
import ReactDOM from 'react-dom/client' // nap thu vien react-dom

// Tao component App
function App() {
    return (
        <div>
            <h1>Hello guys!</h1>
            <h2>...</h2>
            <h3>End</h3>
        </div>
    )
}

// Render component App vao #root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);