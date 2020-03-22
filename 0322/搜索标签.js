// 1 带有 id="age-table" 的表格
// 2 表格内的所有 label 元素 (应该有三个)
// 3 表格中的第一个 td (带有'Age'字段)
// 4 带有 name="search" 的 form
// 5 表单中的第一个 input
// 6 表单中的最后一个 input

// 1 
let table = document.getElementById;

// 2
table.getelementByTagName('label');
document.querySelectorAll('#age-table lable');

// 3
table.rows[0].cells[0]
table.getelementByTagName('td')[0]
table.querySelector('td')

// 4
let form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]')

// 5
form.getelementByTagName('input')[0];
form.querySelector('input');

// 6
let inputs = form.querySelectorAll('input');
input[inputs.length-1]