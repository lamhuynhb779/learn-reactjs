const h1 = document.querySelector('#heading');
console.log(h1);

const newH1 = document.createElement('h1');
newH1.innerText = 'Hello world';
newH1.id = "new-id";
newH1.className = "new-class";
newH1.style = 'color: red';
Object.assign(newH1.style, {
    color: "blue",
    backgroundColor: "yellow",
});
console.log(newH1);

// document.body.appendChild(newH1);

const root = document.querySelector('#root');

root.appendChild(newH1);

