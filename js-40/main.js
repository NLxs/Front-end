//字符'abc-def-ghj' => 'abcDefGhj'
function toCamelCase(str) {
  return str.replace(/\-([a-z])/g,function($1, $2) {
    return $2.toUpperCase();
  })
}

alert(toCamelCase('abc-def-ghj'));

//字符'abcDefGhj' => 'abc-def-ghj'
function toDashJoin(str) {
  return str.replace(/[A-Z]/g, function($1) {
    return '-' + $1.toLowerCase();
  })
}

//alert(toDashJoin('abcDefGhj'));

// 字符'i like js' => 'I Like Js'
function toCapitalize(str){
  return str.replace(/\b[a-z]+\b/gi,function($1){
      return $1.replace($1[0],$1[0].toUpperCase());
  })
}

alert(toCapitalize('i like js'));

// 字符 'CSS value type' => 'css-value-type'
function toBetterUrl(str){
  return str.replace(/\s|[A-Z]/g,function($1){
      return $1 === " "?"-":$1.toLowerCase();
  })
}

alert(toBetterUrl('CSS value type'))























