// 6222081812002934027 将这段字符串处理成4 4 4 4 3的形式
var bankCode = '6222081812002934027';
console.log(bankCode.replace(/(\d{4})/g,'$1 '));