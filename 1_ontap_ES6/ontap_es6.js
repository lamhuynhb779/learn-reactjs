// Function
// function logger(log) {
//     console.log(log);
// }

// logger('Function ...');

// Expression function
// const logger = function(log) {
//     console.log(log);
// }

// logger('Expression function ...');

// Arrow function
const logger = (log) => {
    console.log(log);
}

logger('Arrow function ...');

const sum = (a, b) => a  + b;

console.log(sum(2, 2));

const createCat = (cat_color, cat_sex) => ({color: cat_color, sex: cat_sex});

console.log(createCat('yellow', 'male'));

const print = log => console.log(log);

print('Hello you');

