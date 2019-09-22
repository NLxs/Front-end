/*
// 创建一个<dialog> 并作为<body>元素的子元素插入页面中
  var dialog = document.createElement('dialog')
// append 追加
  document.body.append(dialog)

// 设置这个<dialog>元素的open属性为任意字符串
  dialog.open = true;
  dialog.setAttribute('open', 'open');
  dialog.show()

// 给这个<dialog>元素内部插入一个<button>元素, 点击这个<button>元素时候关闭这个<dialog> 元素
  var button = document.createElement('button')
  button.textContent = 'close'
  dialog.appendChild(button)
  button.addEventListener('click', function() {
    this.parentNode.close()
  })

// 如何让<dialog>元素显示的时候自带遮罩
  dialog.showModal();
*/
// 页面上可能有很多个<dialog>元素, 请实现最后出现的<dialog>元素的zIndex层级一定是最高的
HTMLDialogElement.prototype.showTop = function() {
  if(window.topdialog) {
    window.topdialog.style.zIndex = 'auto';
  }
  window.topdialog = this;
  this.close();
  this.style.zIndex = 99;
  if(!this.open) {
    this.showModal();
  }
}




