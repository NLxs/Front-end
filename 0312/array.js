/**
 * 数组的学习
 * 2020-0312
 */

// 添加/移除数组元素
// arr.push(...items) 从尾端添加元素, 并返回数组的新长度
// apply() 合并两个数组 数组太大不要使用这个方法合并数组
// arr.pop() 从尾端提取元素
// arr.shift() 从首端提取元素
// arr.unshift(...items) 从首端添加元素

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');

console.log(count); // 4
console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals); // 返回新数组

const numbers = [5, 6, 7, 9, 1];

const max = Math.max.apply(null, numbers);
console.log(max); // 返回最大数 9

const min = Math.min.apply(null, numbers);
console.log(min); // 返回最小数 2

var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
console.info(arr1);


















