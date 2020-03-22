let table = document.body.firstElementChild;
console.log(table);
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}


/**
 * 总结
有 6 种主要的方法，可以在 DOM 中搜素节点：

Method	Searches by...	Can call on an element?	Live?
querySelector	CSS-selector	✔	-
querySelectorAll	CSS-selector	✔	-
getElementById	id	-	-
getElementsByName	name	-	✔
getElementsByTagName	tag or '*'	✔	✔
getElementsByClassName	class	✔	✔
目前为止，最常用的是 querySelector 和 querySelectorAll，但是 getElementBy* 可能会偶尔有用，或者可以在就脚本中找到。

此外：

elem.matches(css) 用于检查 elem 与给定的 CSS 选择器是否匹配。
elem.closest(css) 用于查找与给定 CSS 选择器相匹配的最近的祖先。elem 本身也会被检查。
让我们在这里提一下另一种用来检查子级与父级之间关系的方法，因为它有时很有用：

如果 elemB 在 elemA 内（elemA 的后代）或者 elemA==elemB，elemA.contains(elemB) 将返回 true。
 */