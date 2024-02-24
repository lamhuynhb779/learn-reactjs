// Toán tử giải
var array1 = [1,2,3];
var array2 = [4,5,6];


// ============ Dùng toán tử spread 

// để nối 3 mảng lại với nhau
var array3 = [...array2, ...array1];
console.log(array3);

var obj1 = {
    name: 'aaa',
}
var obj2 = {
    price: 500,
};
var obj3 = {
    ...obj1,
    ...obj2,
};
console.log(obj3);

var defaultConfig = {
    api: "https://abc.test",
    version: "v1",
    //
    //
};
var exerciseConfig = {
    ...defaultConfig,
    api: "https://xyz.test",
    version: "v2",
};
console.log(defaultConfig, exerciseConfig);
