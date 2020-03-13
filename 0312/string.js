/**
 * 字符串学习
 * 2020-0312
 */
/*
// 单引号和双引号的作用类似
let single = 'single-quoted';
let double = 'double-quoted';

// 反引号可以通过${} 将任何表达式嵌入到字符串中
let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}`);

// 使用反引号可以随意换行
let s = `
  qwe: 
  * jons
  * hhh
`;

alert(s); // 多行字符串

// 单引号/双引号换行要使用\n
let guestList = "b \n a \n t"
alert(guestList)


字符	描述
\n	换行
\r	回车：不单独使用。Windows 文本文件使用两个字符 \r\n 的组合来表示换行。
\', \"	引号
\\	反斜线
\t	制表符
\b, \f, \v	退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。
\xXX	具有给定十六进制 Unicode XX 的 Unicode 字符，例如：'\x7A' 和 'z' 相同。
\uXXXX	以 UTF-16 编码的十六进制代码 XXXX 的 unicode 字符，
例如 \u00A9 —— 是版权符号 © 的 unicode。
它必须正好是 4 个十六进制数字。
\u{X…XXXXXX}（1 到 6 个十六进制字符）	具
有给定 UTF-32 编码的 unicode 符号。
一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。
这样我们就可以插入长代码了。
*/

// alert( "\u00A9" ); // ©
// alert( "\u{20331}" ); // 佫，罕见的中国象形文字（长 unicode）
// alert( "\u{1F60D}" ); // 😍，笑脸符号（另一个长 unicode）

/*
let str = 'mm\ns';
// 字符串长度
// alert(str.length);
// 访问字符的位置
alert(str[0]); // H
alert(str.charAt(0)); // H
alert(str[str.length - 1]); // 访问最后一个

let str2 = `Hello`;

alert( str2[1000] ); // undefined
alert( str2.charAt(1000) ); // ''（空字符串）

for (let char of "Hello") {
  alert(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}
*/

// 改变大小写
// alert('sss'.toUpperCase()); // SSS
// alert('SSS'.toLowerCase()); // sss
// // 改变其中的一个字符
// alert('SSs'[2].toUpperCase()) // SSS

// 查找子字符串
// let str = 'Widget with id';

// alert(str.indexOf('Widget')); // 0
// alert(str.indexOf('widget')) // -1 没有找到, 检索是大小写敏感的

// alert(str.indexOf(id)); // 1
// alert(str.indexOf('id', 2)) // 12

// // includes
// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false

// alert( "Midget".includes("id") ); // true
// alert( "Midget".includes("id", 3) ); // false, 从位置 3 开始没有 "id"

// alert( "Widget".startsWith("Wid") ); // true，"Widget" 以 "Wid" 开始
// alert( "Widget".endsWith("get") ); // true，"Widget" 以 "get" 结束

// let str = "stringify";
// alert( str.slice(0, 5) ); // 'strin'，从 0 到 5 的子字符串（不包括 5）
// alert( str.slice(0, 1) ); // 's'，从 0 到 1，但不包括 1，所以只有在 0 处的字符

// let str = "stringify";
// alert( str.slice(2) ); // 从第二个位置直到结束

// let str = "stringify";

// 从右边的第四个位置开始，在右边的第一个位置结束
// alert( str.slice(-4, -1) ); // 'gif'

// let str = "stringify";

// // 这些对于 substring 是相同的
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"

// // ……但对 slice 是不同的：包括2但不包括6
// alert( str.slice(2, 6) ); // "ring"（一样）
// alert( str.slice(6, 2) ); // ""（空字符串
/*
let str = "stringify";
alert( str.slice(2) ); // 从第二个位置直到结束
*/
// // start/end 也可能是负值
// let str = "stringify";
// // 从右边的第四个位置开始，在右边的第一个位置结束
// alert( str.slice(-1) ); // 'y'

// substring(start [, end])
// 返回字符串在start和end之间的部分
// let str = "stringify";
// // 这些对于 substring 是相同的
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"
// // ……但对 slice 是不同的：
// alert( str.slice(2, 6) ); // "ring"（一样）
// alert( str.slice(6, 2) ); // ""（空字符串

// substr 返回指定区间的子字符
/*
let str = 'stringify';
alert(str.substr(2, 4)) // ring 2开始截取4个字符

let str = "stringify";
alert(str.substr(-4, 2)) // gi 
*/

/**
 * 分割字符串
 * slice(start, end) 从start到end结束 不包括end 允许负值 不写end表示到结束
 * substring(start, end) start和end之间(包括start和end) 负值代表0
 * substr(start, length) 从start开始截取长为length的字符串 允许start为负值 string (-3,2) in 
 */
// let str = 'string';
// alert(str.substr(-3, 2));

// 不同的字母有不同的代码
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90

// alert( String.fromCodePoint(90) ); // Z

// // 在十六进制系统中 90 为 5a
// alert( '\u005a' ); // Z

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
/*
let oldStr = 'john'; 
let newStr = /*oldStr[0].toUpperCase() //+*/ /*oldStr.slice(1);*/
/*
alert(newStr);

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") ); // John
*/

// function checkSpam() {
  // +prompt 可以将字符变为数字
  // 写法一 菜鸡
//   let str = prompt('输入string','');
//   if(`${str}.includes('ViAgRA')`) {
//     alert('true');
//   } else if(`${str}.includes('xxxxx')`) {
//     alert('true')
//   } else {
//     alert('false');
//   }
// }
// checkSpam()

// 写法二 文档的大哥
// 为了使搜索不区分大小写, 我们将字符串改为小写, 然后搜索
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase(); // 变小写
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// } 
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// 截断文本
// function truncate(str, maxlength) {
//   console.log((str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str);
// }

// function truncate(str, maxlength) {
//   console.log((str.length > maxlength) ? str.slice(0, maxlength-1) + '...' : str);
// }

// truncate("Hi everyone!", 200)

// 提取货币
// $120 => 120
// 将第一个符号去掉
// function extractCurrencyValue(str) {
//   alert(+str.slice(1))
//   // return +str.slice(1);
// }

// extractCurrencyValue('$120')


















