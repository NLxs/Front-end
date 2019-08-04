const obj1 = {
  userid: 123,
  username: '诺鲁',
  tel: '18200001111'
}

// 把obj1 转换为字符串
var s = Object.entries(object1).map(([k,v])=>k+'='+encodeURIComponent(v)).join('&');
console.log(s)