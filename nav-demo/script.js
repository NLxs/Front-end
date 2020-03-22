var keys = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m']
]

var hash = {
  'q': '',
  'w': '',
  'e': '',
  'r': '',
  't': 't.bilibili.com',
  'y': 'youtube.com',
  'u': '',
  'i': '',
  'o': '',
  'p': undefined,
  'a': 'acfun.com',
  's': 'sohu.com',
  'z': 'zhihu.com',
  'b': 'bilibili.com',
  'm': undefined,
  'n': 'nfmovies.com',
  'h': 'halihali.li'
}

var hashInLocalStorage = getFromLocalStorage('zzz')

if(hashInLocalStorage){
  hash = hashInLocalStorage
}

for(var index = 0;index < keys.length;index++){
  var divXXX = document.createElement('div')
  mainXXX.appendChild(divXXX)
  var row = keys[index]
  for(var index2 = 0;index2 < row.length;index2++){
      var kbdXXX = document.createElement('kbd')
      kbdXXX.textContent = row[index2]
      kbdXXX.className = 'key'
      var buttonX = document.createElement('button')
      buttonX.textContent = 'edit'
      buttonX.id = row[index2]
      var imgXXX = document.createElement('img')
      imgXXX.src = 'https://' + hash[row[index2]] + '/favicon.ico'
      buttonX.onclick = function(qwer){
          var button2 = qwer['target']
          var img2 = button2.previousSibling
          var key = qwer.target.id
          var x = prompt('输入一个网址')
          hash[key] = x
          img2.src = 'https://' + x + '/favicon.ico'
          localStorage.setItem('zzz', JSON.stringify(hash))
          console.log(hash)
      }
      kbdXXX.appendChild(imgXXX)
      kbdXXX.appendChild(buttonX)
      divXXX.appendChild(kbdXXX)
  }
}

document.onkeypress = function(skrskrskr){
  var key = skrskrskr['key']
  var website = hash[key]
  window.open('https://' + website, '_blank')
}

function getFromLocalStorage(name){
  return JSON.parse(localStorage.getItem(name) || 'null')
}