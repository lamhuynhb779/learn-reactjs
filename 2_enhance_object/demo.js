// Cách bình thường để tạo object
var name = 'Javascript';
var price = 1000;
var course = {
    name: name,
    price: price,
    getName: function() {
        return this.name;
    }
};
console.log(course, course.getName());

// Cách viết ngắn hơn với enhance object
// Nếu tên key và tên value giống nhau thì
var course1 = {
    name,
    price,
    getName() {
        return this.name;
    }
};
console.log(course1, course1.getName());

// Sử dụng giá trị làm key của object
var fieldName = 'name';
var fieldPrice = 'price';
var course2 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 10000,
};
console.log(course2);