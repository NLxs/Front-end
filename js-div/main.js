let div1 = document.createElement('div');
div1.className = 'demo';

document.body.appendChild(div1);

var dragging = false;

var lastX
var lastY

div1.onmousedown = function(e) {
  lastX = e.clientX;
  lastY = e.clientY;
  dragging = true;
}

document.body.onmousemove = function(e) {
  if(dragging === true) {
    var deltaY =e.clientY - lastY;
    var deltaX =e.clientX - lastX;

    var top = parseInt(div1.style.top) || 0
    var left = parseInt(div1.style.left) || 0

    var resultY = top + deltaY;
    var resultX = left + deltaX;
    if(resultY < 0) {
      resultY = 0
    }
    if(resultX < 0) {
      resultX = 0
    }

    div1.style.top = resultY + 'px';
    div1.style.left = resultX + 'px';
    
    lastX = e.clientX;
    lastY = e.clientY;
  }
}

div1.onmouseup = function() {
  dragging = false
}