/**
 * 数组方法相关的练习
 * 0314
 * nuolu
 */

/*
编写函数 camelize(str) 
将诸如"my-short-string"之类的由短划线分隔的单词变成骆驼式的"myShortString"
删除所有短横线, 并将短横线后的每一个单词的首字母变为大写
 */
/*
function camelize(str) {
  alert(
    str.split('-').map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('')
  )
}
camelize("background-color")
camelize("list-style-image") 
camelize("-webkit-transition")
*/

// 写一个函数 filterRange(arr, a, b),该函数获取一个数组 arr, 
// 在其中查找数值大小在 a 和 b 之间的元素, 并返回它们的数组
// 该函数不应该修改原数组它应该返回新的数组
/*
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1（匹配的值）
alert( arr ); // 5,3,8,1（未经改动的数组中的值, 不改变原数组）
*/

/*
写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检测：a ≤ arr[i] ≤ b。

该函数应该只修改数组。它不应该返回任何东西
*/
/* 
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值
alert( arr ); // [3, 1]
 */
// 如果符合要求就会改变数组, 此时应该不变
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    console.log(i);
    // 如果超出范围，则删除
    if (val < a || val > b) {
      console.log(i);
      arr.splice(i, 1);
      console.log(i);
      console.log(val);
      // i--;
    }
  }

}

let arr = [3, 9, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除 1 到 4 范围之外的值

alert( arr ); // [3, 1]