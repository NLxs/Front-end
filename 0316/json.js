// /*
// let user = {
//   name: 'John',
//   age: 30,
//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// console.log(user);


// let student = {
//   name: '诺鲁',
//   age: 24,
//   isAdmin: true,
//   course: ['html', 'css', 'js', 'vuejs', 'reactjs', '微信小程序'],
//   wife: null
// };
// // 对象 => json(字符串)
// let json = JSON.stringify(student)

// console.log(typeof json);
// console.log(json);
// */

// // json.parse

// // let numbers = "[0, 1, 2, 3]";
// // numbers = JSON.parse(numbers);
// // alert( numbers[1] ); // 1

// // let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// // let user = JSON.parse(userData);
// // alert( user.friends[0] ); // 1

// /*
// JSON 是一种数据格式，具有自己的独立标准和大多数编程语言的库。
// JSON 支持 object，array，string，number，boolean 和 null。
// JavaScript 提供序列化（serialize）成 JSON 的方法 JSON.stringify 和解析 JSON 的方法 JSON.parse。
// 这两种方法都支持用于智能读/写的转换函数。
// 如果一个对象具有 toJSON，那么它会被 JSON.stringify 调用
//  */

// // user => json

// let player = {
//   name: 'niko',
//   age: 24
// };

// let p = JSON.stringify(player)
// console.log(p);