// Các bình thường
var arr = [1 , 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a,b,c);

// =============== Destructuring
var [a, , c] = arr;
console.log(a,c);

var course = {
    name: "Java",
    price: 10000,
    children: {
        name: "Vuxt"
    }
};

// phải lấy ra trùng tên với thuộc tính của obj
// nếu không sẽ undefined
var {name, price} = course;
console.log(name, price);

// Lấy object bên trong object và đặt tên lại
var {name: parentName, children: {name: childrenName}} = course;
console.log(parentName, childrenName);

// Lấy thuộc tính không tồn tại trong object
var {name, description = 'default description'} = course;
console.log(name, description);


// ================== Rest params
var [x, ...conLai] = arr;
console.log(x, conLai);

var {name, ...objConLai} = course;
console.log(objConLai);

function logger(...params) {
    console.log(params);
}

logger(1,2,3,4,5,6);

function test(a, b, ...params) {
    console.log(a, b, params);
}

test(1,2,3,4,5,6);

function phanGiaiObject({name, price}) {
    console.log(name, price);
}

var course = {
    name: "Javascript",
    price: 5000,
};
phanGiaiObject(course);
